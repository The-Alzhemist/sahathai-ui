import { useTranslations } from 'next-intl'

import { Line } from '@/components/Line'
import { CoreValuesItem } from '../CoreValuesItem'
import { CustomerSupportIcon } from '@/components/icons/CustomerSupportIcon'
import { KindnessIcon } from '@/components/icons/KindnessIcon'
import { HonestIcon } from '@/components/icons/HonestIcon'
import { InnovationIcon } from '@/components/icons/InnovationIcon'

export function CoreValues() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.CoreValues')

  return (
    <section className='mt-[100px] max-w-[1064px] w-full mx-auto px-3'>
      <h2 className='prompt text-[40px] font-[500] leading-[60.48px] text-navy text-center md:text-left'>
        {t('title')}
      </h2>
        <div className='flex justify-center md:justify-start'>
            <Line className='mt-[14px]' />
        </div>


      <div className='mt-[50px] flex justify-center flex-wrap gap-[24px]'>
        <CoreValuesItem
          Icon={CustomerSupportIcon}
          title={t('serviceMind.title')}
          content={t('serviceMind.content')}
        />
        <CoreValuesItem
          Icon={KindnessIcon}
          title={t('openness.title')}
          content={t('openness.content')}
        />
        <CoreValuesItem
          Icon={HonestIcon}
          title={t('integrity.title')}
          content={t('integrity.content')}
        />
        <CoreValuesItem
          Icon={InnovationIcon}
          title={t('innovation.title')}
          content={t('innovation.content')}
        />
      </div>
    </section>
  )
}
