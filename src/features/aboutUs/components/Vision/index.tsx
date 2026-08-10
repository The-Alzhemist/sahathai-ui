import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Line } from '@/components/Line'
import { Animation } from '@/components/Animation'

export function Vision() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.Vision')

  return (
    <Animation className='mt-[90px] flex flex-col-reverse items-center lg:flex-row px-5 md:px-3 justify-center gap-[89px] max-w-[1065px] mx-auto'>
      <div className='w-full md:w-[550px] shrink-0'>
        <div className='relative pt-[66.73%] w-full'>
          <Image
            src='/about-us/new/team.webp'
            alt='About us team'
            fill
            className='object-contain rounded-[30px] overflow-hidden'
          />
        </div>
      </div>
      <section className='py-[20px] pr-[30px]'>
        <div className='w-full'>
          <h2 className='headline-1 text-background'>{t('vision.title')}</h2>
          <Line className='my-[22px]' />
          <p className='mt-[10px] text-xl md:text-[20px] leading-7 md:leading-[48.38px] text-black-6 font-[300] whitespace-pre-line'>
            {t('vision.content')}
          </p>
        </div>
      </section>
    </Animation>
  )
}
