'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Tabs } from '../Tabs'
import { Tab } from '../Tabs/Tab'
import { TabType } from './interface'
import { Docking } from './Docking'
import DockingInfo from '@/features/infrastructureContainers/components/OperationGuidelines/components/DockingInfo'
import OperatingHours from '@/features/infrastructureContainers/components/OperationGuidelines/components/OperatingHours'
import CfsGoods from '@/features/infrastructureContainers/components/OperationGuidelines/components/CfsGoods'
import RegulationsCargoShips from '@/features/infrastructureContainers/components/OperationGuidelines/components/RegulationsCargoShips'
import SafetyRegulations from '@/features/infrastructureContainers/components/OperationGuidelines/components/SafetyRegulations'
import HazardousGoods from '@/features/infrastructureContainers/components/OperationGuidelines/components/HazardousGoods'
import RequestPermissionContact from '@/features/infrastructureContainers/components/OperationGuidelines/components/requestPermissionContact'

export function OperationGuidelines() {
  const t = useTranslations('InfrastructureContainersPage.OperationGuidelines')
  const [activeTab, setActive] = useState<TabType>('docking')

  const tabs: { key: TabType; title: string }[] = [
    { key: 'docking', title: t('docking.title') },
    { key: 'operatingHours', title: t('operatingHours.title') },
    { key: 'cfsLcl', title: t('cfsLcl.title') },
    { key: 'responsibilityScope', title: t('responsibilityScope.title') },
    { key: 'regulationsCargoShips', title: t('regulationsCargoShips.title') },
    { key: 'safetyRegulations', title: t('safetyRegulations.title') },
    { key: 'hazardousGoods', title: t('hazardousGoods.title') },
    {
      key: 'requestPermissionContact',
      title: t('requestPermissionContact.title'),
    },
    {
      key: 'documentSubmissionProcess',
      title: t('documentSubmissionProcess.title'),
    },
    { key: 'bookingProcess', title: t('bookingProcess.title') },
    { key: 'serviceCharge', title: t('serviceCharge.title') },
  ]

  return (
    <section className='bg-[url("/background.jpeg")] bg-center bg-cover py-10'>
      <Animation className='my-10  max-w-[930px] w-full mx-auto px-5'>
        <h1 className='headline-2 text-center  text-white'>{t('title')}</h1>
        <section className='w-full flex flex-col md:flex-row gap-[24px] p-[16px] mt-[20px] shadow-2 rounded-[5px] bg-white'>
          <Tabs className='flex  overflow-x-scroll md:block w-full md:w-[206px] shrink-0'>
            {tabs.map(({ key, title }) => (
              <Tab
                key={key}
                isActive={activeTab === key}
                onClick={() => setActive(key)}
              >
                {title}
              </Tab>
            ))}
          </Tabs>

          {activeTab === 'docking' && (
            // <Docking
            //   imageUrl='/infrastructure-containers/docking.png'
            //   description={t('docking.description')}
            // />
            <DockingInfo />
          )}
          {activeTab === 'operatingHours' && <OperatingHours />}
          {activeTab === 'cfsLcl' && <CfsGoods />}
          {activeTab === 'responsibilityScope' && <div>No data</div>}
          {activeTab === 'regulationsCargoShips' && <RegulationsCargoShips />}
          {activeTab === 'safetyRegulations' && <SafetyRegulations />}
          {activeTab === 'hazardousGoods' && <HazardousGoods />}
          {activeTab === 'requestPermissionContact' && (
            <RequestPermissionContact />
          )}
          {activeTab === 'documentSubmissionProcess' && <div>No data</div>}
          {activeTab === 'bookingProcess' && <div>No data</div>}
          {activeTab === 'serviceCharge' && <div>No data</div>}
        </section>
      </Animation>
    </section>
  )
}
