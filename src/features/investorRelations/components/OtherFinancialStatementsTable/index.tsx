import { useTranslations } from 'next-intl'

import { DownloadButton } from '@/components/DownloadButton'
import { financialStatementReportInformationList } from '@/features/investorRelations/components/OtherFinancialStatementsTable/FinancialStatementReportInformationList'

export function OtherFinancialStatementsTable() {
  const common = useTranslations('common')
  const t = useTranslations(
    'InvestorInformationPage.OtherFinancialStatementsTable'
  )

  return (
    <table className='w-full report shadow-3 rounded-[10px] overflow-hidden'>
      <thead>
        <tr>
          <th className='subtitle-1'>{common('year')}</th>
          <th className='subtitle-1'>{t('q1')}</th>
          <th className='subtitle-1'>{t('q2')}</th>
          <th className='subtitle-1'>{t('q3')}</th>
          <th className='subtitle-1'>{t('annual')}</th>
        </tr>
      </thead>
      <tbody>
        {financialStatementReportInformationList.map((item, index) => (
          <tr key={index}>
            <td>
              <div className='small-medium text-black-2'>{item.year + 543}</div>
              <div className='small-reg text-dark-40'>{item.year}</div>
            </td>
            <td>
              <DownloadButton className='mx-auto' href={item.quarter1LinkUrl} />
            </td>
            <td>
              <DownloadButton className='mx-auto' href={item.quarter2LinkUrl} />
            </td>
            <td>
              <DownloadButton className='mx-auto' href={item.quarter3LinkUrl} />
            </td>
            <td>
              <DownloadButton className='mx-auto' href={item.quarter4LinkUrl} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
