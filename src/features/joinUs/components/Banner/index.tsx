import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'

export function Banner() {
  const t = useTranslations('JoinUsPage.Banner')

  return (
    <section className='relative h-[600px] md:h-[424px] flex flex-col justify-end'>
      <Image
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/join-us/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />

      <Animation className='max-w-[896px] w-full mx-auto mb-[85px] z-[1] px-5 pt-1ุ6 md:p-[14px] text-white'>
        <h1 className='font-[700] text-[36px] leading-[44px] text-center whitespace-pre-wrap'>
          {t('title')}
        </h1>
        <p className='mt-[24px] text-center body-1 whitespace-pre-wrap'>
          {t('description')}
        </p>
      </Animation>
    </section>
  )
}
