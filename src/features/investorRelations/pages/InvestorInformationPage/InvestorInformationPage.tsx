import { useTranslations } from 'next-intl'

import { Banner } from '../../components/Banner'
import { Submenu } from '../../components/Submenu'
import { SideMenu } from './components/SideMenu'
import { StockMarketInformation } from './components/StockMarketInformation'
import { FinancialReports } from './components/FinancialReports'
import { Shareholder } from './components/Shareholder'
import { DividendPayment } from './components/DividendPayment'
import { ShareholdersMeeting } from './components/ShareholdersMeeting'
import { CompanyIntroductionVideo } from './components/CompanyIntroductionVideo'

export function InvestorInformationPage() {
  const t = useTranslations('investorRelations.menu')

  return (
    <main>
      <Banner />
      <Submenu>
        <Submenu.Item
          text={t('investorInformation')}
          href='/investor-information'
          isActive
        />
        <Submenu.Item text={t('sustainabilityManagement')} href='' />
        <Submenu.Item text={t('codeConduct')} href='' />
      </Submenu>
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
