import { useTranslations } from 'next-intl'

import { DownloadButton } from '@/components/DownloadButton'
import { Fragment } from 'react'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'

export function OneReportTable() {
  const common = useTranslations('common')
  const t = useTranslations('InvestorInformationPage.OneReportTable')

  return (
    <div>
      <table className='w-full report shadow-6 rounded-[10px] overflow-hidden'>
        <thead>
          <tr>
            <th className='subtitle-1'>{common('year')}</th>
            <th className='subtitle-1'>{t('56-1OneReport')}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className='small-medium text-black-2'>2566</div>
                <div className='small-reg text-dark-40'>2023</div>
              </td>
              <td>
                <DownloadButton className='mx-auto' href='' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type='button'
        className='mt-[20px] subtitle-1 text-blue-400 flex items-center gap-[9px] mx-auto'
      >
        <ArrowRightIcon className='rotate-90' width='16' height='16' />
        {common('seeMore')}
      </button>
    </div>
  )
}
