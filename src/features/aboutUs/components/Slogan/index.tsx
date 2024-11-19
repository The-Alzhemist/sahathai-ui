import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'

export function Slogan() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.Slogan')

  return (
    <section className='bg-[url("/about-us/slogan.jpeg")] bg-center bg-cover mt-[120px]'>
      <section className='bg-modellBgDark/60 text-white py-[116px]'>
        <Animation className='max-w-[543px] w-full mx-auto'>
          <p className='headline-3 text-center'>{t('title')}</p>
        </Animation>
      </section>
    </section>
  )
}
