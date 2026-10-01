'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

import { DownloadButton } from '@/components/DownloadButton'
import { getStrapiImageUrl } from '@/libs/util'
import {
  OperatingResult,
  OperatingResultQuarter,
} from '@/types/OperatingResult'

function OperatingResultQuarterRow({
  label,
  quarter,
}: {
  label: string
  quarter: OperatingResultQuarter
}) {
  return (
    <div className='relative w-full flex justify-between border-left border-l-[2px] last:border-l-[2px] border-blue-300 last:border-white pl-5'>
      <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-0 -translate-x-1/2'></div>

      <div className='mb-10 w-full'>
        <h3 className='text-sm text-gray-700 mb-5'>{label}</h3>
      </div>

      {quarter?.file && (
        <div className='px-1'>
          <DownloadButton href={getStrapiImageUrl(quarter.file.url)} />
        </div>
      )}

      {quarter?.url && (
        <Link
          href={quarter.url}
          target='_blank'
          className='mt-0.5 mx-3 min-w-[60px] h-fit block px-[19px] py-[4px] border border-blue-300 rounded-[10px] bg-blue-50 hover:scale-105 transition-all'
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

function OperatingResultYearTab({
  tabId,
  year,
  isOpen,
  onToggle,
  result,
}: {
  tabId: string
  year: number
  isOpen: boolean
  onToggle: (id: string) => void
  result: OperatingResult
}) {
  const t = useTranslations('InvestorInformationPage')

  return (
    <div id={tabId} className='overflow-hidden'>
      <button
        onClick={() => onToggle(tabId)}
        className='w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition'
      >
        <span>{t('PerformanceReport.yearTitle', { year })}</span>
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
          <OperatingResultQuarterRow
            label={t('OtherFinancialStatementsTable.q1')}
            quarter={result.q1}
          />
          <OperatingResultQuarterRow
            label={t('OtherFinancialStatementsTable.q2')}
            quarter={result.q2}
          />
          <OperatingResultQuarterRow
            label={t('OtherFinancialStatementsTable.q3')}
            quarter={result.q3}
          />
          <OperatingResultQuarterRow
            label={t('OtherFinancialStatementsTable.annual')}
            quarter={result.annual}
          />
        </div>
      </div>
    </div>
  )
}

export function OperatingResultAccordion({
  data,
}: {
  data: OperatingResult[]
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
      {data.map(result => {
        const tabId = `year-${result.id}`

        return (
          <OperatingResultYearTab
            key={result.id}
            tabId={tabId}
            year={result.year}
            isOpen={openTabs.includes(tabId)}
            onToggle={toggleTab}
            result={result}
          />
        )
      })}
    </div>
  )
}
