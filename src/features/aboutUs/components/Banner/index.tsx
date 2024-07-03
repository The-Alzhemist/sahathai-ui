import { useTranslations } from 'next-intl'

import { Line } from '@/components/Line'
import { Animation } from '@/components/Animation'

export function Banner() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.Banner')
  const common = useTranslations('common')

  return (
    <section className='relative py-[64px] bg-[url("/about-us/banner.png")] bg-cover h-[838px]'>
      <Animation className='pl-[72px] border-l-[4px] border-blue-300 w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='max-w-[336px] w-full'>
          <h1 className='headline-3 text-blue-300'>
            {common('sahathai')}
            &nbsp;<span className='text-red-300'>{common('terminal')}</span>
          </h1>
          <p className='mt-[10px] body-2 text-white'>{t('description')}</p>
        </div>

        <div className='max-w-[521px] w-full mt-[134px]'>
          <h2 className='headline-1 text-blue-300'>{t('vision.title')}</h2>
          <Line className='my-[22px]' />
          <p className='mt-[10px] headline-2 bg-[linear-gradient(138.85deg,#D9D9D9_-11.36%,#F8F8F8_34.3%)] bg-clip-text text-transparent'>
            {t('vision.description')}
          </p>
        </div>
      </Animation>
    </section>
  )
}
