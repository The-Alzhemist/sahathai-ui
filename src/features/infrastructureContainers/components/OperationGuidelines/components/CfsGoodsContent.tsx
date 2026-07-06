import { useTranslations } from 'next-intl'

export function CfsGoodsContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.cfsLcl.CfsGoodsContent'
  )

  return (
    <div className='text-sm text-gray-600 px-5'>
      <h3 className='text-sm text-gray-800 mb-5 underline font-[500]'>
        {t('title1')}
      </h3>

      <ul className='flex flex-col gap-y-5 list-disc mb-7'>
        <li>{t('content1_1')}</li>
        <li>{t('content1_2')}</li>
        <li>{t('content1_3')}</li>
      </ul>

      <h3 className='text-sm text-gray-800 mb-5 underline font-[500]'>
        {t('title2')}
      </h3>

      <ul className='flex flex-col gap-y-5 list-disc mb-7'>
        <li>{t('content2_1')}</li>
        <li>{t('content2_2')}</li>
        <li>{t('content2_3')}</li>
        <li>{t('content2_4')}</li>
      </ul>

      <h3 className='text-sm text-gray-800 mb-5 underline font-[500]'>
        {t('title3')}
      </h3>

      <ul className='flex flex-col gap-y-5 list-disc'>
        <li>{t('content3_1')}</li>
      </ul>
    </div>
  )
}
