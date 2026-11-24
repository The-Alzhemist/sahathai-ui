import nodemailer from 'nodemailer'

import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'
import { buildContactEmail, ContactSubmission } from './template'

export type { ContactSubmission }

// Recipient env per form type; CONTACT_TO_DEFAULT is the fallback (handy for testing)
const RECIPIENT_ENV: Record<ContactUsTypeEnum, string> = {
  [ContactUsTypeEnum.CONTACT]: 'CONTACT_TO_CONTACT',
  [ContactUsTypeEnum.FRAUD_COMPLAINT]: 'CONTACT_TO_COMPLAINT',
  [ContactUsTypeEnum.IR_CONTACT]: 'CONTACT_TO_IR',
  [ContactUsTypeEnum.COMPANY_SECRETARY]: 'CONTACT_TO_SECRETARY',
}

function getRecipient(type: ContactUsTypeEnum): string {
  const to = process.env[RECIPIENT_ENV[type]] || process.env.CONTACT_TO_DEFAULT
  if (!to) throw new Error(`No recipient configured for ${type}`)
  return to
}

let transporter: nodemailer.Transporter | null = null

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP_HOST, SMTP_USER and SMTP_PASS must be set')
  }

  const port = Number(process.env.SMTP_PORT || 587)
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 = implicit TLS; 587 = STARTTLS
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
  return transporter
}

export async function sendContactMail(data: ContactSubmission): Promise<void> {
  const { subject, text, html } = buildContactEmail(data)

  await getTransporter().sendMail({
    from: {
      name: process.env.SMTP_FROM_NAME || 'Sahathai Website',
      address: process.env.SMTP_USER!,
    },
    to: getRecipient(data.type),
    replyTo: { name: data.name, address: data.email },
    subject,
    text,
    html,
  })
}
