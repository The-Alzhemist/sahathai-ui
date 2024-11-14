import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { OurSubsidiariesCard } from '../OurSubsidiariesCard'

export function OurSubsidiaries() {
  const t = useTranslations('HomePage.OurSubsidiaries')

  return (
    <section className='mt-[128px] bg-[url("/home/our-subsidiary.jpeg")] bg-cover bg-center'>
      <section className='bg-modellBgDark/60 text-white pt-[66px] pb-[94px]'>
        <h2 className='headline-2 text-center !font-[600]'>{t('title')}</h2>
        <p className='body-2 mt-[10px] text-center !font-[700]'>
          {t('description')}
        </p>
        <Animation className='flex flex-wrap justify-center gap-[15px] mt-[40px]'>
          <OurSubsidiariesCard
            imageUrl='/home/bts.png'
            width={107.11}
            height={53.33}
          />
          <OurSubsidiariesCard
            imageUrl='/home/bcds.png'
            width={104.44}
            height={57.78}
          />
          <OurSubsidiariesCard
            imageUrl='/home/bbt.png'
            width={101.11}
            height={60}
          />
          <OurSubsidiariesCard
            imageUrl='/home/bbs.png'
            width={101.11}
            height={62.22}
          />
          <OurSubsidiariesCard
            imageUrl='/home/blp.png'
            width={90}
            height={60}
          />
        </Animation>
      </section>
    </section>
  )
}
