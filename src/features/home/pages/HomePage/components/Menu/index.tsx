'use client'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { MenuItemProps } from './interface'

export function Menu() {
  const t = useTranslations('Menu')

  return (
    <div className='absolute left-1/2 -translate-x-1/2 bottom-0 max-w-[1200px] w-full px-[40px] bg-white rounded-[7px] shadow-2'>
      <ul className='group flex justify-start md:justify-center items-center gap-[21px] medium text-navy overflow-x-auto'>
        <Menu.Item href='/about-us'>{t('aboutUs')}</Menu.Item>
        <Menu.Item href='/services'>{t('service')}</Menu.Item>
        <Menu.Item href='/infrastructure-containers'>
          {t('infrastructureContainers')}
        </Menu.Item>
        <Menu.Item className='min-w-[140px]' href='/news'>
          {t('news')}
        </Menu.Item>
        <Menu.Item
          className='min-w-[140px]'
          href='https://sahathaiterminal.com/th/tracking/'
          isExternalLink={true}
        >
          {t('eService')}
        </Menu.Item>
        <Menu.Item className='min-w-[140px]' href='/investor-information'>
          {t('investorRelations')}
        </Menu.Item>
      </ul>
    </div>
  )
}

Menu.Item = function Item({
  children,
  href,
  className,
  isExternalLink = false,
}: MenuItemProps) {
  return (
    <>
      {!isExternalLink && (
        <li className='group-hover:text-black-9 whitespace-nowrap'>
          <Link
            href={href}
            className={cn(
              'hover:text-navy hover:border-secondary border-b-[3px] border-b-white py-[16.5px] px-[12px] block text-center  min-w-[100px]',
              className
            )}
          >
            {children}
          </Link>
        </li>
      )}

      {isExternalLink && (
        <a target='_blank' rel='noopener noreferrer' href={href}>
          {children}
        </a>
      )}
    </>
  )
}
