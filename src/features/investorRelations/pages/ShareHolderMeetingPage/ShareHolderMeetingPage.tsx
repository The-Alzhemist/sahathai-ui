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


export function ShareHolderMeetingPage() {
  const t = useTranslations('InvestorInformationPage.ShareHolderMeeting')
  const tMenu = useTranslations('Menu')
  const documents2568 = shareholderMeeting2568(t);
  const documents2567 = shareholderMeeting2567(t);

  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.shareHolderMeeting')}
        caption={tMenu('investorRelations.shareHolderMeeting')}
      />
      <section className="p-5 max-w-4xl mx-auto">

        {/* Mobile View */}
        <div className="border px-5 pt-5 rounded-md mb-7">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            {t('heading', { year: 2568 })}
          </h2>
          <AccordionList documents={documents2568} defaultOpenIndexes={[0]}  />
        </div>

        <div className="border px-5 pt-5 rounded-md mb-7">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            {t('heading', { year: 2567 })}
          </h2>
          <AccordionList documents={documents2567} />
        </div>

      </section>
    </main>

  )
}


