'use client'
import { useTranslations } from 'next-intl'

import { Link, usePathname } from '@/libs/intl/navigation'
import { MenuItemProps } from './interface'

export function Menu() {
  const t = useTranslations('HomePage.Menu')
  const pathname = usePathname()

  return (
    <div className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 max-w-[1200px] w-full px-[112px] bg-white rounded-[7px] shadow-2'>
      <ul className='group flex items-center gap-[21px] medium text-navy'>
        <Menu.Item href='/about-us'>{t('aboutUs')}</Menu.Item>
        <Menu.Item href='/services'>{t('service')}</Menu.Item>
        <Menu.Item href='/infrastructure-containers'>
          {t('infrastructureContainers')}
        </Menu.Item>
        {/* <Menu.Item href=''>{t('customsDepartment')}</Menu.Item> */}
        <Menu.Item href='/news'>{t('news')}</Menu.Item>
        <Menu.Item href=''>{t('eService')}</Menu.Item>
        <Menu.Item href='/investor-information'>
          {t('investorRelations')}
        </Menu.Item>
      </ul>
    </div>
  )
}

Menu.Item = function Item({ children, href }: MenuItemProps) {
  return (
    <li className='group-hover:text-gray'>
      <Link
        href={href}
        className='hover:text-navy hover:border-secondary border-b-[3px] border-b-white py-[18px] px-[12px] block min-w-[100px] text-center uppercase'
      >
        {children}
      </Link>
    </li>
  )
}
