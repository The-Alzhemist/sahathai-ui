import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Line } from '@/components/Line'
import { Animation } from '@/components/Animation'
import { SahathaiText } from '@/components/SahathaiText'

export function Vision() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.Vision')

  return (
    <Animation className='mt-[90px] flex flex-col-reverse  lg:flex-row px-5 md:px-3 justify-center gap-[89px] max-w-[1065px] mx-auto'>
      <Image
        className='shrink-0'
        src='/about-us/vision.png'
        width={419}
        height={510}
        alt=''
      />
      <section className='py-[20px] pr-[30px]'>
        <div className='max-w-[400px] w-full'>
          <SahathaiText h='h3' />
          <p className='mt-[15px] body-1 text-black-6 whitespace-pre-line'>{t('content')}</p>
        </div>

        <div className='w-full mt-[70px]'>
          <h2 className='headline-1 text-background'>{t('vision.title')}</h2>
          <Line className='my-[22px]' />
          <p className='mt-[10px] text-xl md:text-[26px] leading-7 md:leading-[48.38px] text-black-6 font-[300] whitespace-pre-line'>
            {t('vision.content')}
          </p>
        </div>
      </section>
    </Animation>
  )
}
