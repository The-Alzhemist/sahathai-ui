import { Link } from '@/libs/intl/navigation'
import { CustomeLinkProps } from './interface'

export function CustomeLink({ link, children, className }: CustomeLinkProps) {
  const regEx = /^http/

  if (regEx.test(link)) {
    return (
      <a className={className} href={link} target='_blank'>
        {children}
      </a>
    )
  }

  return (
    <Link className={className} href={link}>
      {children}
    </Link>
  )
}
