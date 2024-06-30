import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'

export function StockMarketInformation() {
  const t = useTranslations('InvestorInformationPage.StockMarketInformation')

  return (
    <section>
      <h2
        id={InvestorInformationEnum.StockMarketInformation}
        className='headline-2 text-black-80'
      >
        {t('title')}
      </h2>
      <div className='mt-[28px] flex flex-wrap gap-[55px]'>
        <div className='w-[291px] h-[378px] bg-dark' />
        <div className='w-[373px] h-[378px] bg-dark' />
      </div>
    </section>
  )
}
