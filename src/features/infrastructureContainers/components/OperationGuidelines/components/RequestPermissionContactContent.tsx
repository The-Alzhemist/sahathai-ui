import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export function RequestPermissionContactContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.requestPermissionContact.RequestPermissionContactContent'
  )

  return (
    <Fragment>
      <h3 className='text-sm text-gray-800 mb-2 underline font-bold'>
        {t('group1.title')}
      </h3>
      <p className='text-gray-600 text-sm mb-5'>{t('group1.content')}</p>

      <h3 className='text-sm text-gray-800 mb-2 underline font-bold'>
        {t('group2.title')}
      </h3>
      <p className='text-gray-600 text-sm mb-5'>{t('group2.content')}</p>

      <h3 className='text-sm text-gray-800 mb-2 underline font-bold'>
        {t('group3.title')}
      </h3>
      <p className='text-gray-600 text-sm mb-5'>{t('group3.content')}</p>

      <h3 className='text-sm text-gray-800 mb-2 underline font-bold'>
        {t('group4.title')}
      </h3>
      <p className='text-gray-600 text-sm mb-5'>{t('group4.content')}</p>

      <h3 className='text-sm text-gray-800 mb-2 underline font-bold'>
        {t('group5.title')}
      </h3>
      <p className='text-gray-600 text-sm mb-5'>{t('group5.content')}</p>

      <h3 className='text-sm text-gray-800 mb-2 underline font-bold'>
        {t('group6.title')}
      </h3>
      <p className='text-gray-600 text-sm'>{t('group6.content')}</p>
    </Fragment>
  )
}
