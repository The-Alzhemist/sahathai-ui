'use client'
import { useTranslations } from 'next-intl'
import { DateTime } from 'luxon'
import { useState } from 'react'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Dropdown } from '@/components/Dropdown'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { Animation } from '@/components/Animation'
import { DividendPaymentProps } from './interface'

export function DividendPayment({ className }: DividendPaymentProps) {
  const t = useTranslations('InvestorInformationPage.DividendPayment')
  const [year, setYear] = useState(() => DateTime.now().year + 543)
  const [options] = useState(() => {
    const y = DateTime.now().year + 543

    return Array.from({ length: 10 }).map((_, index) => ({
      label: String(y - index),
      value: String(y - index),
    }))
  })

  return (
    <Animation className={className}>
      <div className='flex justify-between'>
        <h2
          id={InvestorInformationEnum.DividendPayment}
          className='headline-2 text-blue-400'
        >
          {t('title')}
        </h2>
        <Dropdown
          className='w-[250px]'
          value={String(year)}
          options={options}
          icon={<CalendarIcon className='shrink-0' width='24' height='24' />}
          onSelect={value => setYear(Number(value))}
        />
      </div>

      <table className='w-full report shadow-6 rounded-[10px] overflow-hidden mt-[32px]'>
        <thead>
          <tr>
            <th className='subtitle-1 p-[8px]'>{t('dividendPaymentDate')}</th>
            <th className='subtitle-1 p-[8px] whitespace-pre'>
              {t('dividend')}
            </th>
            <th className='subtitle-1 p-[8px]'>{t('unit')}</th>
            <th className='subtitle-1 p-[8px]'>{t('financialPeriod')}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className='body-2 p-[16px]'>19 พ.ค. 2565</td>
              <td className='body-2 p-[16px]'>0.0250</td>
              <td className='body-2 p-[16px]'>บาท</td>
              <td className='body-2 p-[16px]'>01 ม.ค. 2564 - 31 ธ.ค. 2564</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Animation>
  )
}
