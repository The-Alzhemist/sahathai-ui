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
import { DownloadButton } from '@/components/DownloadButton'
import {
  sustainabilityDocuments
} from '@/features/investorRelations/pages/SustainableDevelopmentPage/component/Docmuments/GoodCorporateDocument'
import Image from 'next/image'


export function SustainableDevelopmentPage() {
  const t = useTranslations('InvestorInformationPage.SustainableDevelopment')
  const tMenu = useTranslations('Menu')


  return (
    <main className=" pb-[176px] bg-white ">
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.SustainableDevelopment')}
        caption={tMenu('investorRelations.SustainableDevelopment')}
      />
      <section className="p-5 max-w-4xl mx-auto">
        {sustainabilityDocuments.map((doc, index) => (
          <div
            key={index}
            className="mt-[32px] w-full flex justify-between items-center mb-5 border border-gray-200 bg-gray-50 rounded-md p-5"
          >
            <div>{doc.title}</div>
            <div>
              <DownloadButton className="mx-auto" href={doc.href} />
            </div>
          </div>
        ))}

        <div className='relative pt-[86.88%] w-full max-w-[900px] border rounded-md px-5 overflow-hidden mt-10'>
          <Image
            src='/investor-relations/sustainability-management-1.png'
            alt=''
            fill
          />
        </div>
      </section>
    </main>

  )
}


