import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'

export function AutomatedContainerReadingTechnology() {
  const t = useTranslations(
    'InfrastructureContainersPage.AutomatedContainerReadingTechnology'
  )

  return (
    <section className='mt-[157px] bg-[url("/infrastructure-containers/ocr.png")] h-[948px]'>
      <Animation className='max-w-[900px] w-full text-white mx-auto py-[80px]'>
        <h2 className='headline-2 text-center'>{t('title')}</h2>
        <p className='body-1 text-center mt-[24px]'>{t('description')}</p>
        <div className='max-w-[901px] w-full mt-[53px]'>
          <div className='relative pt-[63.93%] w-full'>
            <div className='absolute inset-0 w-full h-full bg-dark' />
          </div>
        </div>
      </Animation>
    </section>
  )
}
