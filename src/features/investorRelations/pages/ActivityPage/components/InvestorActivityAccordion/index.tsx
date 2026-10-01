'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
import { InvestorActivity } from '@/types/InvestorActivity'

function isYoutubeUrl(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

function InvestorActivityQuarterRow({
  label,
  url,
}: {
  label: string
  url: string | null
}) {
  return (
    <div className='relative w-full pl-5 pb-5'>
      <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-0 -translate-x-1/2'></div>

      <h3 className='text-sm text-gray-700 mb-2'>{label}</h3>

      {!url ? (
        <span className='text-sm text-black-6'>-</span>
      ) : isYoutubeUrl(url) ? (
        <div className='w-full h-[300px]'>
          <iframe
            className='w-full h-full rounded-[30px]'
            src={url.replace('watch?v=', 'embed/')}
            title={label}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Link
          href={url}
          target='_blank'
          className='inline-flex items-center gap-2 px-[19px] py-[4px] border border-blue-300 rounded-[10px] bg-blue-50 hover:scale-105 transition-all'
        >
          <Image
            src='/investor-relations/new/link-icon-3x.png'
            width={20}
            height={20}
            alt='link-icon'
          />
        </Link>
      )}
    </div>
  )
}

function InvestorActivityYearTab({
  tabId,
  year,
  isOpen,
  onToggle,
  activity,
}: {
  tabId: string
  year: number
  isOpen: boolean
  onToggle: (id: string) => void
  activity: InvestorActivity
}) {
  const t = useTranslations('InvestorInformationPage')

  return (
    <div id={tabId} className='overflow-hidden'>
      <button
        onClick={() => onToggle(tabId)}
        className='w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition'
      >
        <span>{t('Activity.yearTitle', { year })}</span>
        {isOpen ? (
          <FaChevronDown className='text-blue-300' />
        ) : (
          <FaChevronRight className='text-blue-300' />
        )}
      </button>

      <div
        className='transition-all duration-500 ease-in-out overflow-hidden bg-white text-darkGray'
        style={{
          maxHeight: isOpen ? '2000px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className='p-4'>
          <InvestorActivityQuarterRow
            label={t('OtherFinancialStatementsTable.q1')}
            url={activity.q1}
          />
          <InvestorActivityQuarterRow
            label={t('OtherFinancialStatementsTable.q2')}
            url={activity.q2}
          />
          <InvestorActivityQuarterRow
            label={t('OtherFinancialStatementsTable.q3')}
            url={activity.q3}
          />
          <InvestorActivityQuarterRow
            label={t('OtherFinancialStatementsTable.annual')}
            url={activity.annual}
          />
        </div>
      </div>
    </div>
  )
}

export function InvestorActivityAccordion({
  data,
}: {
  data: InvestorActivity[]
}) {
  const [openTabs, setOpenTabs] = useState<string[]>([])

  useEffect(() => {
    const ids =
      new URLSearchParams(window.location.search)
        .get('tab')
        ?.split(',')
        .filter(Boolean) ?? []
    setOpenTabs(ids)
    if (!ids[0]) return

    requestAnimationFrame(() =>
      document.getElementById(ids[0])?.scrollIntoView({ block: 'start' })
    )
  }, [])

  const toggleTab = (id: string) => {
    const next = openTabs.includes(id)
      ? openTabs.filter(openId => openId !== id)
      : [...openTabs, id]
    setOpenTabs(next)
    const url = new URL(window.location.href)
    next.length
      ? url.searchParams.set('tab', next.join(','))
      : url.searchParams.delete('tab')
    window.history.replaceState(null, '', url)
  }

  return (
    <div className='space-y-4'>
      {data.map(activity => {
        const tabId = `year-${activity.id}`

        return (
          <InvestorActivityYearTab
            key={activity.id}
            tabId={tabId}
            year={activity.year}
            isOpen={openTabs.includes(tabId)}
            onToggle={toggleTab}
            activity={activity}
          />
        )
      })}
    </div>
  )
}
