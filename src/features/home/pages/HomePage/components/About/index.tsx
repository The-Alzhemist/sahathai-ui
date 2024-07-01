import { useTranslations } from 'next-intl'

import { AboutCard } from '../AboutCard'

export function About() {
  const t = useTranslations('HomePage.About')

  return (
    <section className='max-w-[897px] mx-auto p-[72px_0_152px]'>
      <h1 className='text-[36px] leading-[56px] text-center text-blue-800'>
        {t('title')}
      </h1>
      <p className='mt-[8px] body-1 text-black-60 text-center'>
        {t('description')}
      </p>
      <div className='flex justify-center gap-y-[40px] flex-wrap gap-x-[24px] mt-[40px] max-w-[1060px] mx-auto'>
        <AboutCard
          title={t('comprehensiveService.title')}
          description={t('comprehensiveService.description')}
          imageUrl='/home/comprehensive-service.png'
        />
        <AboutCard
          title={t('globalTransportationNetwork.title')}
          description={t('globalTransportationNetwork.description')}
          imageUrl='/home/global-transportation-network.png'
        />
        <AboutCard
          title={t('convenientLocation.title')}
          description={t('convenientLocation.description')}
          imageUrl='/home/convenient-location.png'
        />
        <AboutCard
          title={t('coversAllNeeds.title')}
          description={t('coversAllNeeds.description')}
          imageUrl='/home/covers-all-needs.png'
        />
        <AboutCard
          title={t('worldClassStandards.title')}
          description={t('worldClassStandards.description')}
          imageUrl='/home/world-class-standards.png'
        />
      </div>
    </section>
  )
}
