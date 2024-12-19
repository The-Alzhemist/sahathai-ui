import { PrivacyPolicyBox } from '@/features/privacy-policy/components/PrivacyPolicyBox/PrivacyPolicyBox'
import withPolicyPage from './withPolicyPage'
import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'
import CookieConsentFloatingBar from '@/components/CookieConsentFloatingBar/CookieConsentFloatingBar'

const PolicyPage = () => {
  const t = useTranslations('PrivacyPolicyPage')
  return (
    <main className='mt-[100px] mx-auto '>
      <Menu />

      <section className='px-5'>
        <h1 className='text-xl md:text-4xl text-navy text-center mb-10'>
          Cookie Policy
        </h1>

        <div className='flex flex-col justify-center items-center max-w-[860px] mx-auto'>
          <PrivacyPolicyBox
            title={t('CookiePolicy.title')}
            description={t('CookiePolicy.description')}
          />

          <PrivacyPolicyBox
            title={t('WhatAreCookies.title')}
            description={t('WhatAreCookies.description')}
          />

          <PrivacyPolicyBox
            title={t('HowWeUseCookies.title')}
            description={t('HowWeUseCookies.description')}
          />

          <PrivacyPolicyBox
            title={t('HowToManageCookies.title')}
            description={t('HowToManageCookies.description')}
          />

          <PrivacyPolicyBox
            title={t('UpdateCookiesPolicy.title')}
            description={t('UpdateCookiesPolicy.description')}
          />
        </div>
      </section>
      <CookieConsentFloatingBar />
    </main>
  )
}

const WrappedComponent = withPolicyPage(PolicyPage)
export default WrappedComponent
