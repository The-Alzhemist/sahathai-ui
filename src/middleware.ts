import createMiddleware from 'next-intl/middleware'

const locales = ['th', 'en']

export default createMiddleware({
  locales,
  defaultLocale: 'th',
})

export const config = {
  matcher: ['/', '/(th|en)/:path*'],
}
