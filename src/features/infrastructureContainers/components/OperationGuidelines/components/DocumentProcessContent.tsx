import { useTranslations } from 'next-intl'

export function DocumentProcessContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.documentSubmissionProcess.DocumentProcess'
  )

  return (
    <div className='px-5'>
      <h3 className='text-sm text-gray-800 mb-2 underline font-[500]'>
        {t('title1')}
      </h3>
      <p className='text-gray-600 text-sm mb-5'>{t('content1')}</p>

      <h3 className='text-sm text-gray-800 mb-2 underline font-[500]'>
        {t('title2')}
      </h3>
      <ul className='flex flex-col gap-y-5 list-disc text-gray-600 text-sm'>
        <li>{t('content2_1')}</li>
        <li>{t('content2_2')}</li>
        <li>{t('content2_3')}</li>
        <li>{t('content2_4')}</li>
      </ul>
    </div>
  )
}
