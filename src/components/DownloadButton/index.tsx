import { useTranslations } from 'next-intl'

import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { cn } from '@/libs/util'
import { DownloadButtonProps } from './interface'

export function DownloadButton({ className, href }: DownloadButtonProps) {
  const common = useTranslations('common')

  return (
    <a
      className={cn(
        'w-fit block px-[19px] py-[4px] border border-blue-300 rounded-[10px] bg-blue-50 hover:scale-105 transition-all',
        className
      )}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <button className='medium flex items-center gap-[4px] text-blue-300 !text-sm '>
        <DownloadIcon width='24' height='24' className='text-blue-300' />
        {common('download')}
      </button>
    </a>
  )
}
