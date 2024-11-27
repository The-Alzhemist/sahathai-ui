'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Link } from '@/libs/intl/navigation'
import { LocaleButton } from '@/components/LocaleButton'
import { SearchInput } from './SearchInput'

export function Header() {
  const t = useTranslations('Header')

  return (
    <div className='shadow-1 sticky top-0 bg-white z-10'>
      <div className='px-[10px] py-[8px] flex justify-between items-center container'>
        <Link href='/' className='shrink-0 p-[10px]'>
          <Image src='/logo.png' width={101} height={24} alt='' priority />
        </Link>

        <ul className='flex justify-end items-center w-full medium text-background gap-[42px] mobile:hidden'>
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
          <li>
            <SearchInput className='max-w-[200px]' />
          </li>
        </ul>
      </div>
    </div>
  )
}
