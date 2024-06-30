import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Banner() {
  const t = useTranslations('NewsPage')

  return (
    <section className='relative h-[429px] flex flex-col justify-end'>
      <Image
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/news/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />

      <div className='absolute top-0 h-full w-full bg-[linear-gradient(75.3deg,rgba(0,0,0,0.8)_39.03%,rgba(0,0,0,0)_101.99%)]' />

      <section className='max-w-[1440px] w-full mx-auto px-[102px] pb-[93px] z-[1]'>
        <h1 className='headline-1 text-white'>{t('title')}</h1>
      </section>
    </section>
  )
}
