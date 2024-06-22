import { useTranslations } from 'next-intl'

export function CustomsOfficePortArea() {
  const t = useTranslations('PortFacilitiesPage.CustomsOfficePortArea')

  return (
    <section className='mt-[228px] max-w-[1440px] w-full px-[80px] flex items-center flex-wrap gap-[80px]'>
      <section className='flex flex-wrap max-w-[600px] w-full py-[32px]'>
        <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('title')}
        </h2>
        <p className='mt-[8px] text-[18px] leading-[28px] sarabun whitespace-pre-wrap'>
          {t('description')}
        </p>
        <p className='mt-[40px] text-[18px] leading-[28px] sarabun whitespace-pre-wrap'>
          {t('description2')}
        </p>
      </section>
      <div className='bg-dark-80 max-w-[600px] w-full h-[420px]' />
    </section>
  )
}
