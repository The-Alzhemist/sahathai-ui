import { useTranslations } from 'next-intl'
import { CoreValuesItem } from '../CoreValuesItem'

export function CoreValues() {
  const t = useTranslations('VisionMissionValuesPage.coreValues')

  return (
    <section className='mt-[84px] relative h-[592px]'>
      <div className='h-[371px] w-full bg-white-1 absolute bottom-0' />
      <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h2>
      <div className='mt-[55px] p-[10px] flex justify-center flex-wrap gap-[16px] max-w-[1252px] mx-auto relative'>
        <CoreValuesItem title={t('serviceMind')} />
        <CoreValuesItem title={t('transparency')} />
        <CoreValuesItem title={t('honesty')} />
        <CoreValuesItem title={t('innovation')} />
      </div>
    </section>
  )
}
