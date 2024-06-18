import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function License() {
  const t = useTranslations('HomePage.License')
  return (
    <section className='py-[40px]'>
      <h2 className='text-[24px] font-[700] leading-[44px] text-dark text-center'>
        {t('title')}
      </h2>
      <Image
        className='mx-auto mt-[25px]'
        src='/license.png'
        width={527}
        height={229}
        alt={t('title')}
      />
    </section>
  )
}
