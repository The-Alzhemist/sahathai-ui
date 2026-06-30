'use client'
import { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Tabs } from '../Tabs'
import { Tab } from '../Tabs/Tab'
import { TabType } from './interface'
import RequestPermissionContact from '@/features/infrastructureContainers/components/OperationGuidelines/components/RequestPermissionContact'

import DockingInfo from '@/features/infrastructureContainers/components/OperationGuidelines/components/DockingInfo'
import OperatingHours from '@/features/infrastructureContainers/components/OperationGuidelines/components/OperatingHours'
import CfsGoods from '@/features/infrastructureContainers/components/OperationGuidelines/components/CfsGoods'
import RegulationsCargoShips from '@/features/infrastructureContainers/components/OperationGuidelines/components/RegulationsCargoShips'
import SafetyRegulations from '@/features/infrastructureContainers/components/OperationGuidelines/components/SafetyRegulations'
import HazardousGoods from '@/features/infrastructureContainers/components/OperationGuidelines/components/HazardousGoods'
import ResponsibilityScope from '@/features/infrastructureContainers/components/OperationGuidelines/components/ResponsibilityScope'
import DocumentProcess from '@/features/infrastructureContainers/components/OperationGuidelines/components/DocumentProcess'
import ServiceProcess from '@/features/infrastructureContainers/components/OperationGuidelines/components/ServiceProcess'
import BookingProcess from '@/features/infrastructureContainers/components/OperationGuidelines/components/BookingProcess'
import Image from 'next/image'

export function OperationGuidelines() {
  const t = useTranslations('InfrastructureContainersPage.OperationGuidelines')
  const sectionRef = useRef<HTMLElement>(null)
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

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as TabType
    const validKeys = tabs.map((t) => t.key)
    if (hash && validKeys.includes(hash)) {
      setActive(hash)
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [])

  function onTabChange(value: TabType) {
    setActive(value)
    window.location.hash = value
  }

  return (
    <section
      ref={sectionRef}
      className='relative py-10 min-h-[1200px]'
      id='operation-guidelines'
    >
      {/* background */}
      <div className="absolute opacity-100 inset-0 bottom-0 z-0 bg-[url('/infrastructure-containers/new/structure-bg-bottom-3x.webp')] bg-center bg-no-repeat bg-cover" />

      {/* content */}
      <Animation className='relative  max-w-[1040px] my-[90px] w-full mx-auto px-5'>
        <h1 className='headline-2 text-center text-navy'>{t('title')}</h1>
        <section className='w-full flex flex-col md:flex-row gap-5  p-5 mt-[20px] shadow-2 rounded-[20px] bg-[#eeeeee]'>
          <Tabs className='flex overflow-auto md:block w-full md:w-[200px] shrink-0 gap-2'>
            {tabs.map(({ key, title }) => (
              <Tab
                key={key}
                isActive={activeTab === key}
                onClick={() => onTabChange(key)}
              >
                {title}
              </Tab>
            ))}
          </Tabs>

          <div className=' p-5 bg-white rounded-[10px] h-[800px] overflow-y-auto'>
            {activeTab === 'docking' && <DockingInfo />}
            {activeTab === 'operatingHours' && <OperatingHours />}
            {activeTab === 'cfsLcl' && <CfsGoods />}
            {activeTab === 'responsibilityScope' && <ResponsibilityScope />}
            {activeTab === 'regulationsCargoShips' && <RegulationsCargoShips />}
            {activeTab === 'safetyRegulations' && <SafetyRegulations />}
            {activeTab === 'hazardousGoods' && <HazardousGoods />}
            {activeTab === 'requestPermissionContact' && (
              <RequestPermissionContact />
            )}
            {activeTab === 'documentSubmissionProcess' && <DocumentProcess />}
            {activeTab === 'bookingProcess' && <BookingProcess />}
            {activeTab === 'serviceCharge' && <ServiceProcess />}
          </div>
        </section>
      </Animation>
    </section>
  )
}
