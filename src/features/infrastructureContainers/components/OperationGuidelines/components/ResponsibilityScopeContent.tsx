import { useTranslations } from 'next-intl'

export function ResponsibilityScopeContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.responsibilityScope.ResponsibilityScopeContent'
  )

  return (
    <ul className='flex flex-col gap-y-5 list-disc mb-7 text-sm text-gray-600 px-5'>
      <li>{t('content1')}</li>
      <li>{t('content2')}</li>
      <li>{t('content3')}</li>
      <li>{t('content4')}</li>
    </ul>
  )
}
