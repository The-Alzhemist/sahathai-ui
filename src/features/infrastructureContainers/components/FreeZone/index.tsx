import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import Image from 'next/image'
import { Card } from './Card'
import { PathIcon } from '@/components/icons/PathIcon'
import { SparklesIcon } from '@/components/icons/SparklesIcon'
import { ClockFourIcon } from '@/components/icons/ClockFourIcon'
import { RowsIcon } from '@/components/icons/RowsIcon'

export function FreeZone() {
  const t = useTranslations('InfrastructureContainersPage.FreeZone')

  return (
    <Animation className='mt-[35px] p-[24px] rounded-[8px] shadow-2 max-w-[896px] w-full mx-auto'>
      <h2 className='headline-3 text-blue-300 text-center underline'>
        {t('title')}
      </h2>
      <p className='mt-[16px] text-black-60 body-1 text-center max-w-[600px] w-full mx-auto'>
        {t('description')}
      </p>
      <Image
        className='rounded-[8px] mt-[39px]'
        src='/infrastructure-containers/free-zone.png'
        width={848}
        height={348}
        alt=''
      />
      <section className='flex flex-wrap gap-[24px] justify-center mt-[39px]'>
        <Card description={t('zone')}>
          <PathIcon className='text-blue-300' width='48' height='48' />
        </Card>
        <Card description={t('loading')}>
          <SparklesIcon className='text-blue-300' width='48' height='48' />
        </Card>
        <Card description={t('storage')}>
          <ClockFourIcon className='text-blue-300' width='48' height='48' />
        </Card>
        <Card description={t('containerLoad')}>
          <RowsIcon className='text-blue-300' width='48' height='48' />
        </Card>
      </section>
    </Animation>
  )
}
