import { useTranslations } from 'next-intl'

export function Vision() {
  const t = useTranslations('VisionMissionValuesPage.Vision')

  return (
    <section className='flex flex-wrap justify-center items-center gap-[121px] py-[91px] bg-dark-60'>
      <div className='w-[588px] h-[353px] relative'>
        <div className='w-[558px] h-[323px] bg-dark-100 absolute bottom-0 left-0' />
        <div className='w-[558px] h-[323px] bg-dark-80 absolute top-0 right-0' />
      </div>
      <div className='max-w-[456px]'>
        <h2 className='font-[700] text-[36px] leading-[44px]'>{t('title')}</h2>
        <p className='mt-[23px] font-[700] text-[24px] leading-[44px]'>
          {t('description')}
        </p>
      </div>
    </section>
  )
}
