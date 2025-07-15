'use client'

import { useSubmenu } from '@/hooks/useSubmenu'
import { Link, usePathname } from '@/libs/intl/navigation'
import { useHideOnScroll } from '@/hooks/useHideOnScroll'

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
          const isActive = pathname === menu.pathname

          return (
            <li key={menu.title}>
              {menu.isExternalLink && (
                <a
                  className={`headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap ${
                    isActive ? 'bg-primary-1' : ''
                  }`}
                  target='_blank'
                  rel='noopener noreferrer'
                  href={menu.pathname}
                >
                  {menu.title}
                </a>
              )}
              {!menu.isExternalLink && (
                <Link
                  className={`headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap ${
                    isActive ? 'bg-primary-1' : ''
                  }`}
                  href={menu.pathname}
                >
                  {menu.title}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
