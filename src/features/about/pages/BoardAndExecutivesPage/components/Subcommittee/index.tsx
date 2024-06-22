'use client'
import { useTranslations } from 'next-intl'
import { Tabs } from '../Tabs'
import { Tab } from '../Tabs/Tab'
import { useState } from 'react'
import { SubcommitteeEnum } from './interface'
import { Link } from '@/libs/intl/navigation'

export function Subcommittee() {
  const t = useTranslations('BoardAndExecutivesPage.subcommittee')
  const [activeTab, setActiveTab] = useState(SubcommitteeEnum.Audit)
  return (
    <section className='py-[117px] bg-dark-60'>
      <h2 className='headline-1 text-center'>{t('title')}</h2>
      <p className='mt-[12px] body-1 max-w-[1196px] text-center mx-auto whitespace-pre'>
        {t('description')}
      </p>
      <section className='mt-[40px] max-w-[1219px] mx-auto'>
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
        <div className='mt-[30px] p-[10px]'>
          <div className='font-[700] text-[20px] leading-[24px]'>
            {t(`${activeTab}.title`)}
          </div>
          <div className='mt-[12px] whitespace-pre'>
            {t(`${activeTab}.description`)}
            {activeTab === SubcommitteeEnum.Audit ? (
              <>
                &nbsp;
                <Link className='hover:underline' href=''>
                  {t(`${activeTab}.clickHere`)}
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </section>
  )
}
