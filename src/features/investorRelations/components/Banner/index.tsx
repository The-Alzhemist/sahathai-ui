import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Banner() {
  const t = useTranslations('investorRelations')

  return (
    <section className='relative h-[424px] flex flex-col justify-end'>
      <Image
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/investor-relations/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />

      <section className='max-w-[1440px] w-full mx-auto px-[139px] pb-[175px] z-[1]'>
        <h1 className='headline-1 text-white'>{t('title')}</h1>
      </section>
    </section>
  )
}
