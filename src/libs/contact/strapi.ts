import { ContactSubmission } from './mail'

type EmailStatus = 'pending' | 'sent' | 'failed'

const ENDPOINT = '/api/contact-submissions'

function getConfig() {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
  const token = process.env.STRAPI_CONTACT_TOKEN
  return baseUrl && token ? { baseUrl, token } : null
}

async function strapiRequest(
  path: string,
  method: 'POST' | 'PUT',
  data: Record<string, unknown>
) {
  const config = getConfig()
  if (!config) return null

  const res = await fetch(`${config.baseUrl}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.token}`,
    },
    body: JSON.stringify({ data }),
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error(`Strapi ${method} ${path} failed: ${res.status}`)
  }
  return res.json()
}

/**
 * Saves a submission to Strapi. Returns its documentId, or null when Strapi
 * is not configured (STRAPI_CONTACT_TOKEN unset).
 */
export async function saveSubmission(
  data: ContactSubmission
): Promise<string | null> {
  const body = await strapiRequest(ENDPOINT, 'POST', {
    formType: data.type,
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    emailStatus: 'pending',
  })
  return body?.data?.documentId ?? null
}

export async function updateEmailStatus(
  documentId: string,
  emailStatus: EmailStatus
): Promise<void> {
  await strapiRequest(`${ENDPOINT}/${documentId}`, 'PUT', { emailStatus })
}
