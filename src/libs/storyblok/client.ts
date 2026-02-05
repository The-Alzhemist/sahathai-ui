const BASE_URL = 'https://api.storyblok.com/v2/cdn'

export function buildUrl(
  path: string,
  params: Record<string, string | number | boolean | undefined>
) {
  const url = new URL(`${BASE_URL}/${path}`)
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v))
  })
  url.searchParams.set('token', process.env.STORYBLOK_TOKEN as string)
  return url.toString()
}
