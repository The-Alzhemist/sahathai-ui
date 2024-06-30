import createMiddleware from 'next-intl/middleware'

const locales = ['th', 'en', 'cn']

export default createMiddleware({
  locales,
  defaultLocale: 'th',
})

export const config = {
  matcher: ['/', '/(th|en|cn)/:path*'],
}
