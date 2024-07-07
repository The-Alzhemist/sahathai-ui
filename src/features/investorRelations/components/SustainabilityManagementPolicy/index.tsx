import { useTranslations } from 'next-intl'

import { LeavesIcon } from '@/components/icons/LeavesIcon'
import { cn } from '@/libs/util'
import { Animation } from '@/components/Animation'
import { SustainabilityManagementPolicyProps } from './interface'

export function SustainabilityManagementPolicy({
  className,
}: SustainabilityManagementPolicyProps) {
  const t = useTranslations(
    'SustainabilityManagementPage.SustainabilityManagementPolicy'
  )
  const common = useTranslations('common')
  return (
    <Animation
      className={cn(
        'max-w-[1140px] mx-auto p-[32px] rounded-[8px] border-2 border-green-2 bg-green-1 space-y-[16px]',
        className
      )}
    >
      <div className='flex items-center gap-[8px] text-green'>
        <LeavesIcon width='40' height='40' />
        <h2 className='font-[600] text-[30px] leading-[36px]'>{t('title')}</h2>
      </div>
      <p className='body-1'>{t('description')}</p>
      <a
        href=''
        className='button bg-green rounded-[6px] py-[10px] px-[25px] text-white block w-fit'
      >
        {common('download')}
      </a>
    </Animation>
  )
}
