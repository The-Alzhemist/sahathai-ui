'use client'
import { useTranslations } from 'next-intl'

import { Menu } from '@/components/Menu'
import { Animation } from '@/components/Animation'
import { TelephoneIcon } from '@/components/icons/TelephoneIcon'
import { MailIcon } from '@/components/icons/MailIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function CompanySecretaryContactPage() {
  const t = useTranslations('CompanySecretaryContact')
  const { tick } = useNavigationTick()

  return (
    <Animation key={tick}>
      <Menu />
      <section className='container-mini flex min-h-[calc(100vh-240px)] flex-col  pt-[96px] pb-[124px]'>
        <h2
          className='w-full text-center text-[32px] leading-[48.38px] font-[500] text-navy'
          id='company-secretary-contact'
        >
          {t('title')}
        </h2>

        <div className='mt-[52px] flex justify-center'>
          <div className='w-full max-w-[420px] rounded-[14px] bg-white p-[24px] shadow-6'>
            <div className='flex items-center gap-[14px]'>
              <div className='flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#E8F4FF]'>
                <UserIcon className='h-[24px] w-[24px]' />
              </div>
              <h3 className='text-md font-[600] text-navy mobile:text-[20px] mobile:leading-[30px]'>
                {t('nameTitle')}
              </h3>
            </div>

            <div className='mt-[18px] space-y-[10px] text-[14px] font-[500] leading-[20px] text-[#60666F]'>
              <div className='flex items-center gap-[10px]'>
                <TelephoneIcon className='h-[18px] w-[18px]' />
                <span>{t('phone')}</span>
              </div>
              <div className='flex items-center gap-[10px]'>
                <MailIcon className='h-[18px] w-[18px]' />
                <a href='mailto:secretary@sahathaiterminal.com'>{t('email')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Animation>
  )
}
