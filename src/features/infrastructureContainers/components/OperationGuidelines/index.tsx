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
    // The browser restores the scroll position from before a refresh, which
    // races with (and usually wins against) our own scrollIntoView below —
    // that's why the anchor scroll would silently fail specifically on
    // reload. Take manual control so our hash-based scroll is authoritative.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Content above this section (e.g. the machinery-equipment carousel)
    // renders many times taller than its final size until its slider
    // library initializes client-side, so this section keeps moving for a
    // while after mount. Rather than guess a fixed delay, keep re-aligning
    // (with an instant, non-animated scroll so it doesn't fight a moving
    // target) until the section's position stops shifting. `cancelled` lets
    // the effect's cleanup stop this loop — without it, React Strict Mode's
    // dev-only double-invoke runs two competing loops that fight each other.
    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const scrollToSection = () => {
      let lastTop: number | null = null
      let stableCount = 0
      let attempts = 0
      const maxAttempts = 60 // ~12s at 200ms
      const requiredStableChecks = 5 // ~1s of no movement before trusting it

      const check = () => {
        if (cancelled) return
        attempts += 1
        const el = sectionRef.current
        if (!el) return

        el.scrollIntoView({ behavior: 'auto' })

        const top = el.getBoundingClientRect().top
        if (lastTop !== null && Math.abs(top - lastTop) < 2) {
          stableCount += 1
        } else {
          stableCount = 0
        }
        lastTop = top

        if (stableCount < requiredStableChecks && attempts < maxAttempts) {
          timeoutId = setTimeout(check, 200)
        }
      }

      check()
    }

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'operation-guidelines') {
        scrollToSection()
        return
      }

      const validKeys = tabs.map(t => t.key)
      if (hash && validKeys.includes(hash as TabType)) {
        setActive(hash as TabType)
        scrollToSection()
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    // The browser re-asserts its own previous-scroll-position restoration
    // around the `load` event on this image-heavy page, overriding whatever
    // we scrolled to earlier — re-run our correction once more after that.
    window.addEventListener('load', handleHash)
    return () => {
      cancelled = true
      window.removeEventListener('load', handleHash)
      if (timeoutId) clearTimeout(timeoutId)
      window.removeEventListener('hashchange', handleHash)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
