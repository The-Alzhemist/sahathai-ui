import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { Animation } from '@/components/Animation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'

import { Link } from '@/libs/intl/navigation'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import {Banner} from "@/components/Banner";
import ShareHolderFreeFloatTable from '@/features/investorRelations/pages/ShareHolderPage/components/ShareHolderFreeFloatTable/ShareHolderFreeFloatTable'
import ShareHolderOverviewTable
  from '@/features/investorRelations/pages/ShareHolderPage/components/ShareHolderOverviewTable/ShareHolderOverviewTable'

import {
  InvestorInformationTable
} from '@/features/investorRelations/pages/ShareHolderPage/components/InvestorInformationTable/InvestorInformationTable'
import Image from 'next/image'
import DividendPolicy from '@/features/investorRelations/pages/ShareHolderPage/components/DividendPolicy/DividendPolicy'


export function ShareHolderPage() {
  const t = useTranslations('InvestorInformationPage.Shareholder')
  const tMenu = useTranslations('Menu')


  return (
    <main className=" pb-[176px] bg-white ">
      <Menu />
      <Banner
          imagePath='/about-us/banner.png'
          alt={tMenu('investorRelations.shareHolder')}
          caption={tMenu('investorRelations.shareHolder')}
      />
      <section className="relative w-full mx-auto">
        <section>
          <Animation>
            <section className="relative mb-10">
              {/* Background image */}
              <Image
                src="/investor-relations/stock-bg.webp"
                alt="Sustainability Background"
                fill
                className="absolute inset-0 object-cover object-center z-0"
                priority
              />

              {/* Overlay content wrapper */}
              <div className="relative z-10 space-y-[50px] px-3 ">
                <h2
                  id={InvestorInformationEnum.Shareholder}
                  className="headline-2 text-black-80 text-center text-navy pt-[80px]"
                >
                  {t('title')}
                </h2>

                <Link
                  className=" w-full text-blue-400 subtitle-1 flex items-center justify-center  gap-[9px] !mt-5"
                  href="https://www.set.or.th/th/market/product/stock/quote/PORT/major-shareholders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('stockDistribution')}
                  <ArrowRightIcon width="16" height="16" />
                </Link>

                <ShareHolderFreeFloatTable />
                <ShareHolderOverviewTable />
                <div className='pb-[100px] overflow-x-auto'>
                  <InvestorInformationTable />
                </div>

              </div>
            </section>

            <div>
              <h2
                id={InvestorInformationEnum.Shareholder}
                className="headline-2 text-black-80 mb-5 text-center text-navy pt-[80px]"
              >
                {t('profit.title')}
              </h2>
              <DividendPolicy />
            </div>

          </Animation>
        </section>

      </section>
    </main>

  )
}


