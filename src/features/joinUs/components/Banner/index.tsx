import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Banner() {
  const t = useTranslations('JoinUsPage.Banner')

  return (
    <section className='relative h-[424px] flex flex-col justify-end'>
      <Image
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/join-us/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />

      <section className='max-w-[924px] mx-auto mb-[59px] z-[1] p-[14px] text-white'>
        <h1 className='font-[700] text-[36px] leading-[44px] text-center whitespace-pre-wrap'>
          {t('title')}
        </h1>
        <p className='mt-[24px] text-center body-1 whitespace-pre-wrap'>
          {t('description')}
        </p>
      </section>
    </section>
  )
}
