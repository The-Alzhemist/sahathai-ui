import nodemailer from 'nodemailer'

import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'

export interface ContactSubmission {
  type: ContactUsTypeEnum
  name: string
  email: string
  phone: string
  message: string
}

const TYPE_LABEL: Record<ContactUsTypeEnum, string> = {
  [ContactUsTypeEnum.CONTACT]: 'แบบฟอร์มติดต่อ (Contact)',
  [ContactUsTypeEnum.FRAUD_COMPLAINT]:
    'แบบฟอร์มข้อร้องเรียนเรื่องการบริการ (Service complaint)',
  [ContactUsTypeEnum.IR_CONTACT]: 'แบบฟอร์มติดต่อ IR (IR contact)',
  [ContactUsTypeEnum.COMPANY_SECRETARY]:
    'แบบฟอร์มเลขานุการบริษัทฯ (Company secretary)',
}

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContactMail(data: ContactSubmission): Promise<void> {
  const label = TYPE_LABEL[data.type]
  const sentAt = new Date().toLocaleString('th-TH', {
    timeZone: 'Asia/Bangkok',
  })

  const rows: [string, string][] = [
    ['ประเภท (Type)', label],
    ['วันที่ (Date)', sentAt],
    ['ชื่อผู้ติดต่อ (Name)', data.name],
    ['โทรศัพท์ (Phone)', data.phone],
    ['อีเมล (E-mail)', data.email],
    ['ข้อความ (Message)', data.message],
  ]

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top;font-weight:bold;white-space:nowrap">${escapeHtml(
          k
        )}</td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
    )
    .join('')}</table>`

  await getTransporter().sendMail({
    from: {
      name: process.env.SMTP_FROM_NAME || 'Sahathai Website',
      address: process.env.SMTP_USER!,
    },
    to: getRecipient(data.type),
    replyTo: { name: data.name, address: data.email },
    subject: `[${label}] ${data.name}`,
    text,
    html,
  })
}
