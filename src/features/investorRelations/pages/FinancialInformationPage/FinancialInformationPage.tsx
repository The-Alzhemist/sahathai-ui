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
  from '@/features/investorRelations/pages/FinancialInformationPage/component/AccordientList'
import {
  financial2568
} from '@/features/investorRelations/pages/FinancialInformationPage/component/Docmuments/Financial2568'
import {
  financial2567
} from '@/features/investorRelations/pages/FinancialInformationPage/component/Docmuments/Financial2567'


export function FinancialInformationPage() {
  const t = useTranslations('InvestorInformationPage.FinancialInformation')
  const tMenu = useTranslations('Menu')
  const documents2568 = financial2568(t);
  const documents2567 = financial2567(t);

  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.FinancialInformation')}
        caption={tMenu('investorRelations.FinancialInformation')}
      />
      <section className=" p-5 max-w-4xl mx-auto">

        <div className="px-5 pt-5 rounded-md mb-7">
          <FinancialAccordionList documents={documents2568} />
        </div>

        <div className="px-5 pt-5 rounded-md mb-7">
          <FinancialAccordionList documents={documents2567} />
        </div>

      </section>
    </main>

  )
}


