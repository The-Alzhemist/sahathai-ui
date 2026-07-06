import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export function DockingInfoContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.docking'
  )

  return (
    <Fragment>
      <p className='text-gray-600 text-sm mb-3'>{t('content1')}</p>
      <p className='text-gray-600 text-sm'>{t('content2')}</p>
    </Fragment>
  )
}
