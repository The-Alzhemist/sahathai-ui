import { useTranslations } from 'next-intl'

export function Ocr() {
  const t = useTranslations('HarborOperatingSystemPage.Ocr')

  return (
    <section className='mt-[191px] bg-dark-60 py-[80px]'>
      <section className='max-w-[900px] w-full mx-auto'>
        <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('title')}
        </h2>
        <p className='mt-[24px] text-[18px] leading-[28px] k2d text-center'>
          {t('description')}
        </p>
        <div className='mt-[48px] max-w-[900px] h-[580px] w-full bg-dark' />
      </section>
    </section>
  )
}
