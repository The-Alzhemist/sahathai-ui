'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Link } from '@/libs/intl/navigation'
import { LocaleButton } from '@/components/LocaleButton'
import { SearchInput } from './SearchInput'
import { ListIcon } from '@/components/icons/ListIcon'
import { useEffect, useState } from 'react'
import MobileSidebar from '@/components/Header/components/MobileSidebar/MobileSidebar'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'
import { twMerge } from 'tailwind-merge'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'

export function Header() {
  const t = useTranslations('Header')
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const isVisible = useHideOnScroll()

  const handleOnToggleMobileSidebar = () => {
    setIsMobileSidebarOpen(prev => !prev)
  }

  // Disable body scrollable
  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileSidebarOpen])
  
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
      <div className='px-[10px] py-[8px] flex justify-end items-center container bg-gradient-to-r from-blue-300 to-red-300  h-[50px]'>
        {/*<Link href='/' className='shrink-0 p-[10px]'>*/}
        {/*  <Image src='/logo.png' width={101} height={24} alt='' priority />*/}
        {/*</Link>*/}

        <section className="flex gap-x-5 ">
          <ul className="flex justify-end items-center w-full medium  gap-[42px] md:mr-10">
            <li className="hidden md:block text-white">
              <Link href="/contact-us" className="flex items-center">
                {t('contactUs')}
              </Link>
            </li>
            <li className="hidden md:block text-white">
              <Link className="flex items-center" href="/join-us">
                {t('joinUs')}
              </Link>
            </li>
            <li>
              <LocaleButton  className='text-white' />
            </li>
          </ul>

          <div className="flex gap-x-[16px] text-white">
            <YoutubeIcon width="24" height="24" />
            <FacebookIcon width="24" height="24" />
            <InstagramIcon width="24" height="24" />
          </div>

          <button
            className="block md:hidden"
            onClick={() => handleOnToggleMobileSidebar()}
          >
            <ListIcon width="25" height="25" className='text-white' />
          </button>
        </section>
      </div>

      {/*header secondary*/}
      <section className="px-5 py-[8px] flex justify-between items-center h-[60px]">
        <Link href="/" className="shrink-0 ">
          <Image src="/logo.png" className="p-2" width={101} height={24} alt="" priority />
        </Link>

        <div className="flex gap-x-2">
          <span className="text-blue-300 font-light text-[20px]">สหไทย</span>
          <span className="text-red-300 font-light text-[20px]">เทอร์มินอล</span>
        </div>

        <span className="text-red-300 text-[20px]"></span>
      </section>

      {isMobileSidebarOpen && (
        <MobileSidebar
          handleOnToggleMobileSidebar={handleOnToggleMobileSidebar}
        />
      )}
    </div>
  )
}
