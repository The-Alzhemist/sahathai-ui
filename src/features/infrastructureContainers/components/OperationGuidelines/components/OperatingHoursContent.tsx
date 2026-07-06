import { useTranslations } from 'next-intl'

export function OperatingHoursContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.operatingHours'
  )

  return (
    <ul className='flex flex-col gap-y-5 list-disc px-5'>
      <li className='text-gray-600 text-sm'>{t('content1')}</li>
      <li className='text-gray-600 text-sm'>{t('content2')}</li>
      <li className='text-gray-600 text-sm'>{t('content3')}</li>
      <li className='text-gray-600 text-sm'>{t('content4')}</li>
      <li className='text-gray-600 text-sm'>{t('content5')}</li>
      <li className='text-red-600 text-sm'>{t('content6')}</li>
      <li className='text-red-600 text-sm'>{t('content7')}</li>
    </ul>
  )
}
