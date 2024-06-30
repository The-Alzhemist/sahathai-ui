'use client'
import { useTranslations } from 'next-intl'

import { SearchIcon } from '@/components/icons/SearchIcon'
import { Link, usePathname } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { LocaleButton } from '@/components/LocaleButton'

export function MenuTop() {
  const t = useTranslations('Header.MenuTop')
  const pathname = usePathname()

  return (
    <div className='bg-blue-300'>
      <ul className='flex justify-end w-full medium text-white container'>
        <li>
          <Link
            href=''
            className='py-[18px] px-[24px] hover:bg-blue-400 flex items-center'
          >
            {t('contactUs')}
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'py-[18px] px-[24px] hover:bg-blue-400 flex items-center',
              { 'bg-blue-400': pathname.includes('join-us') }
            )}
            href='/join-us'
          >
            {t('joinUs')}
          </Link>
        </li>
        <li>
          <LocaleButton className='hover:bg-blue-400' />
        </li>
        <li>
          <div className='py-[18px] px-[24px] flex items-center gap-[10px]'>
            <SearchIcon width='24' height='24' />
            {t('search')}
          </div>
        </li>
      </ul>
    </div>
  )
}
