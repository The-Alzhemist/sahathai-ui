'use client'
import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { Animation } from '@/components/Animation'
import { Tabs } from '@/components/Tabs'
import { SubcommitteeEnum } from './interface'

export function Subcommittee() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Subcommittee')
  const common = useTranslations('common')

  const tabs = useMemo(
    () => [
      {
        title: t('auditCommittee.title'),
        key: SubcommitteeEnum.Audit,
      },
      {
        title: t('executiveCommittee.title'),
        key: SubcommitteeEnum.Executive,
      },
      {
        title: t('nominationAndRemunerationCommittee.title'),
        key: SubcommitteeEnum.NominationAndRemuneration,
      },
      {
        title: t('enterpriseRiskManagementCommittee.title'),
        key: SubcommitteeEnum.EnterpriseRiskManagement,
      },
    ],
    [t]
  )

  const [activeTab, setActiveTab] = useState<string>(SubcommitteeEnum.Audit)

  return (
    <section className='mt-[90px] mb-[85px] max-w-[1040px] w-full mx-auto'>
      <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>

      <Tabs
        className='mt-[40px] w-fit mx-auto'
        tabs={tabs}
        style='border'
        active={activeTab}
        onChange={setActiveTab}
      />

      <Animation
        key={activeTab}
        className='whitespace-pre-wrap body-1 text-black-6 mt-[50px] rounded-[15px] p-[44px] shadow-8'
      >
        {t(`${activeTab}.content`)}
        {activeTab === SubcommitteeEnum.Audit ? (
          <>
            &nbsp;
            <Link className='hover:underline' href=''>
              {common('clickHere')}
            </Link>
          </>
        ) : null}
      </Animation>
    </section>
  )
}
