import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { StrapiBlocks } from '@/components/StrapiBlocks'
import { getQualityAchievement } from '@/libs/strapi/qualityAchievement'
import { getStrapiImageUrl } from '@/libs/util'
import { HomePageProps } from '@/features/home/pages/HomePage/withHomePage'
import { LicenseCard } from '../LicenseCard'

const CARD_HEIGHT = 88

export async function License({ params }: HomePageProps) {
  const t = await getTranslations('HomePage.License')

  const { data: qualityAchievement } = await getQualityAchievement(
    params.locale
  )

  return (
    <section className='relative container min-h-[550px] flex flex-col justify-center items-center py-10 md:py-0'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/home/license-bg.webp'
          alt='lisense background'
          fill
          className='object-cover'
          priority
        />
      </div>

      <h2 className='headline-2 text-navy text-center mb-[10px]'>
        {t('title')}
      </h2>
      <StrapiBlocks
        className='text-black-6 font-light text-sm text-center mb-[45px] max-w-[896px] mx-auto space-y-2'
        body={qualityAchievement.description}
      />
      <Animation className='flex flex-wrap justify-center gap-[15px]'>
        {qualityAchievement.items.map(item => {
          const width = item.image
            ? (item.image.width / item.image.height) * CARD_HEIGHT
            : CARD_HEIGHT

          return (
            <LicenseCard
              key={item.id}
              imageUrl={item.image ? getStrapiImageUrl(item.image.url) : ''}
              width={width}
              height={CARD_HEIGHT}
              content={item.caption}
            />
          )
        })}
      </Animation>
    </section>
  )
}
