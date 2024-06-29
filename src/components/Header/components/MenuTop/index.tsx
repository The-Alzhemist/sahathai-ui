'use client'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import { GlobeIcon } from '@/components/icons/GlobeIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { LocaleEnum } from '@/enums/LocaleEnum'
import { Link, usePathname, useRouter } from '@/libs/intl/navigation'
import { MenuTopProps } from './interface'

export function MenuTop({ locale }: MenuTopProps) {
  const t = useTranslations('Header.MenuTop')

  const router = useRouter()
  const pathname = usePathname()
  const queryStrings = useSearchParams()

  function handleLocaleChange() {
    const query = queryStrings.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, {
      locale: locale === LocaleEnum.TH ? LocaleEnum.EN : LocaleEnum.TH,
    })
  }

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
            href=''
            className='py-[18px] px-[24px] hover:bg-blue-400 flex items-center'
          >
            {t('joinUs')}
          </Link>
        </li>
        <li>
          <button
            className='py-[18px] px-[24px] hover:bg-blue-400 flex items-center uppercase gap-[10px]'
            type='button'
            onClick={handleLocaleChange}
          >
            <GlobeIcon width='24' height='24' />
            {LocaleEnum.TH}/{LocaleEnum.EN}
          </button>
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
