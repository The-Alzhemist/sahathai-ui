import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { SubmenuItemProps, SubmenuProps } from './interface'

export function Submenu({ children }: SubmenuProps) {
  return (
    <section className='bg-blue-300 flex justify-center'>{children}</section>
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
      className={cn('py-[23px] px-[16px] text-white button hover:bg-blue-400', {
        'bg-blue-400': isActive,
      })}
    >
      {text}
    </Link>
  )
}
