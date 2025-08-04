import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'


import { Banner } from '@/components/Banner'

import ActivityAccordionList from '@/features/investorRelations/pages/ActivityPage/component/AccordientList'
import { activity2567 } from '@/features/investorRelations/pages/ActivityPage/component/Docmuments/Activity2567'
import { activity2568 } from '@/features/investorRelations/pages/ActivityPage/component/Docmuments/Activity2568'


export function ActivityPage() {
  const t = useTranslations('InvestorInformationPage.Activity')
  const tMenu = useTranslations('Menu')
  const documents2567 = activity2567(t);
  const documents2568 = activity2568(t);



  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.Activity')}
        caption={tMenu('investorRelations.Activity')}
      />
      <section className=" p-5 max-w-4xl mx-auto">

        <div className="px-5 pt-5 rounded-md mb-7">
          <ActivityAccordionList documents={documents2568} defaultOpenIndexes={[0]} />
        </div>

        <div className="px-5 pt-5 rounded-md mb-7">
          <ActivityAccordionList documents={documents2567}  />
        </div>
      </section>
    </main>

  )
}


