import { Pathnames } from 'next-intl/routing'

export const locales = ['th', 'en', 'cn'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    th: '/pathnames',
    en: '/pathnames',
    cn: '/pathnames',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
