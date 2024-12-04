'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useSearchParams } from 'next/navigation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { cn, getHash } from '@/libs/util'
import { SideMenuItemProps } from './interface'
import { Animation } from '@/components/Animation'

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
    <Animation className='w-[170px] shrink-0 sticky top-[24px] h-fit'>
      <ul className='space-y-[8px] mb-[24px]'>
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
    </Animation>
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
          'p-[16px] rounded-[8px] bg-white-3 block text-center text-black-40 subtitle-1',
          {
            'bg-blue-400 text-white': isActive,
            'bg-[#F1F1F1] text-[#999999]': !isActive,
          }
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
