'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

import { DownloadButton } from '@/components/DownloadButton'
import { getStrapiImageUrl } from '@/libs/util'
import { CorporateGovernanceDocument } from '@/types/CorporateGovernance'

function CorporateGovernanceDocumentRow({
  document,
}: {
  document: CorporateGovernanceDocument
}) {
  return (
    <div className='relative w-full flex justify-between border-left border-l-[2px] last:border-l-[2px] border-blue-300 last:border-white pl-5'>
      <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-0 -translate-x-1/2'></div>

      <div className='mb-10 w-full'>
        <h3 className='text-sm text-gray-700 mb-5'>{document.label || '-'}</h3>
      </div>

      {document.file && (
        <div className='px-1'>
          <DownloadButton href={getStrapiImageUrl(document.file.url)} />
        </div>
      )}

      {!document.file && document.url && (
        <Link
          href={document.url}
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

export function CorporateGovernanceDocumentList({
  id,
  documents,
}: {
  id: number
  documents: CorporateGovernanceDocument[]
}) {
  const t = useTranslations('InvestorInformationPage.GoodCorporate')
  const [isOpen, setIsOpen] = useState(false)
  const tabId = `corporate-governance-${id}`

  useEffect(() => {
    const ids =
      new URLSearchParams(window.location.search)
        .get('tab')
        ?.split(',')
        .filter(Boolean) ?? []
    setIsOpen(ids.includes(tabId))
    if (!ids.includes(tabId)) return

    requestAnimationFrame(() =>
      document.getElementById(tabId)?.scrollIntoView({ block: 'start' })
    )
  }, [tabId])

  const toggleTab = () => {
    const next = !isOpen
    setIsOpen(next)
    const url = new URL(window.location.href)
    next ? url.searchParams.set('tab', tabId) : url.searchParams.delete('tab')
    window.history.replaceState(null, '', url)
  }

  return (
    <div id={tabId} className='overflow-hidden'>
      <button
        onClick={toggleTab}
        className='w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition'
      >
        <span>{t('documentsTitle')}</span>
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
          {documents.map(doc => (
            <CorporateGovernanceDocumentRow key={doc.id} document={doc} />
          ))}
        </div>
      </div>
    </div>
  )
}
