import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { LeavesIcon } from '@/components/icons/LeavesIcon'
import { GlobeIcon } from '@/components/icons/GlobeIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'
import { PeopleIcon } from '@/components/icons/PeopleIcon'
import { KindnessIcon } from '@/components/icons/KindnessIcon'
import { ShippingIcon } from '@/components/icons/ShippingIcon'
import { ScaleIcon } from '@/components/icons/ScaleIcon'
import { ChartIcon } from '@/components/icons/ChartIcon'

const DIMENSION_ICONS = [LeavesIcon, UsersIcon, ChartIcon]

const STRATEGY_ICONS = [
  [LeavesIcon, GlobeIcon],
  [UsersIcon, PeopleIcon, KindnessIcon],
  [ShippingIcon, ScaleIcon],
]

const SDG_COLORS: Record<number, string> = {
  4: '#C5192D',
  5: '#FF3A21',
  6: '#26BDE2',
  7: '#FCC30B',
  8: '#A21942',
  9: '#FD6925',
  10: '#DD1367',
  13: '#3F7E44',
  16: '#00689D',
}

const SDG_COLUMNS = [
  [9, 6, 13, 7],
  [9, 4, 5, 8, 10, 16],
  [8, 9, 16],
]

function SectionHeader({ children }: { children: string }) {
  return (
    <div className='bg-blue-400 text-white text-center py-3 rounded-[4px] headline-6 font-semibold'>
      {children}
    </div>
  )
}

function SdgBadge({ number }: { number: number }) {
  return (
    <div
      className='w-[52px] h-[52px] rounded-[4px] flex flex-col items-center justify-center text-white shrink-0'
      style={{ backgroundColor: SDG_COLORS[number] ?? '#999999' }}
    >
      <span className='text-[10px] font-bold leading-none'>{number}</span>
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
                  <DimensionIcon
                    width='48'
                    height='48'
                    className='text-red-400'
                  />
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
                          <StrategyIcon
                            width='36'
                            height='36'
                            className='text-red-400'
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

          <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 md:divide-x divide-black-8'>
            {SDG_COLUMNS.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className='flex flex-wrap justify-center content-start gap-2 px-4'
              >
                {column.map(number => (
                  <SdgBadge key={number} number={number} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Animation>
    </section>
  )
}
