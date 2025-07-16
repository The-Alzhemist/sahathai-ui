'use client'

import { useSubmenu } from '@/hooks/useSubmenu'
import { Link, usePathname } from '@/libs/intl/navigation'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'
import { Dropdown } from '@/components/Dropdown'
import {
  DropdownMenu,
  DropdownMenuItem,
} from '@/components/Menu/components/DropdownMenu/DropdownMenu'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export function Menu() {
  const { menus } = useSubmenu()
  const pathname = usePathname()
  const isVisible = useHideOnScroll()

  return (
    <div
      className={`hidden md:block md:sticky top-[60px] bg-background text-white md:rounded-b-[30px] w-full z-10 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <ul className=' flex justify-start md:justify-center overflow-x-scroll  no-scrollbar  '>
        {menus.map(menu => {
          const isActive = menu.pathname === pathname
          if (menu.children && menu.children.length) {
            return (
              <DropdownMenu
                key={menu.title}
                label={menu.title}
                className={twMerge(isActive ? 'bg-primary-1' : '')}
              >
                {menu.children.map(subMenu => {
                  return (
                    <DropdownMenuItem key={subMenu.title}>
                      <Link
                        key={subMenu.title}
                        className={`headline-6 !font-[300] block px-[24px] w-full py-[18px] hover:bg-primary-1 whitespace-nowrap hover:text-white`}
                        target={menu.isExternalLink ? '_blank' : undefined}
                        rel={
                          subMenu.isExternalLink
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        href={subMenu.pathname}
                      >
                        {subMenu.title}
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenu>
            )
          }

          return (
            <li key={menu.title}>
              <Link
                className={`headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap ${
                  isActive && 'bg-primary-1'
                }`}
                target={menu.isExternalLink ? '_blank' : undefined}
                rel={menu.isExternalLink ? 'noopener noreferrer' : undefined}
                href={menu.pathname}
              >
                {menu.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
