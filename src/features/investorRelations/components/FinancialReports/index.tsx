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
    <Animation className='space-y-[32px]'>
      <h2
        id={InvestorInformationEnum.FinancialReports}
        className='headline-2 text-blue-400'
      >
        {t('title')}
      </h2>

      <FinancialReportsTabs>
        <Tab
          isActive={active === FinancialReportsEnum.OneReport}
          onClick={() => setActive(FinancialReportsEnum.OneReport)}
        >
          รายงานประจำปี
        </Tab>
        {/*<Tab*/}
        {/*  isActive={active === FinancialReportsEnum.OtherFinancialStatements}*/}
        {/*  onClick={() =>*/}
        {/*    setActive(FinancialReportsEnum.OtherFinancialStatements)*/}
        {/*  }*/}
        {/*>*/}
        {/*  {t('otherFinancialStatements')}*/}
        {/*</Tab>*/}
      </FinancialReportsTabs>
      {active === FinancialReportsEnum.OneReport && <OneReportTable />}
      {active === FinancialReportsEnum.OtherFinancialStatements && (
        <OtherFinancialStatementsTable />
      )}
    </Animation>
  )
}
