import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'

import Image from 'next/image'

import { StockMarketInformationProps } from '@/features/investorRelations/components/StockMarketInformation/interface'
import { useTranslations } from 'next-intl'

const StockMarketInformation = async ({
  stockData,
}: StockMarketInformationProps) => {
  const t = await useTranslations(
    'InvestorInformationPage.StockMarketInformation'
  )

  const lastPriceData = (stockData && stockData[stockData.length - 1]) || 0
  const changedPrice = lastPriceData.high - lastPriceData.low || 0

  return (
    <section className=''>
      <Animation
        className="
        relative isolate space-y-[32px]
        after:content-['']  after:bg-[url('/investor-relations/new/bg-blue-gray.webp')]  after:absolute after:inset-0
        after:opacity-100 after:-z-10 py-20"
      >
        <h2
          id={InvestorInformationEnum.StockMarketInformation}
          className='headline-2 text-navy text-center md:pb-14'
        >
          {t('title')}
        </h2>

        <table className='mx-auto max-w-[860px] w-full report shadow-7 rounded-[10px] overflow-hidden mt-[37px] bg-white '>
          <thead>
            <tr className='bg-white text-darkGray border-b px-5'>
              <th className='subtitle-1 text-left !font-semibold '>
                {t('stockName')}
              </th>
              <th className='subtitle-1 text-right !font-semibold'>PORT</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <td className='flex gap-5 items-center px-6 py-4 text-left text-sm'>
                <Image
                  src={'/investor-relations/stock-up-2x.png'}
                  alt={'stock up'}
                  width={50}
                  height={50}
                />
                <div className='flex flex-col'>
                  <span>{t('maxPrice')}</span>
                  <span className='text-xs text-gray-500'>
                    ( {t('updateDate')}: {lastPriceData.date})
                  </span>
                </div>
              </td>
              <td className='px-6 py-4 text-darkGray text-right'>
                {lastPriceData.high}
              </td>
            </tr>
            <tr className='border-b'>
              <td className='flex gap-5 items-center px-6 py-4 text-left text-sm'>
                <Image
                  src={'/investor-relations/stock-down-2x.png'}
                  alt={'stock up'}
                  width={50}
                  height={50}
                />
                <div className='flex flex-col'>
                  <span>{t('minPrice')}</span>
                  <span className='text-xs text-gray-500'>
                    ({t('updateDate')}: {lastPriceData.date})
                  </span>
                </div>
              </td>
              <td className='px-6 py-4 text-darkGray text-right'>
                {lastPriceData.low}
              </td>
            </tr>

            <tr className='border-b'>
              <td className='flex gap-5 items-center px-6 py-4 text-left text-sm'>
                {' '}
                <Image
                  src={'/investor-relations/stock-reverse-2x.png'}
                  alt={'stock up'}
                  width={50}
                  height={50}
                />{' '}
                <span>{t('change')}</span>
              </td>
              <td className='px-6 py-4 text-darkGray text-right'>
                {`${changedPrice.toFixed(2)}`}
              </td>
            </tr>

            <tr className='border-b'>
              <td className='px-6 py-4 text-left text-sm flex items-center gap-5'>
                <Image
                  src={'/investor-relations/stock-graph-2x.png'}
                  alt={'stock up'}
                  width={50}
                  height={50}
                />{' '}
                {t('quantity')}
              </td>
              <td className='px-6 py-4 text-darkGray text-right'>
                {lastPriceData.volume}
              </td>
            </tr>
          </tbody>
        </table>
      </Animation>
    </section>
  )
}

export default StockMarketInformation
