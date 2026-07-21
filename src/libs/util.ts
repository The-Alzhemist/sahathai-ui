import classNames, { ArgumentArray } from 'classnames'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ArgumentArray) {
  return twMerge(classNames(...args))
}

export const commaNumberFormat = (v: number) =>
  new Intl.NumberFormat("th-TH", { maximumFractionDigits: 2 }).format(v);