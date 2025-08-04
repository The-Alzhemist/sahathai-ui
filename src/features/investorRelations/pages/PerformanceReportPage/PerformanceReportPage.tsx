import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'


import { Banner } from '@/components/Banner'

import PerformanceAccordionList from '@/features/investorRelations/pages/PerformanceReportPage/component/AccordientList'
import {
  performanceReport2567
} from '@/features/investorRelations/pages/PerformanceReportPage/component/Docmuments/PerformanceReport2567'
import {
  performanceReport2568
} from '@/features/investorRelations/pages/PerformanceReportPage/component/Docmuments/PerformanceReport2568'


export function PerformanceReportPage() {
  const t = useTranslations('InvestorInformationPage.PerformanceReport')
  const tMenu = useTranslations('Menu')
  const documents2568 = performanceReport2568(t);
  const documents2567 = performanceReport2567(t);

  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.PerformanceReport')}
        caption={tMenu('investorRelations.PerformanceReport')}
      />
      <section className=" p-5 max-w-4xl mx-auto">

        <div className="px-5 pt-5 rounded-md mb-7">
          <PerformanceAccordionList documents={documents2568}   defaultOpenIndexes={[0]} />
        </div>

        <div className="px-5 pt-5 rounded-md mb-7">
          <PerformanceAccordionList documents={documents2567} />
        </div>

      </section>
    </main>

  )
}


