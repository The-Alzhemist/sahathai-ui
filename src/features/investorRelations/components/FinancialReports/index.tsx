'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { FinancialReportsEnum } from '@/enums/investorRelations/FinancialReportsEnum'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { FinancialReportsTabs } from '../FinancialReportsTabs'
import { Tab } from '../FinancialReportsTabs/Tab'
import { OneReportTable } from '../OneReportTable'
import { OtherFinancialStatementsTable } from '../OtherFinancialStatementsTable'

export function FinancialReports() {
  const t = useTranslations('InvestorInformationPage.FinancialReports')
  const [active, setActive] = useState<FinancialReportsEnum>(
    FinancialReportsEnum.OneReport
  )

  return (
    <Animation
      className="
        relative isolate space-y-[32px]
        after:content-[''] after:absolute after:inset-0
        after:bg-[url('/investor-relations/one-report-bg.webp')] after:bg-center after:bg-no-repeat after:bg-cover
        after:opacity-80 after:-z-10 py-20
      "
    >
      {/* Title */}
      <h2
        id={InvestorInformationEnum.FinancialReports}
        className="headline-2 text-blue-400 text-center"
      >
        {t('title')}
      </h2>
      <h3 className="text-center text-navy text-xl !mt-1 font-light">
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
