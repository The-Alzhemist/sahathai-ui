'use client'
import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Tabs } from '@/components/Tabs'
import { Committee } from '@/types/Committee'
import { SubcommitteeSection } from './SubcommitteeSection'

export function Subcommittee({ data }: { data: Committee[] }) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Subcommittee')

  const tabs = useMemo(
    () =>
      data.map(committee => ({
        title: committee.name,
        key: committee.documentId,
      })),
    [data]
  )

  const [activeTab, setActiveTab] = useState<string>(
    tabs[0]?.key ?? ''
  )

  const activeCommittee = data.find(
    committee => committee.documentId === activeTab
  )

  return (
    <section className='relative pt-[90px] pb-[85px] max-w-[1040px] w-full mx-auto px-5'>
      <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>
      <div className='flex'>
        <Tabs
          className='mt-[40px] w-fit mx-auto bg-white'
          tabs={tabs}
          style='border'
          active={activeTab}
          onChange={setActiveTab}
        />
      </div>

      {activeCommittee && (
        <Animation
          key={activeTab}
          className='whitespace-pre-wrap body-1 text-black-6 mt-[50px] rounded-[15px] p-5  md:py-[44px] md:px-[65px] shadow-8 bg-white '
        >
          <SubcommitteeSection committee={activeCommittee} />
        </Animation>
      )}
    </section>
  )
}
