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

export const getStrapiImageUrl = (imagePath: string) =>
  imagePath.startsWith('http')
    ? imagePath
    : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${imagePath}`