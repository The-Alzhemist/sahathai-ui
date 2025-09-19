

import { investmentStakeholderList } from '@/features/investorRelations/components/Shareholder/InvesterList'
import { useTranslations } from 'next-intl'


export  const InvestorInformationTable = () => {

  const t = useTranslations('InvestorInformationPage.Shareholder')

  return <div className="min-w-[720px] md:min-w-0 max-w-[860px] mx-auto shadow-6 rounded-[20px] bg-white p-5 md:p-6">
    {/* Header */}
    <div className="p-4 grid grid-cols-[120px,1fr,1fr,1fr] md:grid-cols-[160px,1fr,1fr,1fr] gap-x-4 mb-3">
      <div className="subtitle-1 text-darkGray !font-normal"> {t('order')}</div>
      <div className="subtitle-1 text-darkGray !font-normal text-center">
        {t('title')}
      </div>
      <div className="subtitle-1 text-darkGray !font-normal text-center">
        {t('numberShares')}
      </div>
      <div className="subtitle-1 text-darkGray !font-normal text-center">{t('shares')}
      </div>
    </div>

    {/* Body */}
    <div className="rounded-[20px] border border-[#CFE6FF] bg-blue-50 p-4 md:p-5">
      <div className="divide-y divide-[#E6F2FF] text-darkGray">
        {investmentStakeholderList.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[120px,1fr,1fr,1fr] md:grid-cols-[160px,1fr,1fr,1fr] gap-x-4 py-5 items-center"
          >
            <div>
              <div className=" font-light">{idx + 1}</div>
            </div>

            <div>
              <div className=" font-light">{item.name}</div>
            </div>

            <div className="flex justify-start md:justify-center  font-light">
              {item.stockAmount.toLocaleString()}
            </div>

            <div className="flex justify-start md:justify-center  font-light">
              {`${item.percentAmount}%`}
            </div>

          </div>
        ))}
      </div>
    </div>
    <p className="text-sm font-light text-center mt-5 text-[#999999]">{t('note')}</p>

  </div>
}

