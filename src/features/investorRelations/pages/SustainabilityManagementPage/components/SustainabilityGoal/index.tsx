import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import Image from 'next/image'
import { cn } from '@/libs/util'

const DIMENSION_ICONS: string[] = [
  '/social-responsibility/environment-1.png',
  '/social-responsibility/social-1.png',
  '/social-responsibility/economic-governance-1.png',
]

const STRATEGY_ICONS: string[][] = [
  [
    '/social-responsibility/environment-2.png',
    '/social-responsibility/environment-3.png',
  ],
  [
    '/social-responsibility/social-2.png',
    '/social-responsibility/social-3.png',
    '/social-responsibility/social-4.png',
  ],
  [
    '/social-responsibility/economic-governance-2.png',
    '/social-responsibility/economic-governance-3.png',
  ],
]

const SDG_COLUMN_GRID_CLASSES = ['grid-cols-2', 'grid-cols-3', 'grid-cols-2']

const SDG_COLUMNS = [
  [
    '/social-responsibility/3.png',
    '/social-responsibility/6.png',
    '/social-responsibility/7.png',
    '/social-responsibility/13.png',
  ],
  [
    '/social-responsibility/3.png',
    '/social-responsibility/4.png',
    '/social-responsibility/5.png',
    '/social-responsibility/8.png',
    '/social-responsibility/10.png',
    '/social-responsibility/16.png',
  ],
  [
    '/social-responsibility/8.png',
    '/social-responsibility/9.png',
    '/social-responsibility/16.png',
  ],
]

function SectionHeader({ children }: { children: string }) {
  return (
    <div className='bg-blue-400 text-white text-center py-3 rounded-[4px] headline-6 font-semibold'>
      {children}
    </div>
  )
}

export function SustainabilityGoal() {
  const t = useTranslations('SustainabilityManagementPage.sustainabilityGoal')

  const strategyColumns = t.raw('strategyColumns') as {
    countLabel: string
    items: string[]
  }[]
  const successFactors = t.raw('successFactors') as string[]

  return (
    <section className='py-[88px] bg-white'>
      <Animation className='max-w-[950px] w-full mx-auto px-5'>
        <h2 className='headline-2 text-blue-400'>{t('title')}</h2>
        <p className='mt-[16px] body-1 text-black-6'>{t('intro')}</p>

        {/* Strategic direction */}
        <div className='mt-[40px] space-y-6'>
          <SectionHeader>{t('strategicDirectionTitle')}</SectionHeader>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8 md:divide-x divide-black-8'>
            {(
              [
                t('dimensions.environment'),
                t('dimensions.social'),
                t('dimensions.economicGovernance'),
              ] as const
            ).map((label, index) => {
              const DimensionIcon = DIMENSION_ICONS[index]
              return (
                <div
                  key={index}
                  className='flex flex-col items-center gap-3 px-4'
                >
                  <Image src={DimensionIcon} width={80} height={80} alt='' />

                  <p className='body-2 font-semibold text-blue-400 text-center'>
                    {label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Strategies */}
        <div className='mt-[40px] space-y-6'>
          <SectionHeader>{t('strategyTitle')}</SectionHeader>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 md:divide-x divide-black-8'>
            {strategyColumns.map((column, columnIndex) => (
              <div key={columnIndex} className='px-4 text-center'>
                <p className='body-2 text-black-6 mb-4'>{column.countLabel}</p>

                <div className='flex flex-col items-center'>
                  {column.items.map((item, itemIndex) => {
                    const StrategyIcon =
                      STRATEGY_ICONS[columnIndex]?.[itemIndex]
                    return (
                      <div
                        key={itemIndex}
                        className='flex flex-col items-center w-full'
                      >
                        <div className='relative my-[10px]'>
                          <div className='h-6 border-l border-dotted border-secondary' />
                          <div className='absolute bg-secondary w-[6px] h-[6px] rounded-full left-1/2 -translate-x-1/2' />
                        </div>
                        {StrategyIcon && (
                          <Image
                            src={StrategyIcon}
                            width={60}
                            height={60}
                            alt=''
                          />
                        )}
                        <p className='mt-2 body-2 text-black-6'>{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key success factors */}
        <div className='mt-[40px] space-y-6'>
          <SectionHeader>{t('successFactorsTitle')}</SectionHeader>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 md:divide-x divide-black-8'>
            {successFactors.map((factor, index) => (
              <p
                key={index}
                className='px-4 text-center body-2 font-semibold text-blue-400'
              >
                {factor}
              </p>
            ))}
          </div>
        </div>

        {/* SDGs */}
        <div className='mt-[40px] space-y-6'>
          <SectionHeader>{t('sdgTitle')}</SectionHeader>

          <div className='flex flex-col gap-y-8 md:grid md:grid-cols-3 md:gap-y-0 md:divide-x divide-black-8 place-items-center'>
            {SDG_COLUMNS.map((column, columnIndex) => (
              <div className='w-full grid place-items-center' key={columnIndex}>
                <div
                  className={cn(
                    'grid gap-2 place-content-center w-fit',
                    SDG_COLUMN_GRID_CLASSES[columnIndex]
                  )}
                >
                  {column.map((src, index) => (
                    <Image
                      className={cn({
                        'place-self-center col-span-2':
                          columnIndex === 2 && column.length - 1 === index,
                      })}
                      key={index}
                      src={src}
                      width={60}
                      height={60}
                      alt=''
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Animation>
    </section>
  )
}
