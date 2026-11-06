import { useTranslations } from 'next-intl'

import { Line } from '@/components/Line'
import { CoreValuesItem } from '../CoreValuesItem'
import { CustomerSupportIcon } from '@/components/icons/CustomerSupportIcon'
import { KindnessIcon } from '@/components/icons/KindnessIcon'
import { HonestIcon } from '@/components/icons/HonestIcon'
import { InnovationIcon } from '@/components/icons/InnovationIcon'
import { CoreValue, CoreValueIcon } from '@/types/VisionMission'

const CORE_VALUE_ICONS: Record<CoreValueIcon, typeof CustomerSupportIcon> = {
  service: CustomerSupportIcon,
  heart: KindnessIcon,
  integrity: HonestIcon,
  innovation: InnovationIcon,
}

export function CoreValues({ coreValues }: { coreValues: CoreValue[] }) {
  const t = useTranslations('AboutUsPage.VisionMissionValues.CoreValues')

  if (!coreValues.length) return null

  return (
    <section className='mt-[100px] max-w-[1064px] w-full mx-auto px-3'>
      <div className='flex flex-col  items-center'>
        <h2 className='prompt text-[40px] font-[500] leading-[60.48px]  text-navy text-center md:text-left'>
          {t('title')}
        </h2>
        <div className='flex justify-center md:justify-start'>
          <Line className='mt-[14px]' />
        </div>
      </div>

      <div className='mt-[50px] flex justify-center flex-wrap gap-[24px]'>
        {coreValues.map(value => (
          <CoreValuesItem
            key={value.id}
            Icon={CORE_VALUE_ICONS[value.icon] ?? CustomerSupportIcon}
            title={value.title}
            content={value.description}
          />
        ))}
      </div>
    </section>
  )
}
