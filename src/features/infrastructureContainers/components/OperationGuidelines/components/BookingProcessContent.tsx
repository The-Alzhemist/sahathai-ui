import { useTranslations } from 'next-intl'

export function BookingProcessContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.bookingProcess.BookingProcessContent'
  )

  return (
    <div className='text-sm text-gray-600'>
      <h3 className='text-gray-800 mb-2 underline font-[500]'>{t('title')}</h3>
      <p className='mb-5'>{t('content')}</p>

      <ul className='flex flex-col gap-y-5 list-disc px-5 mb-2'>
        <li>{t('bullet1')}</li>
        <li>{t('bullet2')}</li>
        <li>{t('bullet3')}</li>
        <li>{t('bullet4')}</li>
        <li>{t('bullet5')}</li>
        <li>{t('bullet6')}</li>
        <li>{t('bullet7')}</li>
        <li>{t('bullet8')}</li>
        <li>{t('bullet9')}</li>
        <li>{t('bullet10')}</li>
      </ul>

      <h3 className='text-gray-800 mb-2 underline font-[500]'>{t('title2')}</h3>
      <ul className='flex flex-col gap-y-5 list-disc px-5 mb-2'>
        <li>{t('bullet11')}</li>
        <li>{t('bullet12')}</li>
        <li>{t('bullet13')}</li>
      </ul>

      <h3 className='text-gray-800 mb-2 underline font-[500]'>{t('title3')}</h3>
      <ul className='flex flex-col gap-y-5 list-disc px-5'>
        <li>{t('bullet14')}</li>
        <li>{t('bullet15')}</li>
        <li>{t('bullet16')}</li>
      </ul>
    </div>
  )
}
