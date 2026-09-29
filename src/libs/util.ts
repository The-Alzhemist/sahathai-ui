import classNames, { ArgumentArray } from 'classnames'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

export function cn(...args: ArgumentArray) {
  return twMerge(classNames(...args))
}

export const commaNumberFormat = (v: number) =>
  new Intl.NumberFormat("th-TH", { maximumFractionDigits: 2 }).format(v);

export const formatDateTime = (date: string | Date) =>
  format(new Date(date), 'yyyy-MM-dd HH:mm')

const STRAPI_BASE_URL = 'http://localhost:1337'

export const getStrapiImageUrl = (imagePath: string) =>
  `${STRAPI_BASE_URL}${imagePath}`