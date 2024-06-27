import { useTranslations } from 'next-intl'

export function AboutUsVideoPage() {
  const t = useTranslations('AboutUsVideoPage')

  return (
    <main className='max-w-[900px] mx-auto py-[80px]'>
      <h1 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h1>
      <p className='mt-[24px] text-[18px] leading-[28px] text-center'>
        {t('description')}
      </p>
      <div className='mt-[48px] w-full'>
        <div className='relative pt-[64.44%] w-full'>
          <div className='absolute inset-0 w-full h-full bg-dark' />
        </div>
      </div>
    </main>
  )
}
