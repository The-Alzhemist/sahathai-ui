import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'


import { Banner } from '@/components/Banner'
import {
  WarrantW3,
} from '@/features/investorRelations/pages/WarrantPage/component/Docmuments/WarrantW3'
import WarrantAccordionList from '@/features/investorRelations/pages/WarrantPage/component/AccordientList'
import { WarrantW2 } from '@/features/investorRelations/pages/WarrantPage/component/Docmuments/WarrantW2'


export function WarrantPage() {
  const t = useTranslations('InvestorInformationPage.Warrant')
  const tMenu = useTranslations('Menu')
  const documentsW2 = WarrantW2(t);
  const documentsW3 = WarrantW3(t);


  return (
    <main className=" pb-[176px] bg-white ">
      <Menu/>
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('investorRelations.Warrant')}
        caption={tMenu('investorRelations.Warrant')}
      />
      <section className="p-5 max-w-4xl mx-auto">


        <div className="border px-5 pt-5 rounded-md mb-7">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            {t('heading', { number: 3, code: 'PORT-W3' })}
          </h2>
          <WarrantAccordionList documents={documentsW3} />
        </div>

        <div className="border px-5 pt-5 rounded-md mb-7">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            {t('heading', { number: 2, code: 'PORT-W2' })}
          </h2>
          <WarrantAccordionList documents={documentsW2}   />
        </div>


      </section>
    </main>

  )
}


