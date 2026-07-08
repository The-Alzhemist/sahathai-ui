import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'

export function Banner() {
  const t = useTranslations('JoinUsPage.Banner')

  return (
    <section className='relative h-[600px] md:h-[570px] flex flex-col justify-end -mt-[60px] md:rounded-b-[60px] overflow-hidden'>
      <Image
        className='absolute inset-0 w-full h-full object-cover object-[center_30%]'
        src='/join-us/banner.webp'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />

      <Animation className='max-w-[896px] w-full mx-auto mb-[55px] z-[1] px-5 pt-[50px] md:p-[14px] text-white'>
        <h1 className='font-[700] text-[22px] md:text-[36px] leading-[44px] text-center whitespace-pre-wrap'>
          {t('title')}
        </h1>
        <p className='mt-[24px] text-center body-1 whitespace-pre-wrap'>
          {t('description')}
        </p>
      </Animation>
      <div
        className='w-full h-full absolute top-0 left-0'
        style={{
          background:
            'linear-gradient(180deg, rgba(1, 90, 153, 0) 29.3%, #003C66 94.56%)',
        }}
      />
    </section>
  )
}
