import { useTranslations } from 'next-intl'

export function RegulationsCargoShipsContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.regulationsCargoShips.RegulationsCargoShipsContent'
  )

  return (
    <ul className='flex flex-col gap-y-5 list-disc text-sm text-gray-600 px-5'>
      <li>{t('content1')}</li>
      <li>{t('content2')}</li>
      <li>{t('content3')}</li>
      <li>{t('content4')}</li>
      <li>{t('content5')}</li>
      <li>{t('content6')}</li>
      <li>{t('content7')}</li>
      <li>{t('content8')}</li>
      <li>{t('content9')}</li>
    </ul>
  )
}
