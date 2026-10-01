'use client'

import { useTranslations } from 'next-intl'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { cn } from '@/libs/util'
import { AnnualReport } from '@/types/AnnualReport'

import { OneReportTable } from '../OneReportTable'

export function FinancialReports({
  data,
  showBackground = false,
}: {
  data: AnnualReport[]
  showBackground?: boolean
}) {
  const t = useTranslations('InvestorInformationPage.FinancialReports')

  return (
    <Animation
      className={cn('relative isolate space-y-[32px] p-3 !mt-0', {
        [`after:content-[''] after:absolute after:inset-0
          after:bg-[url('/investor-relations/new/investor-relation-bg-4.webp')] after:bg-center after:bg-no-repeat after:bg-cover
          after:opacity-100 after:-z-10`]: showBackground,
      })}
    >
      <h2
        id={InvestorInformationEnum.FinancialReports}
        className='headline-2 text-blue-400 text-center'
      >
        {t('title')}
      </h2>
      <h3 className='text-center text-navy text-xl !mt-1 font-light'>
        ({t('yearlyReport')})
      </h3>

      <OneReportTable data={data} />
    </Animation>
  )
}
