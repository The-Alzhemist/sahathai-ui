import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Fragment } from 'react'

export default function ESGPolicy() {
  const t = useTranslations(
    'SustainabilityManagementPage.SustainabilityManagementPolicy'
  )

  return (
    <Fragment>
      <main className='w-full'>
        <section className='relative w-full h-[356px] '>
          <Image
            src='/investor-relations/coffee-meeting-bg.webp'
            alt='ทีมงานวางมือซ้อนกันบนโต๊ะประชุม สื่อถึงการบริหารจัดการด้านความยั่งยืน'
            fill
            className='object-cover'
            sizes='100vw'
          />

          <div className='absolute inset-0'>
            <div className='mx-auto h-full w-full max-w-[1200px] px-4 sm:px-6 lg:px-8'>
              <div className='flex h-full items-center justify-end'>
                <div className='text-white max-w-[560px] w-full'>
                  <div className='flex justify-center md:justify-end  items-center gap-3 mb-3 sm:mb-4'>
                    <h1 className='font-light text-[20px] md:text-[24px]  leading-tight'>
                      {t('title')}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  )
}
