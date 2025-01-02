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

export async function InvestorInformationPage() {
  return (
    <main className='pt-[100px] pb-[176px] bg-white '>
      <Menu />
      <Tabs activeMenu={InvestorRelationEnum.InvestorInformation} />
      <section className='max-w-[1140px] w-full px-5 mx-auto  mt-[57px] flex gap-[21px]'>
        <div className='hidden md:flex'>
          <SideMenu />
        </div>

        <section className='w-full space-y-[112px]'>
          <StockMarketInformation />
          <FinancialReports />
          <Shareholder />
          <DividendPayment className=' w-full' />
          <ShareholdersMeeting />
          <CompanyIntroductionVideo />
        </section>
      </section>
    </main>
  )
}
