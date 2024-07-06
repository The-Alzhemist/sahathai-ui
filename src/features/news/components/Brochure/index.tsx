import { useTranslations } from 'next-intl'

import { cn } from '@/libs/util'
import { FileTextIcon } from '@/components/icons/FileTextIcon'
import { Animation } from '@/components/Animation'
import { BrochureProps } from './interface'

export function Brochure({ className }: BrochureProps) {
  const t = useTranslations('NewsPage.Brochure')
  const common = useTranslations('common')
  return (
    <Animation
      className={cn(
        'max-w-[896px] mx-auto p-[32px] rounded-[8px] border-2 border-blue-100 bg-blue-50 space-y-[16px]',
        className
      )}
    >
      <div className='flex items-center gap-[8px] text-blue-400'>
        <FileTextIcon width='40' height='40' />
        <h2 className='headline-3'>{t('title')}</h2>
      </div>
      <p className='body-1'>{t('description')}</p>
      <a
        href=''
        className='button bg-blue-400 rounded-[6px] py-[10px] px-[25px] text-white block w-fit'
      >
        {common('download')}
      </a>
    </Animation>
  )
}
