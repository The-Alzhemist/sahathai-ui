import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { SideMenu } from './components/SideMenu'
import { StockMarketInformation } from './components/StockMarketInformation'
import { FinancialReports } from './components/FinancialReports'
import { Shareholder } from './components/Shareholder'
import { DividendPayment } from './components/DividendPayment'
import { ShareholdersMeeting } from './components/ShareholdersMeeting'
import { CompanyIntroductionVideo } from './components/CompanyIntroductionVideo'
import { BannerGroup } from '../../components/BannerGroup'

export function InvestorInformationPage() {
  return (
    <main>
      <BannerGroup activeMenu={InvestorRelationEnum.InvestorInformation} />
      <section className='max-w-[1440px] w-full px-[150px] mt-[101px] mb-[69px] flex gap-[30px]'>
        <SideMenu />
        <section className='w-full'>
          <StockMarketInformation />
          <FinancialReports className='mt-[39px]' />
          <Shareholder className='mt-[69px]' />
          <DividendPayment className='mt-[90px] w-full' />
          <ShareholdersMeeting className='mt-[91px]' />
        </section>
      </section>
      <CompanyIntroductionVideo />
    </main>
  )
}
