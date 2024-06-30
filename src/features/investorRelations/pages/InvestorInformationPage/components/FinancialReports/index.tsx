'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { FinancialReportsEnum } from '@/enums/investorRelations/FinancialReportsEnum'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Tabs } from '../Tabs'
import { Tab } from '../Tabs/Tab'
import { OneReportTable } from '../OneReportTable'
import { OtherFinancialStatementsTable } from '../OtherFinancialStatementsTable'
import { FinancialReportsProps } from './interface'

export function FinancialReports({ className }: FinancialReportsProps) {
  const t = useTranslations('InvestorInformationPage.FinancialReports')
  const [active, setActive] = useState<FinancialReportsEnum>(
    FinancialReportsEnum.OneReport
  )

  return (
    <section className={className}>
      <h2
        id={InvestorInformationEnum.FinancialReports}
        className='headline-2 text-black-80'
      >
        {t('title')}
      </h2>

      <Tabs className='mt-[22px]'>
        <Tab
          isActive={active === FinancialReportsEnum.OneReport}
          onClick={() => setActive(FinancialReportsEnum.OneReport)}
        >
          {t('oneReport')}
        </Tab>
        <Tab
          isActive={active === FinancialReportsEnum.OtherFinancialStatements}
          onClick={() =>
            setActive(FinancialReportsEnum.OtherFinancialStatements)
          }
        >
          {t('otherFinancialStatements')}
        </Tab>
      </Tabs>
      {active === FinancialReportsEnum.OneReport && (
        <OneReportTable className='mt-[42px]' />
      )}
      {active === FinancialReportsEnum.OtherFinancialStatements && (
        <OtherFinancialStatementsTable className='mt-[42px]' />
      )}
    </section>
  )
}
