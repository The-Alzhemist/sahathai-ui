'use client'
import { useTranslations } from 'next-intl'

import { Menu } from '@/components/Menu'
import { Animation } from '@/components/Animation'
import { ContactUsForm } from '@/components/ContactUs/ContactUsForm'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function CompanySecretaryContactPage() {
  const t = useTranslations('CompanySecretaryContact')
  const { tick } = useNavigationTick()

  return (
    <Animation key={tick}>
      <Menu />
      <section className='container-mini pt-[96px] pb-[124px] space-y-[52px]'>
        <h2
          className='w-full text-center text-[32px] leading-[48.38px] font-[500] text-navy'
          id='company-secretary-contact'
        >
          {t('title')}
        </h2>
        <ContactUsForm variant='companySecretary' />
      </section>
    </Animation>
  )
}
