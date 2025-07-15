'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Link } from '@/libs/intl/navigation'
import { LocaleButton } from '@/components/LocaleButton'
import { SearchInput } from './SearchInput'
import { ListIcon } from '@/components/icons/ListIcon'
import { useState } from 'react'
import MobileSidebar from '@/components/Header/components/MobileSidebar/MobileSidebar'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const t = useTranslations('Header')
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const isVisible = useHideOnScroll()

  const handleOnToggleMobileSidebar = () => {
    setIsMobileSidebarOpen(prev => !prev)
  }

  return (
    <div
      className={twMerge(
        'shadow-1 sticky top-0 bg-white z-20 ',
        !isMobileSidebarOpen && 'transition-transform duration-300',
        !isMobileSidebarOpen && isVisible && 'translate-y-0',
        !isMobileSidebarOpen &&
          !isVisible &&
          'translate-y-[-150%] pointer-events-none'
      )}
    >
      <div className='px-[10px] py-[8px] flex justify-between items-center container'>
        <Link href='/' className='shrink-0 p-[10px]'>
          <Image src='/logo.png' width={101} height={24} alt='' priority />
        </Link>

        <section className='flex gap-x-5'>
          <ul className='flex justify-end items-center w-full medium text-background gap-[42px] md:mr-10'>
            <li className='hidden md:block'>
              <Link href='/contact-us' className='flex items-center'>
                {t('contactUs')}
              </Link>
            </li>
            <li className='hidden md:block'>
              <Link className='flex items-center' href='/join-us'>
                {t('joinUs')}
              </Link>
            </li>
            <li>
              <LocaleButton />
            </li>
          </ul>
          <button
            className='block md:hidden'
            onClick={() => handleOnToggleMobileSidebar()}
          >
            <ListIcon width='25' height='25' />
          </button>
        </section>
      </div>

      {isMobileSidebarOpen && (
        <MobileSidebar
          handleOnToggleMobileSidebar={handleOnToggleMobileSidebar}
        />
      )}
    </div>
  )
}
