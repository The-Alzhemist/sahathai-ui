'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { FinancialReportsEnum } from '@/enums/investorRelations/FinancialReportsEnum'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'

import { OneReportTable } from '../OneReportTable'

export function FinancialReports() {
  const t = useTranslations('InvestorInformationPage.FinancialReports')
  const [active] = useState<FinancialReportsEnum>(
    FinancialReportsEnum.OneReport
  )

  return (
    <Animation
      className="
        relative isolate space-y-[32px]
        after:content-[''] after:absolute after:inset-0
        after:bg-[url('/investor-relations/new/investor-relation-bg-4.webp')] after:bg-center after:bg-no-repeat after:bg-cover
        after:opacity-100 after:-z-10 p-3 !mt-0
      "
    >
      {/* Title */}
      <h2
        id={InvestorInformationEnum.FinancialReports}
        className='headline-2 text-blue-400 text-center'
      >
        {t('title')}
      </h2>
      <h3 className='text-center text-navy text-xl !mt-1 font-light'>
        ({t('yearlyReport')})
      </h3>

      {/* Tabs (ถ้าจะใช้) */}
      {/*
      <FinancialReportsTabs>
        <Tab
          isActive={active === FinancialReportsEnum.OneReport}
          onClick={() => setActive(FinancialReportsEnum.OneReport)}
        >
          รายงานประจำปี
        </Tab>

        <Tab
          isActive={active === FinancialReportsEnum.OtherFinancialStatements}
          onClick={() => setActive(FinancialReportsEnum.OtherFinancialStatements)}
        >
          {t('otherFinancialStatements')}
        </Tab>
      </FinancialReportsTabs>
      */}

      {/* Content */}
      {active === FinancialReportsEnum.OneReport && <OneReportTable />}

      {/*
      {active === FinancialReportsEnum.OtherFinancialStatements && (
        <OtherFinancialStatementsTable />
      )}
      */}
    </Animation>
  )
}
