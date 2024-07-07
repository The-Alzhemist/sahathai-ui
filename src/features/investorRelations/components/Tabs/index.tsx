import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { Submenu } from '../Submenu'
import { TabsProps } from './interface'

export function Tabs({ activeMenu }: TabsProps) {
  const t = useTranslations('investorRelations.menu')

  return (
    <Fragment>
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
          href='/code-of-conduct'
          isActive={activeMenu === InvestorRelationEnum.CodeConduct}
        />
      </Submenu>
    </Fragment>
  )
}
