import { useTranslations } from 'next-intl'

import { DownloadButton } from '@/components/DownloadButton'
import { cn } from '@/libs/util'
import { OneReportTableProps } from './interface'

export function OneReportTable({ className }: OneReportTableProps) {
  const common = useTranslations('common')
  const t = useTranslations('InvestorInformationPage.OneReportTable')

  return (
    <table
      className={cn(
        'w-full report shadow-3 rounded-[10px] overflow-hidden',
        className
      )}
    >
      <thead>
        <tr>
          <th className='subtitle-2'>{common('year')}</th>
          <th className='subtitle-1'>{t('annualReport')}</th>
          <th className='subtitle-1'>{t('report56-1')}</th>
          <th className='subtitle-1'>{t('56-1OneReport')}</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, index) => (
          <tr key={index}>
            <td>
              <div className='font-[500] text-[14px] leading-[22px] inter'>
                2566
              </div>
              <div className='text-[14px] leading-[22px] inter'>2023</div>
            </td>
            <td>
              <DownloadButton className='mx-auto' href='' />
            </td>
            <td>
              <DownloadButton className='mx-auto' href='' />
            </td>
            <td>
              <DownloadButton className='mx-auto' href='' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
