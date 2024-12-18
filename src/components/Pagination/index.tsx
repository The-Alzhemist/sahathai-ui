'use client'
import ReactPaginate from 'react-paginate'

import { PaginationProps } from './interface'
import { cn } from '@/libs/util'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

export function Pagination({
  className,
  pageCount,
  pageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      className={cn('flex justify-end gap-[8px] ml-auto', className)}
      breakLabel='...'
      nextLabel={
        <ChevronDownIcon className='-rotate-90' width='18' height='18' />
      }
      onPageChange={value => {
        return pageChange(value.selected + 1)
      }}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={
        <ChevronDownIcon className='rotate-90' width='18' height='18' />
      }
      renderOnZeroPageCount={null}
    />
  )
}
