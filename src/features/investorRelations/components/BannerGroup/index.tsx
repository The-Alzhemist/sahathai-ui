import { Fragment } from 'react'
import { Banner } from '../Banner'
import { Submenu } from '../Submenu'
import { useTranslations } from 'next-intl'
import { BannerGroupProps } from './interface'
import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'

export function BannerGroup({ activeMenu }: BannerGroupProps) {
  const t = useTranslations('investorRelations.menu')

  return (
    <Fragment>
      <Banner />
      <Submenu>
        <Submenu.Item
          text={t('investorInformation')}
          href='/investor-information'
          isActive={activeMenu === InvestorRelationEnum.InvestorInformation}
        />
        <Submenu.Item
          text={t('sustainabilityManagement')}
          href='/sustainability-management'
          isActive={
            activeMenu === InvestorRelationEnum.SustainabilityManagement
          }
        />
        <Submenu.Item
          text={t('codeConduct')}
          href=''
          isActive={activeMenu === InvestorRelationEnum.CodeConduct}
        />
      </Submenu>
    </Fragment>
  )
}
