'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

import { DownloadButton } from '@/components/DownloadButton'
import { getStrapiImageUrl } from '@/libs/util'
import {
  ShareHolderMeeting,
  ShareHolderMeetingItem,
} from '@/types/ShareHolderMeeting'

function isYoutubeUrl(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

function ShareHolderMeetingItemRow({
  item,
}: {
  item: ShareHolderMeetingItem
}) {
  return (
    <div className='relative w-full flex justify-between border-left border-l-[2px] last:border-l-[2px] border-blue-300 last:border-white pl-5'>
      <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-0 -translate-x-1/2'></div>

      <div className='mb-10 w-full'>
        <h3 className='text-sm text-gray-700 mb-5'>{item.label || '-'}</h3>

        {item.url && isYoutubeUrl(item.url) && (
          <div className='w-full h-[300px]'>
            <iframe
              className='w-full h-full rounded-[30px]'
              src={item.url.replace('watch?v=', 'embed/')}
              title={item.label}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      {item.file && (
        <div className='px-1'>
          <DownloadButton href={getStrapiImageUrl(item.file.url)} />
        </div>
      )}

      {item.url && !isYoutubeUrl(item.url) && (
        <Link
          href={item.url}
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

function ShareHolderMeetingSectionTab({
  sectionId,
  title,
  isOpen,
  onToggle,
  items,
}: {
  sectionId: string
  title: string
  isOpen: boolean
  onToggle: (id: string) => void
  items: ShareHolderMeetingItem[]
}) {
  return (
    <div id={sectionId} className='overflow-hidden'>
      <button
        onClick={() => onToggle(sectionId)}
        className='w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition'
      >
        <span>{title || '-'}</span>
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
          {items.map(item => (
            <ShareHolderMeetingItemRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ShareHolderMeetingAccordion({
  data,
}: {
  data: ShareHolderMeeting[]
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
    <>
      {data.map(meeting => (
        <div key={meeting.id} className='rounded-md p-4'>
          <h2 className='text-left text-lg mb-7 text-blue-400'>
            {meeting.title}
          </h2>

          <div className='space-y-4'>
            {meeting.sections.map(section => {
              const sectionId = `section-${section.id}`

              return (
                <ShareHolderMeetingSectionTab
                  key={section.id}
                  sectionId={sectionId}
                  title={section.title}
                  isOpen={openTabs.includes(sectionId)}
                  onToggle={toggleTab}
                  items={section.items}
                />
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
