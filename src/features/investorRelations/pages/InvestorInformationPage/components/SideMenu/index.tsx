'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { cn, getHash } from '@/libs/util'
import { SideMenuItemProps } from './interface'

export function SideMenu() {
  const t = useTranslations('InvestorInformationPage')
  const queryStrings = useSearchParams()
  const [hash, setHash] = useState<undefined | InvestorInformationEnum>()

  useEffect(() => {
    const newHash = getHash()
    setHash(
      (newHash as InvestorInformationEnum) ||
        InvestorInformationEnum.StockMarketInformation
    )
  }, [queryStrings])

  return (
    <ul className='space-y-[8px] w-[170px] shrink-0 sticky top-0 h-fit'>
      <SideMenu.Item
        href={`#${InvestorInformationEnum.StockMarketInformation}`}
        isActive={InvestorInformationEnum.StockMarketInformation === hash}
      >
        {t('StockMarketInformation.title')}
      </SideMenu.Item>
      <SideMenu.Item
        href={`#${InvestorInformationEnum.FinancialReports}`}
        isActive={InvestorInformationEnum.FinancialReports === hash}
      >
        {t('FinancialReports.title')}
      </SideMenu.Item>
      <SideMenu.Item
        href={`#${InvestorInformationEnum.Shareholder}`}
        isActive={InvestorInformationEnum.Shareholder === hash}
      >
        {t('Shareholder.title')}
      </SideMenu.Item>
      <SideMenu.Item
        href={`#${InvestorInformationEnum.DividendPayment}`}
        isActive={InvestorInformationEnum.DividendPayment === hash}
      >
        {t('DividendPayment.title')}
      </SideMenu.Item>
      <SideMenu.Item
        href={`#${InvestorInformationEnum.ShareholdersMeeting}`}
        isActive={InvestorInformationEnum.ShareholdersMeeting === hash}
      >
        {t('ShareholdersMeeting.title')}
      </SideMenu.Item>
      <SideMenu.Item
        href={`#${InvestorInformationEnum.CompanyIntroductionVideo}`}
        isActive={InvestorInformationEnum.CompanyIntroductionVideo === hash}
      >
        {t('CompanyIntroductionVideo.title')}
      </SideMenu.Item>
    </ul>
  )
}

SideMenu.Item = function Item({
  children,
  href,
  isActive = false,
}: SideMenuItemProps) {
  return (
    <li>
      <Link
        className={cn(
          'p-[16px] rounded-[8px] bg-white-3 block text-center text-black-40 leading-[24px] sarabun',
          {
            'bg-blue text-white': isActive,
          }
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
