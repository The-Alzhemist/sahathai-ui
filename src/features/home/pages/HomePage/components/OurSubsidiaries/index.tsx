import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function OurSubsidiaries() {
  const t = useTranslations('HomePage.OurSubsidiaries')
  return (
    <section className='mt-[123px] max-w-[898px] mx-auto'>
      <h2 className='text-[34px] leading-[36px] text-blue-400 text-center'>
        {t('title')}
      </h2>
      <p className='body-1 mt-[8px] text-center'>{t('description')}</p>
      <div className='flex flex-wrap justify-center gap-[44px] mt-[64px]'>
        <Image src='/home/bcds.png' width={219.1} height={72} alt='' />
        <Image src='/home/bbt.png' width={121.5} height={72} alt='' />
      </div>
      <div className='flex flex-wrap justify-center gap-[131px] mt-[48px]'>
        <Image src='/home/bts.png' width={113.66} height={72} alt='' />
        <Image src='/home/bbs.png' width={95.82} height={72} alt='' />
        <Image src='/home/blp.png' width={107.35} height={72} alt='' />
      </div>
    </section>
  )
}
