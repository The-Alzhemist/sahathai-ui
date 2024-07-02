import { useTranslations } from 'next-intl'
import { CoreValuesItem } from '../CoreValuesItem'
import { Line } from '@/components/Line'

export function CoreValues() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.CoreValues')

  return (
    <section className='mt-[162px] max-w-[959px] w-full mx-auto'>
      <div className='max-w-[896px] mx-auto w-full'>
        <h2 className='headline-1 text-blue-400'>{t('title')}</h2>
        <Line className='mt-[14px]' />
      </div>
      <div className='mt-[43px] p-[10px] flex justify-center flex-wrap gap-[16px] max-w-[1252px] mx-auto relative'>
        <CoreValuesItem
          title={t('serviceMind.title')}
          description={t('serviceMind.description')}
        />
        <CoreValuesItem
          title={t('openness.title')}
          description={t('openness.description')}
        />
        <CoreValuesItem
          title={t('integrity.title')}
          description={t('integrity.description')}
        />
        <CoreValuesItem
          title={t('innovation.title')}
          description={t('innovation.description')}
        />
      </div>
    </section>
  )
}
