import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Banner() {
  const t = useTranslations('CommitmentSuccessPage')

  return (
    <section className='relative'>
      <Image
        className='w-full h-[555px] object-cover'
        src='/about/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />

      <div className='absolute top-0 h-full w-full bg-[linear-gradient(62.08deg,rgba(0,0,0,0.8)_54.29%,rgba(0,0,0,0)_77.94%)]' />

      <section className='max-w-[1440px] mx-auto px-[102px] pb-[52px] absolute bottom-0 left-0'>
        <h1 className='font-[600] text-[64px] leading-[96px] text-white'>
          {t('title')}
        </h1>
        <p className='mt-[24px] max-w-[1166px] caption text-black-20'>
          {t('description')}
        </p>
      </section>
    </section>
  )
}
