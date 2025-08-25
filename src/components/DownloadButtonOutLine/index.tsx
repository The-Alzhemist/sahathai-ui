import { useTranslations } from 'next-intl'

import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { cn } from '@/libs/util'
import { DownloadButtonOutLineProps } from './interface'

export function DownloadButtonOutline({ className, href }: DownloadButtonOutLineProps) {
  const common = useTranslations('common')

  return (
    <a
      className={cn(
        'w-fit block px-[19px] py-[8px] border-2 border-white rounded-[10px] hover:bg-white hover:scale-105 transition-all group',
        className
      )}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <button className='medium flex items-center gap-[4px] text-white !text-sm group-hover:text-darkGray'>
        <DownloadIcon
          width='20'
          height='20'
          className='text-white group-hover:text-darkGray'
        />
        {common('download')}
      </button>
    </a>
  )
}
