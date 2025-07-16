// app/InvestorInformation/StockMarketInformation/page.tsx

import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { getTranslations } from 'next-intl/server'
import { EODHD_STOCK_TOKEN, REVALIDATE_TIME } from '@/config/environtment'

interface StockData {
  date: string
  open: number
  high: number
  low: number
  close: number
  adjusted_close: number
  volume: number
}

export const revalidate = REVALIDATE_TIME

const StockMarketInformation = async () => {
  // free stock api  update t - 3 day, get only 20 times/day
  const response = await fetch(
    `https://eodhd.com/api/eod/PORT.BK?api_token=${EODHD_STOCK_TOKEN}&fmt=json`
  )
  const stockData: StockData[] = await response.json()

  const t = await getTranslations(
    'InvestorInformationPage.StockMarketInformation'
  )

  const lastPriceData = stockData[stockData.length - 1]
  const changedPrice = lastPriceData.high - lastPriceData.low

  return (
    <Animation>
      <h2
        id={InvestorInformationEnum.StockMarketInformation}
        className='headline-2 text-blue-400'
      >
        {t('title')}
      </h2>

      <table className='w-full report shadow-6 rounded-[10px] overflow-hidden mt-[37px]'>
        <thead>
          <tr>
            <th className='subtitle-1 text-left'>ชื่อย่อหุ้น</th>
            <th className='subtitle-1 text-right'>PORT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-6 py-4 text-left text-sm'>
              <div className='flex flex-col'>
                <span>ราคาสูงสุด</span>
                <span className='text-xs text-gray-500'>
                  (อัพเดทล่าสุดวันที่: {lastPriceData.date})
                </span>
              </div>
            </td>
            <td className='px-6 py-4 text-blue-400 text-right'>
              {lastPriceData.high}
            </td>
          </tr>
          <tr>
            <td className='px-6 py-4 text-left text-sm'>
              <div className='flex flex-col'>
                <span>ราคาต่ำสุด</span>
                <span className='text-xs text-gray-500'>
                  (อัพเดทล่าสุดวันที่: {lastPriceData.date})
                </span>
              </div>
            </td>
            <td className='px-6 py-4 text-blue-400 text-right'>
              {lastPriceData.low}
            </td>
          </tr>

          <tr>
            <td className='px-6 py-4 text-left text-sm'>เปลี่ยนแปลง</td>
            <td className='px-6 py-4 text-blue-400 text-right'>
              {`${changedPrice.toFixed(2)}`}
            </td>
          </tr>

          <tr>
            <td className='px-6 py-4 text-left text-sm'>
              ปริมาณซื้อขาย (หุ้น)
            </td>
            <td className='px-6 py-4 text-blue-400 text-right'>
              {lastPriceData.volume}
            </td>
          </tr>
        </tbody>
      </table>
    </Animation>
  )
}

export default StockMarketInformation
