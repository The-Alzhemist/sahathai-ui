import { useTranslations } from 'next-intl'

import { SearchIcon } from '@/components/icons/SearchIcon'
import { cn } from '@/libs/util'
import { SearchInputProps } from './interface'

export function SearchInput({ className }: SearchInputProps) {
  const t = useTranslations('Header')

  return (
    <label
      className={cn(
        'grid grid-cols-[15px_1fr] items-center gap-[14px] bg-primary text-white px-[16px] py-[6px] rounded-full',
        className
      )}
    >
      <SearchIcon width='15' height='15' />
      <input
        className='bg-transparent placeholder:text-white focus:outline-none w-full'
        placeholder={t('search')}
      />
    </label>
  )
}
