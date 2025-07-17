import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import AccordionList, { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'
import {
  shareholderMeeting2568
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/Docmuments/ShareHolderMeeting2568'
import {
  shareholderMeeting2567
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/Docmuments/ShareHolderMeeting2567'
import { Banner } from '@/components/Banner'
import FinancialAccordionList
  from '@/features/investorRelations/pages/PerformanceReportPage/component/AccordientList'
import {
  financial2568
} from '@/features/investorRelations/pages/FinancialInformationPage/component/Docmuments/Financial2568'
import {
  financial2567
} from '@/features/investorRelations/pages/FinancialInformationPage/component/Docmuments/Financial2567'
import PerformanceAccordionList from '@/features/investorRelations/pages/PerformanceReportPage/component/AccordientList'
import {
  performanceReport2567
} from '@/features/investorRelations/pages/PerformanceReportPage/component/Docmuments/PerformanceReport2567'
import {
  performanceReport2568
} from '@/features/investorRelations/pages/PerformanceReportPage/component/Docmuments/PerformanceReport2568'
import {
  documentAnnouncement2567
} from '@/features/investorRelations/pages/DocumentAnnouncementPage/component/Docmuments/DocumentAnnouncement2567'
import {
  documentAnnouncement2568
} from '@/features/investorRelations/pages/DocumentAnnouncementPage/component/Docmuments/DocumentAnnouncement2568'
import DocumentAnnouncementAccordionList
  from '@/features/investorRelations/pages/DocumentAnnouncementPage/component/AccordientList'


export function DocumentAnnouncementPage() {
  const t = useTranslations('InvestorInformationPage.DocumentAnnouncement')
  const tMenu = useTranslations('Menu')
  const documents2568 = documentAnnouncement2568(t);
  const documents2567 = documentAnnouncement2567(t);

  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.DocumentAnnouncement')}
        caption={tMenu('investorRelations.DocumentAnnouncement')}
      />
      <section className=" p-5 max-w-4xl mx-auto">

        <div className="px-5 pt-5 rounded-md mb-7">
          <DocumentAnnouncementAccordionList documents={documents2568}   defaultOpenIndexes={[0]} />
        </div>

        <div className="px-5 pt-5 rounded-md mb-7">
          <DocumentAnnouncementAccordionList documents={documents2567} />
        </div>

      </section>
    </main>

  )
}


