'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Link } from '@/libs/intl/navigation'
import { LocaleButton } from '@/components/LocaleButton'
import { SearchInput } from './SearchInput'
import { ListIcon } from '@/components/icons/ListIcon'
import { useState } from 'react'
import MobileSidebar from '@/components/Header/components/MobileSidebar/MobileSidebar'

export function Header() {
  const t = useTranslations('Header')
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleOnToggleMobileSidebar = (isOpen: boolean) => {
    setIsMobileSidebarOpen(isOpen)
  }

  return (
    <div className='shadow-1 sticky top-0 bg-white z-20'>
      <div className='px-[10px] py-[8px] flex justify-between items-center container'>
        <Link href='/' className='shrink-0 p-[10px]'>
          <Image src='/logo.png' width={101} height={24} alt='' priority />
        </Link>

        <ul className='flex justify-end items-center w-full medium text-background gap-[42px] mobile:hidden mr-10'>
          <li>
            <Link href='/contact-us' className='flex items-center'>
              {t('contactUs')}
            </Link>
          </li>
          <li>
            <Link className='flex items-center' href='/join-us'>
              {t('joinUs')}
            </Link>
          </li>
          <li>
            <LocaleButton />
          </li>
          {/* <li>
            <SearchInput className='max-w-[200px]' />
          </li> */}
          <button onClick={() => handleOnToggleMobileSidebar(true)}>
            <ListIcon width='25' height='25' />
          </button>
        </ul>
      </div>
      {isMobileSidebarOpen && (
        <MobileSidebar
          handleOnToggleMobileSidebar={handleOnToggleMobileSidebar}
        />
      )}
    </div>
  )
}
