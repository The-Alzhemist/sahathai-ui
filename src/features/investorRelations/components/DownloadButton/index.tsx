import { useTranslations } from 'next-intl'

import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { cn } from '@/libs/util'
import { DownloadButtonProps } from './interface'

export function DownloadButton({ className }: DownloadButtonProps) {
  const common = useTranslations('common')

  return (
    <a
      className={cn(
        'w-fit block px-[19px] py-[4px] border border-dark-80 rounded-[50px]',
        className
      )}
    >
      <button className='font-[500] leading-[24px] flex items-center gap-[4px]'>
        <DownloadIcon width='24' height='24' />
        {common('download')}
      </button>
    </a>
  )
}
