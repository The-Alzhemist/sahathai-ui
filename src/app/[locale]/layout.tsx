import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server'
import { GoogleTagManager } from '@next/third-parties/google'

import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'

import { LocaleEnum } from '@/enums/LocaleEnum'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import CookieConsentFloatingBar from '@/components/CookieConsentFloatingBar/CookieConsentFloatingBar'
import { ScrollVisibleProvider } from '@/context/ScrollVisibleContext'
import { NavigationTickProvider } from '@/context/NavigationTickContext'

import { BannerPopup } from '@/components/BannerPopup/BannerPopup'
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTop'

export const revalidate = 604800 //7 days

// Site-wide default for any page that doesn't set its own metadata.
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleEnum }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'MetaData' })

  return {
    title: t('Home.Title'),
    description: t('Home.Description'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: LocaleEnum }
}>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no'
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ScrollVisibleProvider>
            <NavigationTickProvider>
              <Header />

              {children}
              <Footer />
              <BannerPopup locale={locale} />
              <ToastContainer />
              <GoogleTagManager gtmId={process.env.GTM_STAGING!} />
              <CookieConsentFloatingBar />
              <ScrollToTopButton />
            </NavigationTickProvider>
          </ScrollVisibleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
