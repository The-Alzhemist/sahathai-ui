'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/libs/intl/navigation'
import { LocaleButton } from '@/components/LocaleButton'
import { ListIcon } from '@/components/icons/ListIcon'
import { useEffect, useState } from 'react'
import MobileSidebar from '@/components/Header/components/MobileSidebar/MobileSidebar'

import { twMerge } from 'tailwind-merge'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { usePathname } from 'next/navigation'
import { useScrollVisible } from '@/context/ScrollVisibleContext'

export function Header() {
  const t = useTranslations('Header')
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const { isVisible } = useScrollVisible()
  const pathname = usePathname()

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

  const isHomePage =
    pathname === '/th' || pathname === '/en' || pathname === '/cn'

  return (
    <div
      className={twMerge(
        'shadow-1 sticky top-0 bg-white z-20',
        !isMobileSidebarOpen && 'transition-transform duration-300',
        !isMobileSidebarOpen && isVisible && 'translate-y-0',
        !isMobileSidebarOpen &&
          !isVisible &&
          'translate-y-[-150%] pointer-events-none'
      )}
    >
      <div
        className={twMerge(
          `px-[10px] py-[8px] flex items-center container text-sm h-[50px] !max-w-full ${
            isHomePage ? 'justify-end ' : 'justify-between'
          }`,
          // Change gradient and text color if home page
          isHomePage
            ? 'bg-gradient-to-r from-blue-300 to-red-300 text-white'
            : 'bg-white text-blue-300'
        )}
      >
        {!isHomePage && (
          <Link href='/' className='shrink-0 p-[10px]'>
            <Image src='/logo.png' width={101} height={24} alt='' priority />
          </Link>
        )}

        <section className='flex gap-x-5'>
          <ul className='flex justify-end items-center w-full medium gap-[42px] md:mr-10'>
            <li className='hidden md:block '>
              <Link href='/blog' className='flex items-center'>
                {t('blog')}
              </Link>
            </li>
            <li className='hidden md:block '>
              <Link href='/contact-us' className='flex items-center'>
                {t('contactUs')}
              </Link>
            </li>
            <li className='hidden md:block '>
              <Link className='flex items-center' href='/join-us'>
                {t('joinUs')}
              </Link>
            </li>
            <li>
              <LocaleButton
                className={twMerge(isHomePage ? 'text-white' : 'text-blue-300')}
                isHomePage={isHomePage}
              />{' '}
            </li>
          </ul>

          <div
            className={twMerge(
              `flex gap-x-[16px] ${isHomePage ? 'text-white' : 'text-blue-300'}`
            )}
          >
            <Link
              href='https://www.youtube.com/channel/UCp2XYZiyDSN6Xt5DSQv_foA/videos?view=0&sort=dd&shelf_id=0'
              target='_blank'
              rel='noopener noreferrer'
            >
              <YoutubeIcon width='24' height='24' />
            </Link>
            <Link
              href='https://www.facebook.com/sahathaiterminal/?locale=th_TH'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon width='24' height='24' />
            </Link>
            <Link
              href='https://www.instagram.com/sahathaiterminal/?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon width='24' height='24' />
            </Link>
          </div>

          <button
            className='block md:hidden'
            onClick={handleOnToggleMobileSidebar}
          >
            <ListIcon
              width='25'
              height='25'
              className={twMerge(
                ` ${isHomePage ? 'text-white' : 'text-blue-300'}`
              )}
            />
          </button>
        </section>
      </div>

      {/* header secondary */}
      {isHomePage && (
        <section className=' relative px-5 py-[8px] flex justify-between items-center h-[60px]'>
          <Link href='/' className='shrink-0 absolute'>
            <Image
              src='/logo.png'
              className='p-2'
              width={101}
              height={24}
              alt=''
              priority
            />
          </Link>

          <div className='w-full flex justify-center gap-x-2'>
            <span className='text-blue-300 font-light text-[16px]'>
              {t('sahathai')}
            </span>
            <span className='text-red-300 font-light text-[16px]'>
              {t('terminal')}
            </span>
          </div>

          <div></div>
        </section>
      )}

      {isMobileSidebarOpen && (
        <MobileSidebar
          handleOnToggleMobileSidebar={handleOnToggleMobileSidebar}
        />
      )}
    </div>
  )
}
