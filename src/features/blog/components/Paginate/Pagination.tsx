import { Link } from '@/libs/intl/navigation'
import { buildPagination } from '@/features/blog/components/Paginate/buildPagination'

type Props = {
  page: number
  totalPages: number
  search?: string
}

export function Pagination({ page = 1, totalPages, search }: Props) {
  if (totalPages <= 1) return null

  const hrefFor = (p: number) => {
    const qs = new URLSearchParams()
    if (p >= 1) qs.set('page', String(p))
    if (search) qs.set('search', search)
    return `?${qs.toString()}`
  }

  const Btn: React.FC<{
    children: React.ReactNode
    href?: string
    disabled?: boolean
    current?: boolean
    ariaLabel?: string
  }> = ({ children, href, disabled, current, ariaLabel }) => (
    <Link
      href={href ?? '#'}
      aria-disabled={disabled || undefined}
      aria-current={current ? 'page' : undefined}
      aria-label={ariaLabel}
      className={[
        'px-3 py-1 rounded border',
        disabled ? 'pointer-events-none opacity-50' : '',
        current ? 'bg-blue-300 text-white' : 'bg-white',
      ].join(' ')}
    >
      {children}
    </Link>
  )

  const items = buildPagination({
    page,
    totalPages,
    siblings: 1,
    boundaries: 1,
  })

  return (
    <nav className='flex items-center gap-2 mt-6' aria-label='Pagination'>
      <Btn
        href={page > 1 ? hrefFor(page - 1) : hrefFor(1)}
        disabled={page === 1}
        ariaLabel='Previous page'
      >
        Prev
      </Btn>

      {items.map((it, i) =>
        it === '…' ? (
          <span key={`dots-${i}`} className='px-2 text-gray-500 select-none'>
            …
          </span>
        ) : (
          <Btn
            key={it}
            href={hrefFor(it as number)}
            current={it === page}
            ariaLabel={`Page ${it}`}
          >
            {it}
          </Btn>
        )
      )}

      <Btn
        href={page < totalPages ? hrefFor(page + 1) : undefined}
        disabled={page === totalPages}
        ariaLabel='Next page'
      >
        Next
      </Btn>
    </nav>
  )
}
