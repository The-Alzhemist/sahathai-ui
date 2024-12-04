import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'

export function StockMarketInformation() {
  const t = useTranslations('InvestorInformationPage.StockMarketInformation')

  return (
    <Animation>
      <h2
        id={InvestorInformationEnum.StockMarketInformation}
        className='headline-2 text-blue-400'
      >
        {t('title')}
      </h2>
      {/* <section className='mt-[32px] flex flex-wrap gap-[55px]'>
        <div className='w-[291px] h-[378px] bg-dark' />
        <div className='w-[373px] h-[378px] bg-dark' />
      </section> */}

      <table className='w-full report shadow-6 rounded-[10px] overflow-hidden mt-[37px] '>
        <thead>
          <tr>
            <th className='subtitle-1 text-left'>ชื่อย่อหุ้น(mock)</th>
            <th className='subtitle-1  text-right'>PORT</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <td className='px-6 py-4 text-left text-sm'>ราคาล่าสุด</td>
            <td className='px-6 py-4 text-blue-400 text-right'>1.95</td>
          </tr>

          <tr>
            <td className='px-6  py-4 text-left text-sm'>เปลี่ยนแปลง</td>
            <td className='px-6 spy-4 text-blue-400 text-right'>1.95</td>
          </tr>

          <tr>
            <td className='px-6 py-4  text-left text-sm'>
              ปริมาณซื้อขาย (หุ้น)
            </td>
            <td className='px-6 py-4 text-blue-400 text-right'>1.95</td>
          </tr>

          <tr>
            <td className='px-6 py-4  text-left text-sm'>
              ราคาปิดต่อกำไรสุทธิ (P/E)
            </td>
            <td className='px-6 py-4 text-blue-400 text-right'>1.95</td>
          </tr>
        </tbody>
      </table>
    </Animation>
  )
}
