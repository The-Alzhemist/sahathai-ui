import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { UsersIcon } from '@/components/icons/UsersIcon'

export function ContactHumanResources() {
  const t = useTranslations('JoinUsPage.ContactHumanResources')

  return (
    <Animation className='max-w-[896px] mx-auto bg-blue-50 border-2 border-blue-100 rounded-[8px] p-[32px] space-y-[16px]'>
      <div className='text-blue-400 flex items-center gap-[8px]'>
        <UsersIcon width='40' height='40' />
        <h2 className='headline-3'>{t('title')}</h2>
      </div>

      <p className='body-1'>{t('phoneNumber')}</p>
    </Animation>
  )
}
