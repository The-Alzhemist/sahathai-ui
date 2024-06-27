'use client'
import { useTranslations } from 'next-intl'
import ReactPaginate from 'react-paginate'
import { DownloadButton } from '../../components/DownloadButton'

export function FinancialReportsPage() {
  const t = useTranslations('FinancialReportsPage')
  const common = useTranslations('common')

  return (
    <main className='max-w-[1303px] w-full mx-auto py-[80px]'>
      <h1 className='font-[700] text-[24px] leading-[44px]'>{t('title')}</h1>
      <table className='w-full mt-[32px]'>
        <thead>
          <tr>
            <th>{common('year')}</th>
            <th>{common('q1')}</th>
            <th>{common('q2')}</th>
            <th>{common('q3')}</th>
            <th>{common('annual')}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className='font-[500] text-[14px] leading-[22px]'>
                  2566
                </div>
                <div className='text-[14px] leading-[22px]'>2023</div>
              </td>
              <td>
                <DownloadButton className='mx-auto' />
              </td>
              <td>
                <DownloadButton className='mx-auto' />
              </td>
              <td>
                <DownloadButton className='mx-auto' />
              </td>
              <td>
                <DownloadButton className='mx-auto' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className='flex justify-end mt-[42px] gap-[8px]'
        breakLabel='...'
        nextLabel='next >'
        onPageChange={() => {}}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
      />
    </main>
  )
}
