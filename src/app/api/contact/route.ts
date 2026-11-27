import { NextRequest, NextResponse } from 'next/server'
import * as Yup from 'yup'

import {
  CONTACT_HONEYPOT_FIELD,
  ContactUsTypeEnum,
} from '@/enums/ContactUsEnum'
import { contactUsValidationSchema } from '@/components/ContactUs/ContactUsValidation'
import { ContactSubmission, sendContactMail } from '@/libs/contact/mail'
import { isRateLimited } from '@/libs/contact/rateLimit'
import { saveSubmission, updateEmailStatus } from '@/libs/contact/strapi'

// Must run on Node.js (nodemailer needs TCP sockets)
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const singleLine = (s: unknown) =>
  typeof s === 'string' ? s.replace(/[\r\n]+/g, ' ').trim() : s

const serverSchema = contactUsValidationSchema.shape({
  type: Yup.mixed<ContactUsTypeEnum>()
    .oneOf(Object.values(ContactUsTypeEnum))
    .required(),
  name: Yup.string().transform(singleLine).max(200).required(),
  phone: Yup.string()
    .transform(singleLine)
    .matches(/^[^-]*$/)
    .max(50)
    .required(),
  email: Yup.string().trim().email().max(254).required(),
  message: Yup.string().trim().max(500).required(),
})

function json(status: number, message: string) {
  return NextResponse.json({ ok: status < 400, message }, { status })
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.ip ||
    'unknown'

  if (await isRateLimited(ip)) {
    return json(429, 'Too many requests')
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json(400, 'Invalid JSON')
  }
  if (!body || typeof body !== 'object') {
    return json(400, 'Invalid JSON')
  }

  // Pretend success so bots don't learn they were caught
  if (body[CONTACT_HONEYPOT_FIELD]) {
    return json(200, 'OK')
  }

  let data: ContactSubmission
  try {
    data = (await serverSchema.validate(body, {
      stripUnknown: true,
      abortEarly: true,
    })) as ContactSubmission
  } catch (error) {
    return json(
      400,
      error instanceof Yup.ValidationError ? error.message : 'Invalid data'
    )
  }

  // Saving is best effort: a Strapi outage must not lose the email
  let documentId: string | null = null
  try {
    documentId = await saveSubmission(data)
  } catch (error) {
    console.error('Contact form: Strapi save failed', error)
  }

  try {
    await sendContactMail(data)
  } catch (error) {
    console.error('Contact form: send mail failed', error)
    if (documentId) {
      await updateEmailStatus(documentId, 'failed').catch(() => {})
    }
    return json(502, 'Cannot send email')
  }

  if (documentId) {
    await updateEmailStatus(documentId, 'sent').catch((error) =>
      console.error('Contact form: Strapi status update failed', error)
    )
  }

  return json(200, 'OK')
}
