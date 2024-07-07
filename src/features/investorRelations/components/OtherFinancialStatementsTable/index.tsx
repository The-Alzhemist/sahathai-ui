import { useTranslations } from 'next-intl'

import { DownloadButton } from '@/components/DownloadButton'

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
        {Array.from({ length: 10 }).map((_, index) => (
          <tr key={index}>
            <td>
              <div className='small-medium text-black-2'>2566</div>
              <div className='small-reg text-dark-40'>2023</div>
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
            <td>
              <DownloadButton className='mx-auto' href='' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
