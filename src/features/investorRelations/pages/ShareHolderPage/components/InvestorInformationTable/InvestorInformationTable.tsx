import { investmentStakeholderList } from '@/features/investorRelations/components/Shareholder/InvesterList'
import { useTranslations } from 'next-intl'

export const InvestorInformationTable = () => {
  const t = useTranslations('InvestorInformationPage.Shareholder')

  return (
    <div className='min-w-[720px] md:min-w-0 max-w-[860px] mx-auto shadow-6 rounded-[20px] bg-white p-5 md:p-6'>
      {/* Body */}
      <div className='mx-auto max-w-[1100px]'>
        <div className='rounded-[20px] border border-[#CFE6FF] bg-blue-50 p-6 text-darkGray'>
          {/* HEADER */}
          <div
            className={`grid grid-cols-[80px_3fr_2fr_1fr] gap-x-4 pb-4 border-b border-[#E6F2FF] text-sm font-medium`}
          >
            <div className='text-left'> {t('order')}</div>
            <div className='text-left'> {t('title')}</div>
            <div className='text-left'> {t('numberShares')}</div>
            <div className='text-left'> {t('shares')}</div>
          </div>

          {/* BODY */}
          <div className='divide-y divide-[#E6F2FF]'>
            {investmentStakeholderList.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[80px_3fr_2fr_1fr] gap-x-4 py-4 text-sm font-light`}
              >
                <div>{idx + 1}</div>
                <div>{item.name}</div>
                <div className='tabular-nums'>
                  {item.stockAmount.toLocaleString()}
                </div>
                <div className='tabular-nums'>{item.percentAmount}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className='text-sm font-light text-center mt-5 text-[#999999]'>
        {t('note')}
      </p>
    </div>
  )
}
