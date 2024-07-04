'use client'
import { useTranslations } from 'next-intl'
import { Tabs } from '../Tabs'
import { Tab } from '../Tabs/Tab'
import { useState } from 'react'
import { SubcommitteeEnum } from './interface'
import { Link } from '@/libs/intl/navigation'
import { Animation } from '@/components/Animation'

export function Subcommittee() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Subcommittee')
  const common = useTranslations('common')
  const [activeTab, setActiveTab] = useState(SubcommitteeEnum.Audit)

  return (
    <section className='mt-[16px] space-y-[40px]'>
      <h2 className='headline-2 text-center text-blue-400'>{t('title')}</h2>

      <Tabs>
        <Tab
          isActive={activeTab === SubcommitteeEnum.Audit}
          onClick={() => setActiveTab(SubcommitteeEnum.Audit)}
        >
          {t('auditCommittee.title')}
        </Tab>
        <Tab
          isActive={activeTab === SubcommitteeEnum.Executive}
          onClick={() => setActiveTab(SubcommitteeEnum.Executive)}
        >
          {t('executiveCommittee.title')}
        </Tab>
        <Tab
          isActive={activeTab === SubcommitteeEnum.NominationAndRemuneration}
          onClick={() =>
            setActiveTab(SubcommitteeEnum.NominationAndRemuneration)
          }
        >
          {t('nominationAndRemunerationCommittee.title')}
        </Tab>
        <Tab
          isActive={activeTab === SubcommitteeEnum.EnterpriseRiskManagement}
          onClick={() =>
            setActiveTab(SubcommitteeEnum.EnterpriseRiskManagement)
          }
        >
          {t('enterpriseRiskManagementCommittee.title')}
        </Tab>
      </Tabs>

      <Animation
        key={activeTab}
        className='whitespace-pre-wrap body-1 text-black-60'
      >
        {t(`${activeTab}.description`)}
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
