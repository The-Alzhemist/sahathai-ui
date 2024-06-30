import { useTranslations } from 'next-intl'

import { LeavesIcon } from '@/components/icons/LeavesIcon'
import { BrochureProps } from './interface'
import { cn } from '@/libs/util'
import { FileTextIcon } from '@/components/icons/FileTextIcon'

export function Brochure({ className }: BrochureProps) {
  const t = useTranslations('NewsPage.Brochure')
  const common = useTranslations('common')
  return (
    <section
      className={cn(
        'max-w-[896px] mx-auto p-[32px] rounded-[8px] border-2 border-blue-700 bg-blue-600 space-y-[16px]',
        className
      )}
    >
      <div className='flex items-center gap-[8px] text-blue'>
        <FileTextIcon width='40' height='40' />
        <h2 className='font-[600] text-[30px] leading-[36px]'>{t('title')}</h2>
      </div>
      <p className='body-1'>{t('description')}</p>
      <a
        href=''
        className='button bg-blue rounded-[6px] py-[10px] px-[25px] text-white block w-fit'
      >
        {common('download')}
      </a>
    </section>
  )
}
