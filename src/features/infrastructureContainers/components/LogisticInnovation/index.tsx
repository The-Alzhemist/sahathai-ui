import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { ShippingIcon } from '@/components/icons/ShippingIcon'
import { RoadIcon } from '@/components/icons/RoadIcon'
import { StoreIcon } from '@/components/icons/StoreIcon'
import { CustomerSupportIcon } from '@/components/icons/CustomerSupportIcon'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { ListIcon } from '@/components/icons/ListIcon'
import { PathIcon } from '@/components/icons/PathIcon'
import { FileTextIcon } from '@/components/icons/FileTextIcon'
import { DeviceMobileIcon } from '@/components/icons/DeviceMobileIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { CheckCircle2Icon } from '@/components/icons/CheckCircle2Icon'
import { SparklesIcon } from '@/components/icons/SparklesIcon'
import { EyeIcon } from '@/components/icons/EyeIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'

const GROUP_ICONS = [ShippingIcon, RoadIcon, StoreIcon, CustomerSupportIcon]

const PROCESS_ICONS = [
  [CalendarIcon, ListIcon, PathIcon],
  [RoadIcon],
  [StoreIcon],
  [FileTextIcon],
]

const SERVICE_ICONS = [
  [DeviceMobileIcon, EnvelopeIcon, CheckCircle2Icon],
  [],
  [SparklesIcon, StoreIcon],
  [],
]

const SAFETY_ICONS = [[EyeIcon, CheckCircle2Icon, WarningIcon], [], [], []]

type IconComponent = React.ComponentType<{
  width?: string
  height?: string
  className?: string
}>

type Band = {
  title: string
  subtitle: string
  columns: string[][]
}

function BandSection({
  band,
  icons,
  bgClassName,
  titleClassName,
}: {
  band: Band
  icons: IconComponent[][]
  bgClassName: string
  titleClassName: string
}) {
  return (
    <div className={`rounded-[8px] px-4 md:px-8 py-6 ${bgClassName}`}>
      <div className='text-center mb-6'>
        <p className={`headline-6 font-semibold ${titleClassName}`}>
          {band.title}
        </p>
        <p className={`body-2 ${titleClassName}`}>{band.subtitle}</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {band.columns.map((column, columnIndex) => (
          <div key={columnIndex} className='flex flex-col items-center gap-4'>
            {column.map((item, itemIndex) => {
              const ItemIcon = icons[columnIndex]?.[itemIndex]
              return (
                <div
                  key={itemIndex}
                  className='flex flex-col items-center gap-2 text-center'
                >
                  {ItemIcon && (
                    <ItemIcon
                      width='36'
                      height='36'
                      className={titleClassName}
                    />
                  )}
                  <p className={`caption-1 ${titleClassName}`}>{item}</p>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export function LogisticInnovation() {
  const t = useTranslations('InfrastructureContainersPage.LogisticInnovation')

  const businessGroups = t.raw('businessGroups') as string[]
  const process = t.raw('process') as Band
  const service = t.raw('service') as Band
  const safety = t.raw('safety') as Band

  return (
    <Animation className='mt-[100px] max-w-[1080px] w-full mx-auto px-5'>
      <div
        id='logistic-innovation'
        className='mb-10 shadow-6 bg-white p-[20px] rounded-[14px]'
      >
        <h2 className='headline-2 text-primary-1 text-center'>{t('title')}</h2>

        <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
          {businessGroups.map((group, index) => {
            const GroupIcon = GROUP_ICONS[index]
            return (
              <div
                key={index}
                className='flex flex-col items-center gap-3 text-center'
              >
                <GroupIcon width='44' height='44' />
                <p className='body-2 font-semibold'>{group}</p>
              </div>
            )
          })}
        </div>

        <div className='mt-10 space-y-6'>
          <BandSection
            band={process}
            icons={PROCESS_ICONS}
            bgClassName='bg-[#FBEAE8]'
            titleClassName='text-red-400'
          />
          <BandSection
            band={service}
            icons={SERVICE_ICONS}
            bgClassName='bg-blue-600'
            titleClassName='text-blue-400'
          />
          <BandSection
            band={safety}
            icons={SAFETY_ICONS}
            bgClassName='bg-white-1'
            titleClassName='text-black-6'
          />
        </div>
      </div>
    </Animation>
  )
}
