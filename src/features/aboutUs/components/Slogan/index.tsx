import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'

export function Slogan() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.Slogan')

  return (
    <Animation className='max-w-[673px] w-full mx-auto mt-[101px]'>
      <div className='headline-1 text-center'>{`\u2018\u2019`}</div>
      <br />
      <p className='headline-2 text-center'>{t('title')}</p>
      <br />
      <div className='headline-1 text-center'>{`\u2018\u2019`}</div>
    </Animation>
  )
}
