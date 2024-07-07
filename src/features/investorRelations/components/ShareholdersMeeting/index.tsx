'use client'
import { useTranslations } from 'next-intl'

import { Pagination } from '@/components/Pagination'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { ShareholdersMeetingCard } from '../ShareholdersMeetingCard'

export function ShareholdersMeeting() {
  const t = useTranslations('InvestorInformationPage.ShareholdersMeeting')

  return (
    <Animation className='max-w-[893px] w-full'>
      <h2
        id={InvestorInformationEnum.ShareholdersMeeting}
        className='headline-2 text-blue-400'
      >
        {t('title')}
      </h2>
      <div className='mt-[39px] flex flex-wrap gap-x-[16px] gap-y-[40px]'>
        {Array.from({ length: 8 }).map((_, index) => (
          <ShareholdersMeetingCard
            key={index}
            title='การประชุมสามัญผู้ถือหุ้นประจำปี 2567'
          />
        ))}
      </div>
      <Pagination
        className='mt-[40px] investor-relations'
        pageCount={10}
        pageChange={() => {}}
      />
    </Animation>
  )
}
