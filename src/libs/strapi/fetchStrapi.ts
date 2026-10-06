import { LocaleEnum } from '@/enums/LocaleEnum'

const FALLBACK_LOCALE = LocaleEnum.TH

export function toStrapiLocale(locale: string): string {
  return locale === LocaleEnum.CN ? 'zh' : locale
}

async function hasNoData(res: Response): Promise<boolean> {
  if (res.status === 404) return true
  if (!res.ok) return false

  const body = await res.clone().json()
  const data = body?.data

  if (data == null) return true
  if (Array.isArray(data) && data.length === 0) {
    const total = body?.meta?.pagination?.total
    return total === undefined || total === 0
  }

  return false
}

export async function fetchStrapi(
  buildUrl: (strapiLocale: string) => string,
  locale: string,
  init: RequestInit
): Promise<Response> {
  const res = await fetch(buildUrl(toStrapiLocale(locale)), init)

  if (locale === FALLBACK_LOCALE || !(await hasNoData(res))) return res

  return fetch(buildUrl(FALLBACK_LOCALE), init)
}
