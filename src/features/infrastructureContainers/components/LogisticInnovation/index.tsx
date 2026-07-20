import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { cn } from '@/libs/util'

const GROUP_ICONS = [
  '/infrastructure-containers/shipping.png',
  '/infrastructure-containers/road.png',
  '/infrastructure-containers/store.png',
  '/infrastructure-containers/customer-support.png',
]

const PROCESS_ICONS = [
  [
    '/infrastructure-containers/truck-queue.png',
    '/infrastructure-containers/e-tally.png',
    '/infrastructure-containers/tos.png',
  ],
  ['/infrastructure-containers/tms.png'],
  ['/infrastructure-containers/wms.png'],
  ['/infrastructure-containers/forward-software.png'],
]

const SERVICE_ICONS = [
  [
    '/infrastructure-containers/tracking-online.png',
    '/infrastructure-containers/line-notify.png',
    '/infrastructure-containers/e-payment.png',
  ],
  [],
  [
    '/infrastructure-containers/automation.png',
    '/infrastructure-containers/warehouse.png',
  ],
  [],
]

const SAFETY_ICONS = [
  [
    '/infrastructure-containers/ocr.png',
    '/infrastructure-containers/e-matching.png',
    '/infrastructure-containers/mobile-x-ray-system.png',
  ],
  [],
  [],
  [],
]

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
  icons: string[][]
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
                    <Image
                      src={ItemIcon}
                      width='60'
                      height='60'
                      className={titleClassName}
                      alt=''
                    />
                  )}
                  <p
                    className={cn(
                      'caption-1 whitespace-pre-wrap',
                      titleClassName
                    )}
                  >
                    {item}
                  </p>
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
        <h2 className='headline-2 text-primary-1 text-center !font-[500]'>
          {t('title')}
        </h2>

        <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
          {businessGroups.map((group, index) => {
            const GroupIcon = GROUP_ICONS[index]
            return (
              <div
                key={index}
                className='flex flex-col items-center gap-3 text-center'
              >
                <Image src={GroupIcon} width='80' height='80' alt='' />
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
