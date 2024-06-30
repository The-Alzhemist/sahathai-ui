import classNames, { ArgumentArray } from 'classnames'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ArgumentArray) {
  return twMerge(classNames(...args))
}

export function getHash() {
  return typeof window !== 'undefined'
    ? decodeURIComponent(window.location.hash.replace('#', ''))
    : undefined
}
