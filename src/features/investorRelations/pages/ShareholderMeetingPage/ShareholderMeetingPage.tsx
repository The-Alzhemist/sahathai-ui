'use client'
import { useTranslations } from 'next-intl'

import { Card } from './components/Card'
import ReactPaginate from 'react-paginate'

export function ShareholderMeetingPage() {
  const t = useTranslations('ShareholderMeetingPage')

  return (
    <main className='py-[80px] max-w-[1300px] mx-auto'>
      <h1 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h1>

      <section className='mt-[80px] p-[10px] flex flex-wrap gap-x-[16px] gap-y-[40px]'>
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
        <Card title='การประชุมสามัญผู้ถือหุ้น ประจำปี 2567' />
      </section>

      <ReactPaginate
        className='flex justify-end mt-[28px] gap-[8px]'
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
