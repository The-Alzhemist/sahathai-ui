import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { SubmenuItemProps, SubmenuProps } from './interface'

export function Submenu({ children }: SubmenuProps) {
  return (
    <section className='flex justify-start md:justify-center  gap-5 overflow-x-scroll lg:overscroll-none mx-auto px-5'>
      {children}
    </section>
  )
}

Submenu.Item = function Item({
  text,
  href,
  isActive = false,
}: SubmenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'subtitle-1 text-dark-80 py-[15px] border-b-2 border-white min-w-[150px] flex items-center',
        {
          'text-blue-400 border-blue-400': isActive,
        }
      )}
      scroll={false}
    >
      {text}
    </Link>
  )
}
