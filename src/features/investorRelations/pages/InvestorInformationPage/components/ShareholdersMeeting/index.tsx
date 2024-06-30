'use client'
import { useTranslations } from 'next-intl'

import { Pagination } from '@/components/Pagination'
import { cn } from '@/libs/util'
import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { ShareholdersMeetingCard } from '../ShareholdersMeetingCard'
import { ShareholdersMeetingProps } from './interface'

export function ShareholdersMeeting({ className }: ShareholdersMeetingProps) {
  const t = useTranslations('InvestorInformationPage.ShareholdersMeeting')

  return (
    <section className={cn('max-w-[893px] w-full', className)}>
      <h2
        id={InvestorRelationEnum.ShareholdersMeeting}
        className='headline-2 text-black-80'
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
      <Pagination className='mt-[40px]' pageCount={10} pageChange={() => {}} />
    </section>
  )
}
