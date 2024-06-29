import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Link } from '@/libs/intl/navigation'
import { MenuItemProps } from './interface'
import { cn } from '@/libs/util'

export function Menu() {
  const t = useTranslations('Header.Menu')

  return (
    <div className='flex items-center px-[40px] container'>
      <Link href='/' className='shrink-0 p-[10px]'>
        <Image src='/logo.png' width={101} height={24} alt='' priority />
      </Link>

      <ul className='flex justify-end w-full button text-black-80'>
        <Menu.Item href=''>{t('aboutUs')}</Menu.Item>
        <Menu.Item href=''>{t('capabilities')}</Menu.Item>
        <Menu.Item href=''>{t('service')}</Menu.Item>
        <Menu.Item href=''>{t('customsDepartment')}</Menu.Item>
        <Menu.Item href=''>{t('news')}</Menu.Item>
        <Menu.Item href=''>{t('eService')}</Menu.Item>
        <Menu.Item href=''>{t('investorRelations')}</Menu.Item>
      </ul>
    </div>
  )
}

Menu.Item = function Item({ children, href, isActive = false }: MenuItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'py-[23px] px-[16px] hover:text-blue-300 flex items-center',
          { 'text-blue-300': isActive }
        )}
      >
        {children}
      </Link>
    </li>
  )
}
