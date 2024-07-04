import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { OurSubsidiariesCard } from '../OurSubsidiariesCard'

export function OurSubsidiaries() {
  const t = useTranslations('HomePage.OurSubsidiaries')
  return (
    <section className='mt-[123px] max-w-[898px] mx-auto'>
      <h2 className='text-[34px] leading-[36px] text-blue-400 text-center'>
        {t('title')}
      </h2>
      <p className='body-1 mt-[8px] text-center'>{t('description')}</p>
      <Animation className='flex flex-wrap justify-center gap-[24px] mt-[64px] p-[8px]'>
        <OurSubsidiariesCard>
          <Image
            className='w-[107.78px] h-[53.33px]'
            src='/home/bts.png'
            width={0}
            height={0}
            alt=''
            sizes='100vw'
          />
        </OurSubsidiariesCard>
        <OurSubsidiariesCard>
          <Image
            className='w-[104.44px] h-[57.78px]'
            src='/home/bcds.png'
            width={0}
            height={0}
            alt=''
            sizes='100vw'
          />
        </OurSubsidiariesCard>
        <OurSubsidiariesCard>
          <Image
            className='w-[101.11px] h-[60px]'
            src='/home/bbt.png'
            width={0}
            height={0}
            alt=''
            sizes='100vw'
          />
        </OurSubsidiariesCard>
        <OurSubsidiariesCard>
          <Image
            className='w-[101.11px] h-[62.22px]'
            src='/home/bbs.png'
            width={0}
            height={0}
            alt=''
            sizes='100vw'
          />
        </OurSubsidiariesCard>
        <OurSubsidiariesCard>
          <Image
            className='w-[90px] h-[60px]'
            src='/home/blp.png'
            width={0}
            height={0}
            alt=''
            sizes='100vw'
          />
        </OurSubsidiariesCard>
      </Animation>
    </section>
  )
}
