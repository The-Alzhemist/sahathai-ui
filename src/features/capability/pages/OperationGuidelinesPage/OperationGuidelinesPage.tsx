'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Tabs } from './components/Tabs'
import { Tab } from './components/Tabs/Tab'
import { TabType } from './interface'

export function OperationGuidelinesPage() {
  const t = useTranslations('OperationGuidelinesPage')
  const [activeTab, setActive] = useState<TabType>('docking')

  return (
    <main className='mb-[63px]'>
      <section className='py-[40px] bg-dark-60'>
        <h1 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('title')}
        </h1>
        <h2 className='mt-[24px] text-[18px] leading-[28px] text-center k2d'>
          {t('subTitle')}
        </h2>
      </section>
      <p className='py-[41px] leading-[24px] k2d text-center whitespace-pre-wrap'>
        {t('description')}
      </p>
      <section className='max-w-[1240px] flex gap-[10px] mx-auto'>
        <Tabs className='w-[276px] shrink-0'>
          <Tab
            isActive={activeTab === 'docking'}
            onClick={() => setActive('docking')}
          >
            {t('docking')}
          </Tab>
          <Tab
            isActive={activeTab === 'operatingHours'}
            onClick={() => setActive('operatingHours')}
          >
            {t('operatingHours')}
          </Tab>
          <Tab
            isActive={activeTab === 'cfsLcl'}
            onClick={() => setActive('cfsLcl')}
          >
            {t('cfsLcl')}
          </Tab>
          <Tab
            isActive={activeTab === 'responsibilityScope'}
            onClick={() => setActive('responsibilityScope')}
          >
            {t('responsibilityScope')}
          </Tab>
          <Tab
            isActive={activeTab === 'regulationsCargoShips'}
            onClick={() => setActive('regulationsCargoShips')}
          >
            {t('regulationsCargoShips')}
          </Tab>
          <Tab
            isActive={activeTab === 'safetyRegulations'}
            onClick={() => setActive('safetyRegulations')}
          >
            {t('safetyRegulations')}
          </Tab>
          <Tab
            isActive={activeTab === 'hazardousGoods'}
            onClick={() => setActive('hazardousGoods')}
          >
            {t('hazardousGoods')}
          </Tab>
          <Tab
            isActive={activeTab === 'requestPermissionContact'}
            onClick={() => setActive('requestPermissionContact')}
          >
            {t('requestPermissionContact')}
          </Tab>
          <Tab
            isActive={activeTab === 'documentSubmissionProcess'}
            onClick={() => setActive('documentSubmissionProcess')}
          >
            {t('documentSubmissionProcess')}
          </Tab>
          <Tab
            isActive={activeTab === 'bookingProcess'}
            onClick={() => setActive('bookingProcess')}
          >
            {t('bookingProcess')}
          </Tab>
          <Tab
            isActive={activeTab === 'serviceCharge'}
            onClick={() => setActive('serviceCharge')}
          >
            {t('serviceCharge')}
          </Tab>
        </Tabs>
        <div className='w-full h-[764px] bg-dark-60' />
      </section>
    </main>
  )
}
