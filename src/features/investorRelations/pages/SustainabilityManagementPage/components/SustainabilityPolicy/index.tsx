import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'

const COLUMN_ICONS = [
  '/social-responsibility/environment-1.png',
  '/social-responsibility/social-1.png',
  '/social-responsibility/economic-governance-1.png',
]

export function SustainabilityPolicy() {
  const t = useTranslations(
    'SustainabilityManagementPage.SustainabilityManagementPolicy'
  )

  const columns = t.raw('columns') as { title: string; items: string[] }[]

  return (
    <section className='py-[88px] bg-white'>
      <Animation className='max-w-[950px] w-full mx-auto px-5'>
        <h2 className='headline-2 text-blue-400'>{t('sectionTitle')}</h2>
        <p className='mt-[16px] body-1 text-black-6 whitespace-pre-line'>
          {t('intro')}
        </p>

        <div className='mt-[50px] bg-white-1 rounded-[8px] px-5 py-[40px] md:px-[40px]'>
          <h3 className='headline-4 text-blue-400 text-center font-semibold'>
            {t('policyBoxTitle')}
          </h3>

          <div className='mt-[40px] grid grid-cols-1 md:grid-cols-3 gap-y-10 md:divide-x divide-black-8'>
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className='flex flex-col items-center px-4'
              >
                <div className='w-[90px] h-[90px] rounded-full bg-white shadow-3 flex items-center justify-center'>
                  <Image
                    src={COLUMN_ICONS[columnIndex]}
                    width={56}
                    height={56}
                    alt=''
                    className='object-contain'
                  />
                </div>

                <p className='mt-[16px] headline-6 font-semibold text-red-400'>
                  {column.title}
                </p>

                <ul className='mt-[12px] space-y-2 list-disc pl-5'>
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='body-2 text-black-6'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Animation>
    </section>
  )
}
