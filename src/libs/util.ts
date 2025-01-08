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

export function textBreakAndReturnNewLine(
  input: string,
  delimiter: string = '<br/>'
): string[] {
  return input
    .split(delimiter)
    .map(line => line.trim())
    .filter(line => line.length > 0)
}
