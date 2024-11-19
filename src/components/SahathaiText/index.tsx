import { useTranslations } from 'next-intl'

import { cn } from '@/libs/util'
import { SahathaiTextProps } from './interface'

export function SahathaiText({ className, h }: SahathaiTextProps) {
  const common = useTranslations('common')

  return (
    <h1
      className={cn('text-primary', className, {
        'headline-1': h === 'h1',
        'headline-2': h === 'h2',
        'headline-3': h === 'h3',
      })}
    >
      {common('sahathai')}
      &nbsp;<span className='text-secondary-1'>{common('terminal')}</span>
    </h1>
  )
}
