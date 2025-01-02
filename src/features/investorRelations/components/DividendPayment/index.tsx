'use client'
import { useTranslations } from 'next-intl'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Dropdown } from '@/components/Dropdown'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { Animation } from '@/components/Animation'
import { DividendPaymentProps } from './interface'
import { devidendPaymentInformationList } from '@/features/investorRelations/components/DividendPayment/devidendPaymentInformationList'

export function DividendPayment({ className }: DividendPaymentProps) {
  const t = useTranslations('InvestorInformationPage.DividendPayment')
  const [selectedYear, setSelectedYear] = useState<any>(
    () => devidendPaymentInformationList[0].year
  )
  // const [year, setYear] = useState(() => DateTime.now().year + 543)

  // const [options] = useState(() => {
  //   const y = DateTime.now().year + 543

  //   return Array.from({ length: 10 }).map((_, index) => ({
  //     label: String(y - index),
  //     value: String(y - index),
  //   }))
  // })

  const handleOnFilter = (value: string) => {
    setSelectedYear(value)
  }

  const [filterByYear, setFilterByYear] = useState<any>([])

  useEffect(() => {
    const option = Array.from(
      new Map(
        devidendPaymentInformationList.map(item => [
          String(item.year), // Use the `value` as the key
          { label: String(item.year), value: String(item.year) },
        ])
      ).values()
    )

    setFilterByYear(option)
    console.log('setFilterByYear option:', JSON.stringify(option))
  }, [devidendPaymentInformationList])

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
          value={selectedYear}
          options={filterByYear}
          icon={<CalendarIcon className='shrink-0' width='24' height='24' />}
          onSelect={handleOnFilter}
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
          {devidendPaymentInformationList
            .filter(item => item.year === selectedYear)
            .map((item, index) => (
              <tr key={index}>
                <td className='body-2 p-[16px]'>{item.dividendPaymentDate}</td>
                <td className='body-2 p-[16px]'>
                  {item.dividendPaymentAmount}
                </td>
                <td className='body-2 p-[16px]'>{item.unit}</td>
                <td className='body-2 p-[16px]'>{item.financialPeriod}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Animation>
  )
}
