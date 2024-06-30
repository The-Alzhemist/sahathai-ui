import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { DividendPaymentProps } from './interface'

export function DividendPayment({ className }: DividendPaymentProps) {
  const t = useTranslations('InvestorInformationPage.DividendPayment')

  return (
    <section className={className}>
      <h2
        id={InvestorInformationEnum.DividendPayment}
        className='headline-2 text-black-80'
      >
        {t('title')}
      </h2>

      <table className='w-full report shadow-3 rounded-[10px] overflow-hidden mt-[37px]'>
        <thead>
          <tr>
            <th className='subtitle-1'>{t('dividendPaymentDate')}</th>
            <th className='subtitle-1'>{t('dividend')}</th>
            <th className='subtitle-1'>{t('unit')}</th>
            <th className='subtitle-1'>{t('financialPeriod')}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className='body-2'>19 พ.ค. 2565</td>
              <td className='body-2'>0.0250</td>
              <td className='body-2'>บาท</td>
              <td className='body-2'>01 ม.ค. 2564 - 31 ธ.ค. 2564</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
