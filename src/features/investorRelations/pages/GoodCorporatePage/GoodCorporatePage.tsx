import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'


import { Banner } from '@/components/Banner'

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


