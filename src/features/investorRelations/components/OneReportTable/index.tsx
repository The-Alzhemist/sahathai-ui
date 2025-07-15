import { useTranslations } from 'next-intl'

import { DownloadButton } from '@/components/DownloadButton'
import { Fragment } from 'react'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { oneReportInformationList } from '@/features/investorRelations/components/OneReportTable/oneReportInformationList'

export function OneReportTable() {
  const common = useTranslations('common')
  const t = useTranslations('InvestorInformationPage.OneReportTable')

  return (
    <div>
      <table className='w-full report shadow-6 rounded-[10px] overflow-hidden'>
        <thead>
        <tr>
          <th className="subtitle-1">{common('year')}</th>
          <th className="subtitle-1">Annual Report/รายงานประจำปี</th>
          <th className="subtitle-1">Report 56-1/รายงาน 56-1</th>
          <th className="subtitle-1">{t('56-1OneReport')}</th>
        </tr>
        </thead>
        <tbody>
        {oneReportInformationList.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="small-medium text-black-2">
                  {item.year + 543}
                </div>
                <div className="small-reg text-dark-40">{item.year}</div>
              </td>
              <td>
                {item.annualReportUrl ? <DownloadButton className="mx-auto" href={item.annualReportUrl} /> : '-' }
              </td>
              <td>
                {item.report56Url ? <DownloadButton className="mx-auto" href={item.report56Url} /> : '-' }
              </td>
              <td>
                {item.oneReportUrl ? <DownloadButton className="mx-auto" href={item.oneReportUrl} /> : '-' }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*<button*/}
      {/*  type="button"*/}
      {/*  className='mt-[20px] subtitle-1 text-blue-400 flex items-center gap-[9px] mx-auto'*/}
      {/*>*/}
      {/*  <ArrowRightIcon className='rotate-90' width='16' height='16' />*/}
      {/*  {common('seeMore')}*/}
      {/*</button>*/}
    </div>
  )
}
