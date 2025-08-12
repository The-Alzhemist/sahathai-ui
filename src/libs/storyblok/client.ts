

const BASE_URL = 'https://api.storyblok.com/v2/cdn'
const TOKEN = process.env.STORYBLOK_TOKEN || 'H1wfrTArHm3VE441H8WQ5wtt' // ใช้ env ถ้าเป็น production

export function buildUrl(
  path: string,
  params: Record<string, string | number | boolean | undefined>
) {
  const url = new URL(`${BASE_URL}/${path}`)
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v))
  })
  url.searchParams.set('token', TOKEN as string)
  return url.toString()
}

export async function fetchJSON<T>(
  url: string,
  revalidateSeconds = 300
): Promise<{ data: T; headers: Headers }> {
  const res = await fetch(url, { next: { revalidate: revalidateSeconds } })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Storyblok fetch failed ${res.status}: ${text}`)
  }
  const data = (await res.json()) as T
  return { data, headers: res.headers }
}
