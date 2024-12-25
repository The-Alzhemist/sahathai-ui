import { useState } from 'react'
import withMobileSidebar from './withMobileSidebar'
import { MobileSidebarProps } from '@/components/Header/components/MobileSidebar/interface'
import { Link } from '@/libs/intl/navigation'
import Image from 'next/image'
import { ListIcon } from '@/components/icons/ListIcon'
import { useTranslations } from 'next-intl'
import { useAnimation } from '@/hooks/useAnimation'
import { cn } from '@/libs/util'
import { useMobileSidebarAnimation } from '@/hooks/useMobileSidebarAnimation'
import { LocaleButton } from '@/components/LocaleButton'

const MobileSidebar = ({ handleOnToggle, isVisible }: MobileSidebarProps) => {
  const t = useTranslations('Header')
  const { ref, animationClassName } = useMobileSidebarAnimation(isVisible)

  return (
    <nav
      ref={ref}
      className={cn(
        animationClassName,
        'bg-white h-full w-full fixed top-0 left-0 z-20 p-5'
      )}
    >
      <div className='h-full max-w-7xl mx-auto flex flex-col'>
        <section className='flex justify-between pb-2 border-b'>
          <Link href='/' className='shrink-0 p-[10px]'>
            <Image src='/logo.png' width={101} height={24} alt='' priority />
          </Link>
          <div
            className='text-xl cursor-pointer'
            onClick={() => handleOnToggle(false)}
          >
            X
          </div>
        </section>
        <section className='flex flex-col justify-between h-full'>
          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <div onClick={() => handleOnToggle(false)}>
              <Link href='/contact-us' className='flex items-center'>
                {t('aboutUs')}
              </Link>
            </div>

            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/join-us'>
                {t('service')}
              </Link>
            </div>

            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/join-us'>
                {t('infra')}
              </Link>
            </div>

            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/news'>
                {t('news')}
              </Link>
            </div>

            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/join-us'>
                {t('eService')}
              </Link>
            </div>

            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/investor-information'>
                {t('invester')}
              </Link>
            </div>
          </div>

          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/join-us'>
                {t('contactUs')}
              </Link>
            </div>

            <div onClick={() => handleOnToggle(false)}>
              <Link className='flex items-center' href='/investor-information'>
                {t('joinUs')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </nav>
  )
}

const WrappedComponent = withMobileSidebar(MobileSidebar)
export default WrappedComponent
