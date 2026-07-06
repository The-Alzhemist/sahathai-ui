import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

export function HazardousGoodsContent() {
  const t = useTranslations(
    'InfrastructureContainersPage.OperationGuidelines.hazardousGoods.HazardousGoodsContent'
  )

  return (
    <Fragment>
      <p className='text-gray-800 text-sm mb-3'>{t('content')}</p>
      <ul className='flex flex-col gap-2 text-gray-800 text-sm mb-3'>
        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-red-200 rounded-xl px-3 py-1 whitespace-nowrap'>
            {t('group1.title')}
          </span>
          <span>{t('group1.content')}</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-yellow-200 rounded-xl px-3 py-1 whitespace-nowrap'>
            {t('group2.title')}
          </span>
          <span>{t('group2.content')}</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-green-200 rounded-xl px-3 py-1 whitespace-nowrap'>
            {t('group3.title')}
          </span>
          <span>{t('group3.content')}</span>
        </li>
      </ul>

      <div className='flex items-center flex-wrap gap-2 border rounded-md items-center px-3 py-1'>
        <span className='text-sm text-gray-700'>{t('link1')}</span>

        <a
          className='text-primary-1'
          href='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=DG'
          rel='noopener'
          target='_blank'
        >
          {t('link2')}
        </a>
      </div>
    </Fragment>
  )
}
