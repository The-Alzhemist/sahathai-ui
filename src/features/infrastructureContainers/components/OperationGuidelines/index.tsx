'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Tabs } from '../Tabs'
import { Tab } from '../Tabs/Tab'
import { TabType } from './interface'
import { Docking } from './Docking'

export function OperationGuidelines() {
  const t = useTranslations('InfrastructureContainersPage.OperationGuidelines')
  const [activeTab, setActive] = useState<TabType>('docking')

  return (
    <Animation className='mt-[61px] max-w-[928px] w-full mx-auto'>
      <h1 className='headline-2 text-center text-blue-400'>{t('title')}</h1>
      <section className='w-full flex gap-[24px] p-[16px] mt-[20px] shadow-2'>
        <Tabs className='w-[206px] shrink-0'>
          <Tab
            isActive={activeTab === 'docking'}
            onClick={() => setActive('docking')}
          >
            {t('docking.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'operatingHours'}
            onClick={() => setActive('operatingHours')}
          >
            {t('operatingHours.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'cfsLcl'}
            onClick={() => setActive('cfsLcl')}
          >
            {t('cfsLcl.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'responsibilityScope'}
            onClick={() => setActive('responsibilityScope')}
          >
            {t('responsibilityScope.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'regulationsCargoShips'}
            onClick={() => setActive('regulationsCargoShips')}
          >
            {t('regulationsCargoShips.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'safetyRegulations'}
            onClick={() => setActive('safetyRegulations')}
          >
            {t('safetyRegulations.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'hazardousGoods'}
            onClick={() => setActive('hazardousGoods')}
          >
            {t('hazardousGoods.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'requestPermissionContact'}
            onClick={() => setActive('requestPermissionContact')}
          >
            {t('requestPermissionContact.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'documentSubmissionProcess'}
            onClick={() => setActive('documentSubmissionProcess')}
          >
            {t('documentSubmissionProcess.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'bookingProcess'}
            onClick={() => setActive('bookingProcess')}
          >
            {t('bookingProcess.title')}
          </Tab>
          <Tab
            isActive={activeTab === 'serviceCharge'}
            onClick={() => setActive('serviceCharge')}
          >
            {t('serviceCharge.title')}
          </Tab>
        </Tabs>
        {activeTab === 'docking' && (
          <Docking
            imageUrl='/infrastructure-containers/docking.png'
            description={t('docking.description')}
          />
        )}
      </section>
    </Animation>
  )
}
