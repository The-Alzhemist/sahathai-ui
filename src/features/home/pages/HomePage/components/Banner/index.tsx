import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Banner() {
  const t = useTranslations('HomePage.Banner')

  return (
    <section className='relative h-[392px] flex flex-col justify-end'>
      <Image
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/home/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'
      />

      <section className='max-w-[1440px] w-full mx-auto mb-[130px] pl-[106px] z-[1] text-white'>
        <h1>
          <span className='font-[600] text-[64px] leading-[96px] text-blue-300'>
            {t('title')}
          </span>
          <span className='ml-[16px] font-[600] text-[64px] leading-[96px] text-red-400'>
            {t('title2')}
          </span>
          <br />
          <span className='font-[400] text-[36px] leading-[54px]'>
            {t('subTitle')}
          </span>
        </h1>
      </section>
    </section>
  )
}
