import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link, usePathname } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { UserIcon } from '@/components/icons/UserIcon'
import { HeadsetIcon } from '@/components/icons/HeadsetIcon'
import { MobileSidebarProps } from '@/components/Header/components/MobileSidebar/interface'
import withMobileSidebar from './withMobileSidebar'
import { ShippingIcon } from '@/components/icons/ShippingIcon'
import { NewspaperIcon } from '@/components/icons/NewsIcon'
import { DeviceMobileIcon } from '@/components/icons/DeviceMobileIcon'
import { ChartIcon } from '@/components/icons/ChartIcon'
import { PhoneIcon } from '@/components/icons/PhoneIcon'
import { ReadCVIcon } from '@/components/icons/ReadCvIcon'
import { useSubmenu } from '@/hooks/useSubmenu'
import {
  DropdownMenu,
  DropdownMenuItem,
} from '@/components/Menu/components/DropdownMenu/DropdownMenu'
import { twMerge } from 'tailwind-merge'
import React from 'react'
import MenuCollapse from '@/components/Header/components/MenuCollapse/MenuCollapse'

interface SidebarLinkProps {
  href: string
  icon?: JSX.Element
  label: string
  onClick: () => void
  isExternalLink?: boolean
  isSubMenu?: boolean
}

const SidebarLink = ({
  href,
  icon,
  label,
  onClick,
  isExternalLink = false,
  isSubMenu = false,
}: SidebarLinkProps) => {
  return (
    <div onClick={onClick}>
      <Link
        className='flex items-center gap-x-2'
        href={href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
      >
        {icon && icon}
        {isSubMenu && <span className='px-2'>-</span>}
        <span className='text-black-6'>{label}</span>
      </Link>
    </div>
  )
}

const MobileSidebar = ({ handleOnToggle, isVisible }: MobileSidebarProps) => {
  const t = useTranslations('Header')
  const { menus } = useSubmenu()
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'bg-white h-full w-full fixed top-0 left-0 z-20 p-5',
        'transition-all duration-500',
        isVisible ? 'opacity-100 ' : ' opacity-0'
      )}
    >
      <div className='h-full max-w-7xl mx-auto flex flex-col'>
        <section className='flex justify-between pb-2 border-b'>
          <Link href='/' className='shrink-0 p-[10px]'>
            <Image src='/logo.png' width={101} height={24} alt='' priority />
          </Link>
          <div className='text-xl cursor-pointer' onClick={handleOnToggle}>
            X
          </div>
        </section>

        <section className='flex flex-col justify-between h-full'>
          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            {menus.map(menu => {
              const isActive = menu.pathname === pathname
              if (menu.children && menu.children.length) {
                return (
                  <MenuCollapse
                    key={menu.title}
                    title={menu.title}
                    icon={menu.icon}
                  >
                    {menu.children.map(subMenu => {
                      return (
                        <SidebarLink
                          key={subMenu.title}
                          href={subMenu.pathname}
                          label={subMenu.title}
                          onClick={handleOnToggle}
                          isSubMenu
                        />
                      )
                    })}
                  </MenuCollapse>
                )
              }
              return (
                <div
                  className='min-h-[40px] flex items-center'
                  key={menu.title}
                >
                  <SidebarLink
                    href={menu.pathname}
                    icon={menu.icon}
                    label={menu.title}
                    onClick={handleOnToggle}
                  />
                </div>
              )
            })}
          </div>

          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <SidebarLink
              href='/contact-us'
              icon={<PhoneIcon width='20' height='20' />}
              label={t('contactUs')}
              onClick={handleOnToggle}
            />
            <SidebarLink
              href='/join-us'
              icon={<ReadCVIcon width='20' height='20' />}
              label={t('joinUs')}
              onClick={handleOnToggle}
            />
          </div>
        </section>
      </div>
    </nav>
  )
}

const WrappedComponent = withMobileSidebar(MobileSidebar)
export default WrappedComponent
