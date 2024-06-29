import { UsersIcon } from '@/components/icons/UsersIcon'
import { useTranslations } from 'next-intl'

export function ContactHumanResources() {
  const t = useTranslations('JoinUsPage.ContactHumanResources')

  return (
    <section className='max-w-[896px] mx-auto bg-blue-600 border-2 border-blue-700 rounded-[8px] p-[32px] flex gap-[16px] text-blue'>
      <UsersIcon width='60' height='60' />
      <div>
        <h3 className='font-[300] leading-[36px]'>{t('title')}</h3>
        <p className='font-[600] text-[24px] leading-[36px]'>
          {t('phoneNumber')}
        </p>
      </div>
    </section>
  )
}
