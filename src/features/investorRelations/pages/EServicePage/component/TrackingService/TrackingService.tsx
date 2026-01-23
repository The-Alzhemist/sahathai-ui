import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'

import { TrackingCard } from '@/features/investorRelations/pages/EServicePage/component/TrackingCard'
import { TrackingServiceProps } from '@/features/investorRelations/pages/EServicePage/component/TrackingService/interface'

export function TrackingService({ data }: TrackingServiceProps) {
  return (
    <section className='relative py-[50px] mt-[-40px]'>
      <div className='absolute inset-x-0 bottom-0 h-[420px] md:h-full -z-10 pointer-events-none overflow-hidden'>
        <Image
          src='/services/new/services-bg.webp'
          alt='license background'
          fill
          className='object-cover '
          priority
        />
      </div>

      <Animation className='max-w-[1100px] w-full mt-[90px] mx-auto px-5'>
        <section className='flex justify-center flex-wrap mt-[80px]  gap-6 mb-[200px]'>
          {data.story.content.body.length > 0 && (
            <>
              {data.story.content.body.map((item: any, index: number) => {
                return (
                  <TrackingCard
                    key={'tracking-list-item' + index}
                    title={{
                      textTH: item.text,
                      textEN: item.text_en,
                    }}
                    imageUrl={item.image.filename}
                    link={item.externalLink}
                  />
                )
              })}
            </>
          )}
        </section>
      </Animation>
    </section>
  )
}
