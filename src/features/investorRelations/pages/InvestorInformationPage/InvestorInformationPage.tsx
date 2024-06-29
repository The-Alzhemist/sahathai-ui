'use client'
import { useTranslations } from 'next-intl'

import { usePathname } from '@/libs/intl/navigation'
import { Banner } from '../../components/Banner'
import { Submenu } from '../../components/Submenu'

export function InvestorInformationPage() {
  const t = useTranslations('investorRelations.menu')
  const pathname = usePathname()

  return (
    <main>
      <Banner />
      <Submenu>
        <Submenu.Item
          text={t('investorInformation')}
          href='/investor-information'
          isActive={pathname.includes('investor-information')}
        />
        <Submenu.Item text={t('sustainabilityManagement')} href='' />
        <Submenu.Item text={t('codeConduct')} href='' />
      </Submenu>
    </main>
  )
}
