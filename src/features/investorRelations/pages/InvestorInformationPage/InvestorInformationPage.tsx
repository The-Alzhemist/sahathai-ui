import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { SideMenu } from '../../components/SideMenu'
import { StockMarketInformation } from '../../components/StockMarketInformation'
import { FinancialReports } from '../../components/FinancialReports'
import { Shareholder } from '../../components/Shareholder'
import { DividendPayment } from '../../components/DividendPayment'
import { ShareholdersMeeting } from '../../components/ShareholdersMeeting'
import { CompanyIntroductionVideo } from '../../components/CompanyIntroductionVideo'
import { Tabs } from '../../components/Tabs'

export function InvestorInformationPage() {
  return (
    <main className='pt-[56px] pb-[176px] bg-white '>
      <Tabs activeMenu={InvestorRelationEnum.InvestorInformation} />
      <section className='max-w-[1440px] w-full px-[150px] mt-[57px] flex gap-[21px]'>
        <SideMenu />
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
