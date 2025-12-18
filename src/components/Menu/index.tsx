'use client'

import { useSubmenu } from '@/hooks/useSubmenu'
import { Link, usePathname, useRouter } from '@/libs/intl/navigation'
import { DropdownMenu } from '@/components/Menu/components/DropdownMenu/DropdownMenu'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useScrollVisible } from '@/context/ScrollVisibleContext'
import { DropdownMenuItem } from './components/DropdownMenuItem/DropdownMenuItem'

export function Menu() {
  const { menus } = useSubmenu()
  const pathname = usePathname()
  const { isVisible } = useScrollVisible()
  const router = useRouter()

  return (
    <div
      className={`hidden md:block md:sticky top-[50px] bg-background text-white md:rounded-b-[30px] w-full z-10 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <ul className='flex justify-start md:justify-center overflow-x-scroll  no-scrollbar   bg-gradient-to-r from-blue-300 to-red-300 rounded-b-[30px]'>
        {menus.map(menu => {
          const isActive = menu.pathname === pathname
          if (menu.children && menu.children.length) {
            return (
              <DropdownMenu
                key={menu.title}
                label={menu.title}
                className={twMerge(isActive ? 'hover:bg-blue-300' : '')}
                onClick={() => router.push(menu.pathname)}
              >
                {menu.children.map(subMenu => {
                  return (
                    <DropdownMenuItem key={subMenu.title}>
                      <Link
                        scroll={subMenu.isScroll}
                        key={subMenu.title}
                        className={`!text-xs headline-6 !font-[300] block px-4 w-full py-3 hover:bg-blue-300 whitespace-nowrap hover:text-white rounded-sm transition-all`}
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
                className={`headline-6 !font-[300] block px-[24px] py-[18px]   hover:bg-white/15 data-[open]:bg-white/15 whitespace-nowrap ${
                  isActive && 'bg-blue-300'
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
