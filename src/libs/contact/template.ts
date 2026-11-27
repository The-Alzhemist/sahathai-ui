import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'

export interface ContactSubmission {
  type: ContactUsTypeEnum
  name: string
  email: string
  phone: string
  message: string
}

interface TypeStyle {
  label: string
  labelEn: string
  accent: string
  tint: string
}

const NAVY = { accent: '#015A99', tint: '#E8F1F8' }
const RED = { accent: '#C43D30', tint: '#FBECEA' }

const TYPE_STYLE: Record<ContactUsTypeEnum, TypeStyle> = {
  [ContactUsTypeEnum.CONTACT]: {
    label: 'แบบฟอร์มติดต่อ',
    labelEn: 'Contact',
    ...NAVY,
  },
  [ContactUsTypeEnum.FRAUD_COMPLAINT]: {
    label: 'แบบฟอร์มข้อร้องเรียนเรื่องการบริการ',
    labelEn: 'Service complaint',
    ...RED,
  },
  [ContactUsTypeEnum.IR_CONTACT]: {
    label: 'แบบฟอร์มติดต่อ IR',
    labelEn: 'Investor relations',
    ...NAVY,
  },
  [ContactUsTypeEnum.COMPANY_SECRETARY]: {
    label: 'แบบฟอร์มเลขานุการบริษัทฯ',
    labelEn: 'Company secretary',
    ...NAVY,
  },
}

// Mail clients don't load web fonts reliably; Tahoma covers Thai on Windows/Outlook
const FONT = "'Prompt', Tahoma, 'Segoe UI', Arial, sans-serif"
const TEXT = '#1F2937'
const MUTED = '#6B7280'
const BORDER = '#DFE4EA'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function detailRow(label: string, valueHtml: string, last = false): string {
  const border = last ? '' : `border-bottom:1px solid ${BORDER};`
  return `<tr>
  <td style="padding:12px 0;${border}width:150px;vertical-align:top;font-size:13px;color:${MUTED};">${label}</td>
  <td style="padding:12px 0;${border}vertical-align:top;font-size:15px;color:${TEXT};">${valueHtml}</td>
</tr>`
}

export function buildContactEmail(
  data: ContactSubmission,
  sentAt: Date = new Date()
): { subject: string; text: string; html: string } {
  const style = TYPE_STYLE[data.type]
  const fullLabel = `${style.label} (${style.labelEn})`
  const date = sentAt.toLocaleString('th-TH', {
    timeZone: 'Asia/Bangkok',
    dateStyle: 'long',
    timeStyle: 'short',
  })

  const subject = `[${fullLabel}] ${data.name}`

  const text = [
    `ข้อความใหม่จากเว็บไซต์ — ${fullLabel}`,
    '',
    `วันที่: ${date}`,
    `ชื่อผู้ติดต่อ: ${data.name}`,
    `โทรศัพท์: ${data.phone}`,
    `อีเมล: ${data.email}`,
    '',
    'ข้อความ:',
    data.message,
    '',
    '— ตอบกลับอีเมลนี้เพื่อติดต่อผู้ส่งได้โดยตรง',
  ].join('\n')

  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const phone = escapeHtml(data.phone)
  const replyHref = escapeHtml(
    `mailto:${data.email}?subject=${encodeURIComponent(
      `Re: ${style.label} — Sahathai Terminal`
    )}`
  )

  const siteUrl = process.env.DOMAIN_NAME?.replace(/\/$/, '')
  // The logo needs a public URL; fall back to a text wordmark (e.g. local dev)
  const brand = siteUrl
    ? `<img src="${escapeHtml(
        `${siteUrl}/logo.png`
      )}" width="150" height="35" alt="Sahathai Terminal" style="display:block;border:0;height:35px;width:150px;">`
    : `<span style="font-size:20px;font-weight:700;letter-spacing:1px;"><span style="color:#0194D3;">SAHA</span><span style="color:#E54C3C;">THAI</span></span><br><span style="font-size:10px;letter-spacing:6px;color:${MUTED};">TERMINAL</span>`

  const html = `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#F5F5F5;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${name} ส่งข้อความผ่าน${escapeHtml(
    style.label
  )}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F5F5;">
<tr><td align="center" style="padding:32px 16px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#FFFFFF;border-radius:10px;border-top:4px solid ${
    style.accent
  };font-family:${FONT};">
    <tr><td style="padding:28px 32px 20px;border-bottom:1px solid ${BORDER};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
        <td style="vertical-align:middle;font-family:${FONT};">${brand}</td>
        <td align="right" style="vertical-align:middle;font-size:12px;color:${MUTED};font-family:${FONT};">${escapeHtml(
          date
        )}</td>
      </tr></table>
    </td></tr>

    <tr><td style="padding:28px 32px 8px;">
      <span style="display:inline-block;padding:4px 12px;border-radius:999px;background:${
        style.tint
      };color:${style.accent};font-size:12px;font-weight:600;">${escapeHtml(
    fullLabel
  )}</span>
      <h1 style="margin:14px 0 4px;font-size:22px;font-weight:600;color:${TEXT};">มีข้อความใหม่จากเว็บไซต์</h1>
      <p style="margin:0;font-size:14px;color:${MUTED};">New message from the website</p>
    </td></tr>

    <tr><td style="padding:12px 32px 0;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};">
        ${detailRow('ชื่อผู้ติดต่อ<br>Name', name)}
        ${detailRow(
          'โทรศัพท์<br>Phone',
          `<a href="tel:${phone}" style="color:${TEXT};text-decoration:none;">${phone}</a>`
        )}
        ${detailRow(
          'อีเมล<br>E-mail',
          `<a href="mailto:${email}" style="color:${style.accent};text-decoration:none;">${email}</a>`,
          true
        )}
      </table>
    </td></tr>

    <tr><td style="padding:20px 32px 0;">
      <p style="margin:0 0 8px;font-size:13px;color:${MUTED};">ข้อความ / Message</p>
      <div style="padding:16px 18px;background:#F7F9FB;border-left:3px solid ${
        style.accent
      };border-radius:6px;font-size:15px;line-height:1.6;color:${TEXT};white-space:pre-wrap;word-break:break-word;">${escapeHtml(
    data.message
  )}</div>
    </td></tr>

    <tr><td style="padding:28px 32px 32px;">
      <a href="${replyHref}" style="display:inline-block;padding:12px 28px;background:${
        style.accent
      };color:#FFFFFF;border-radius:999px;font-size:15px;font-weight:600;text-decoration:none;">ตอบกลับ ${name}</a>
    </td></tr>
  </table>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
    <tr><td style="padding:16px 32px;font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};text-align:center;">
      อีเมลนี้ส่งอัตโนมัติจากแบบฟอร์มบนเว็บไซต์ Sahathai Terminal<br>
      กด Reply เพื่อตอบผู้ติดต่อได้โดยตรง · Reply to this email to answer the sender directly
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`

  return { subject, text, html }
}
