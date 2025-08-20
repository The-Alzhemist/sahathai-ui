import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { SideMenu } from '../../components/SideMenu'

import { FinancialReports } from '../../components/FinancialReports'
import { Shareholder } from '../../components/Shareholder'
import { DividendPayment } from '../../components/DividendPayment'
import { ShareholdersMeeting } from '../../components/ShareholdersMeeting'
import { CompanyIntroductionVideo } from '../../components/CompanyIntroductionVideo'
import { Tabs } from '../../components/Tabs'
import { Menu } from '@/components/Menu'
import StockMarketInformation from '@/features/investorRelations/components/StockMarketInformation/StockMarketInformation'
import { Banner } from '@/components/Banner'
import { getTranslations } from 'next-intl/server'
import { CompanyAdvertiseVideo } from '@/features/investorRelations/components/CompanyAdvertiseVideo'
import { CompanyFactSheet } from '@/features/investorRelations/components/CompanyFactSheet'
import { Background } from '@/components/Background'
import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'
import Image from 'next/image'

export async function InvestorInformationPage() {
  const t = await getTranslations('Menu')
  return (
    <main className='bg-white'>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={t('investorRelations.title')}
        caption={t('investorRelations.title')}
        className='mb-[40px]'
      />
      {/*<Tabs activeMenu={InvestorRelationEnum.InvestorInformation} />*/}
      <section className=' w-full  mx-auto   '>
        <div className='hidden md:flex'>
          {/*<SideMenu />*/}
        </div>

        <section className='w-full space-y-[112px] '>

          <StockMarketInformation />
          <FinancialReports />
          {/*<Shareholder />*/}
          {/*<DividendPayment className=' w-full' />*/}
          {/*<ShareholdersMeeting />*/}


          <Background className='!my-0'>
          <div className='flex flex-col gap-y-10 bg-modellBgDark/60 py-[100px] px-5'>
            <CompanyIntroductionVideo />
            <DoubleQuoteIcon
              className='text-secondary self-center'
              width='36'
              height='17'
            />
            <CompanyAdvertiseVideo/>
          </div>
          </Background>

          <div className='w-full relative px-5 !mt-0'>
            <div
              className="absolute opacity-80 inset-0 bottom-0 z-0 bg-[url('/investor-relations/factsheet-bg.webp')] bg-center bg-no-repeat bg-cover"
            />

            <div className='max-w-[860px]  mx-auto py-[100px] '>
              <CompanyFactSheet />
            </div>

          </div>
        </section>
      </section>
    </main>
  )
}
