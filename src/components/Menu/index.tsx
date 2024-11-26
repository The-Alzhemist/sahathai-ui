import { useSubmenu } from '@/hooks/useSubmenu'
import { Link } from '@/libs/intl/navigation'

export function Menu() {
  const { menus } = useSubmenu()

  return (
    <div className='fixed top-[60px] bg-background text-white rounded-b-[30px] w-full z-10 overflow-x-auto'>
      <ul className='container flex items-center justify-center'>
        {menus.map(menu => (
          <li key={menu.title}>
            <Link
              className='headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap'
              href={menu.pathname}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
