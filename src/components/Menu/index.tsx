'use client'

import { useSubmenu } from '@/hooks/useSubmenu'
import { Link, usePathname } from '@/libs/intl/navigation'

export function Menu() {
  const { menus } = useSubmenu()
  const pathname = usePathname()

  return (
    <div className='fixed top-[60px] bg-background text-white  md:rounded-b-[30px] w-full z-10 '>
      <ul className=' flex justify-start md:justify-center overflow-y-scroll'>
        {menus.map(menu => {
          console.log('menu.pathname::', menu.pathname, pathname)
          const isActive = pathname === menu.pathname
          console.log('isActive::', isActive)
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
