import { useTranslations } from 'next-intl'

import { cn } from '@/libs/util'
import { SahathaiTextProps } from './interface'

export function SahathaiText({ className, h }: SahathaiTextProps) {
  const common = useTranslations('common')

  return (
    <h1
      className={cn('text-blue-300', className, {
        'headline-2': h === 'h2',
      })}
    >
      {common('sahathai')}
      &nbsp;<span className='text-red-300'>{common('terminal')}</span>
    </h1>
  )
}
