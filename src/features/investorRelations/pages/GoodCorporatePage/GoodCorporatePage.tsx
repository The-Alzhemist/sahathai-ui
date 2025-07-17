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
import GoodCorporateAccordionList from '@/features/investorRelations/pages/GoodCorporatePage/component/AccordientList'
import {
  goodCorporateDocument
} from '@/features/investorRelations/pages/GoodCorporatePage/component/Docmuments/GoodCorporateDocument'


export function GoodCorporatePage() {
  const t = useTranslations('InvestorInformationPage.GoodCorporate')
  const tMenu = useTranslations('Menu')
  const documents = goodCorporateDocument(t);

  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.GoodCorporate')}
        caption={tMenu('investorRelations.GoodCorporate')}
      />
      <section className=" p-5 max-w-4xl mx-auto">

        <div className="px-5 pt-5 rounded-md mb-7">
          <GoodCorporateAccordionList documents={documents} />
        </div>



      </section>
    </main>

  )
}


