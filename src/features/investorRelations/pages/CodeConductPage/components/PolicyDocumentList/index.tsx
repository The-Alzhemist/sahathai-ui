'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

import { DownloadButton } from '@/components/DownloadButton'
import { getStrapiImageUrl } from '@/libs/util'
import { MediaType } from '@/types/MediaType'
import { Policy } from '@/types/Policy'

function PolicyLanguageRow({ label, file }: { label: string; file: MediaType | null }) {
  if (!file) return null

  return (
    <div className='relative w-full flex justify-between border-left border-l-[2px] last:border-l-[2px] border-blue-300 last:border-white pl-5 py-5'>
      <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-5 -translate-x-1/2'></div>

      <div className='w-full'>
        <h3 className='text-sm text-gray-700'>{label}</h3>
      </div>

      <div className='px-1'>
        <DownloadButton href={getStrapiImageUrl(file.url)} />
      </div>
    </div>
  )
}

function PolicyTab({
  tabId,
  policy,
  isOpen,
  onToggle,
}: {
  tabId: string
  policy: Policy
  isOpen: boolean
  onToggle: (id: string) => void
}) {
  const t = useTranslations('CodeConductPage')

  return (
    <div id={tabId} className='overflow-hidden'>
      <button
        onClick={() => onToggle(tabId)}
        className='w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition'
      >
        <span>{policy.title || '-'}</span>
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
          <PolicyLanguageRow label={t('thai')} file={policy.fileTh} />
          <PolicyLanguageRow label={t('english')} file={policy.fileEn} />
        </div>
      </div>
    </div>
  )
}

export function PolicyDocumentList({ policies }: { policies: Policy[] }) {
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
      {policies.map(policy => {
        const tabId = `policy-${policy.id}`

        return (
          <PolicyTab
            key={policy.id}
            tabId={tabId}
            policy={policy}
            isOpen={openTabs.includes(tabId)}
            onToggle={toggleTab}
          />
        )
      })}
    </div>
  )
}
