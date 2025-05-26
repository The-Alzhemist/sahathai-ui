import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'

export function Slogan() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.Slogan')

  return (
    <section className='bg-[url("/background.jpeg")] bg-center bg-cover mt-[120px]'>
      <section className='bg-modellBgDark/60 text-white py-[116px]'>
        <Animation className='max-w-[580px] w-full mx-auto'>
          <p className='headline-3 text-center whitespace-pre-line'>{t('title')}</p>
        </Animation>
      </section>
    </section>
  )
}
