import classNames, { ArgumentArray } from 'classnames'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ArgumentArray) {
  return twMerge(classNames(...args))
}

export const commaNumberFormat = (v: number) =>
  new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 }).format(v)

// Always show Thai time: server (UTC on Vercel) and browser must render the same
// text, and it should match what the editor picked in the CMS.
const dateTimeParts = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Bangkok',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

export const formatDateTime = (date: string | Date) => {
  const parts = Object.fromEntries(
    dateTimeParts.formatToParts(new Date(date)).map(p => [p.type, p.value])
  )
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`
}

// CMS links: absolute URLs are external sites; '/...' paths are pages on this
// site that already include the locale.
export const isExternalUrl = (url: string) => url.startsWith('http')

export const getStrapiImageUrl = (imagePath: string) =>
  imagePath.startsWith('http')
    ? imagePath
    : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${imagePath}`
