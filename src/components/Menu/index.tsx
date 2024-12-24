import { useSubmenu } from '@/hooks/useSubmenu'
import { Link } from '@/libs/intl/navigation'

export function Menu() {
  const { menus } = useSubmenu()

  return (
    <div className='fixed top-[60px] bg-background text-white  md:rounded-b-[30px] w-full z-10 '>
      <ul className=' flex justify-start md:justify-center overflow-y-scroll'>
        {menus.map(menu => (
          <li key={menu.title}>
            {menu.isExternalLink && (
              <a
                className='headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap'
                target='_blank'
                rel='noopener noreferrer'
                href={menu.pathname}
              >
                {menu.title}
              </a>
            )}
            {!menu.isExternalLink && (
              <Link
                className='headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap'
                href={menu.pathname}
              >
                {menu.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
