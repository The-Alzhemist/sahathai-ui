// app/InvestorInformation/StockMarketInformation/page.tsx

import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { getTranslations } from 'next-intl/server'
import { EODHD_STOCK_TOKEN, REVALIDATE_TIME } from '@/config/environtment'
import Image from 'next/image'

interface StockData {
  date: string
  open: number
  high: number
  low: number
  close: number
  adjusted_close: number
  volume: number
}

export const revalidate = 86400 // 1 วัน

const StockMarketInformation = async () => {
  // free stock api  update t - 3 day, get only 20 times/day
  const response = await fetch(
    `https://eodhd.com/api/eod/PORT.BK?api_token=677622d53db520.53886203&fmt=json`
  )
  const stockData: StockData[] = await response.json()

  const t = await getTranslations(
    'InvestorInformationPage.StockMarketInformation'
  )

  const lastPriceData = stockData[stockData.length - 1]
  const changedPrice = lastPriceData.high - lastPriceData.low

  return (
    <section className='px-5 md:px-0'>
      <Animation>
        <h2
          id={InvestorInformationEnum.StockMarketInformation}
          className='headline-2 text-navy text-center'
        >
          {t('title')}
        </h2>

        <table className='mx-auto max-w-[860px] w-full report shadow-7 rounded-[10px] overflow-hidden mt-[37px]  '>
          <thead>
          <tr className='bg-white text-darkGray border-b px-5'>
            <th className='subtitle-1 text-left !font-semibold '>ชื่อย่อหุ้น</th>
            <th className='subtitle-1 text-right !font-semibold'>PORT</th>
          </tr>
          </thead>
          <tbody>
          <tr className="border-b">
            <td className="flex gap-5 items-center px-6 py-4 text-left text-sm">
              <Image src={'/investor-relations/stock-up-2x.png'} alt={'stock up'} width={50} height={50}/>
              <div className="flex flex-col">
              <span>
                ราคาสูงสุด</span>
                <span className="text-xs text-gray-500">
                  (อัพเดทล่าสุดวันที่: {lastPriceData.date})
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-darkGray text-right">
              {lastPriceData.high}
            </td>
          </tr>
          <tr className="border-b">
            <td className="flex gap-5 items-center px-6 py-4 text-left text-sm">
              <Image src={'/investor-relations/stock-down-2x.png'} alt={'stock up'} width={50} height={50}/>
              <div className="flex flex-col">
                <span>ราคาต่ำสุด</span>
                <span className="text-xs text-gray-500">
                  (อัพเดทล่าสุดวันที่: {lastPriceData.date})
                </span>
              </div>
            </td>
            <td className="px-6 py-4 text-darkGray text-right">
              {lastPriceData.low}
            </td>
          </tr>

          <tr className="border-b">

            <td className="flex gap-5 items-center px-6 py-4 text-left text-sm">         <Image src={'/investor-relations/stock-reverse-2x.png'} alt={'stock up'} width={50} height={50}/> เปลี่ยนแปลง</td>
            <td className="px-6 py-4 text-darkGray text-right">
              {`${changedPrice.toFixed(2)}`}
            </td>
          </tr>

          <tr className="border-b">
            <td className="px-6 py-4 text-left text-sm flex items-center gap-5">
              <Image src={'/investor-relations/stock-graph-2x.png'} alt={'stock up'} width={50} height={50}/>  ปริมาณซื้อขาย (หุ้น)
            </td>
            <td className="px-6 py-4 text-darkGray text-right">
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
