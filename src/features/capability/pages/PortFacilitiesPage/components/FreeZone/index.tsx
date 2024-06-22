import { useTranslations } from 'next-intl'
import { FreeZoneCard } from '../FreeZoneCard'

export function FreeZone() {
  const t = useTranslations('PortFacilitiesPage.FreeZone')

  return (
    <section className='mt-[198px] max-w-[1440px] w-full px-[80px]'>
      <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h2>
      <p className='mt-[32px] text-[18px] leading-[28px] sarabun text-center'>
        {t('description')}
      </p>
      <section className='mt-[48px] flex items-center flex-wrap gap-[80px]'>
        <div className='bg-dark-80 max-w-[600px] w-full h-[580px]' />
        <div className='flex flex-wrap max-w-[600px] w-full gap-x-[24px] gap-y-[64px] py-[32px]'>
          <FreeZoneCard description={t('zone')} />
          <FreeZoneCard description={t('loading')} />
          <FreeZoneCard description={t('storage')} />
          <FreeZoneCard description={t('containerLoad')} />
        </div>
      </section>
    </section>
  )
}
