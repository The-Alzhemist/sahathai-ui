import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export function ServiceProcessContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.serviceCharge.ServiceProcess'
  )

  return (
    <Fragment>
      <p className='text-gray-600 text-sm mb-3'>{t('content1')}</p>
      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
        <span className='text-sm text-gray-600'>{t('content2')}</span>
        <span className='text-primary-1'>{t('tell')}</span>
      </div>
    </Fragment>
  )
}
