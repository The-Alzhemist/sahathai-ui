import { useTranslations } from 'next-intl'

import { AboutCard } from '../AboutCard'
import { SahathaiText } from '@/components/SahathaiText'
import styles from './ford.module.scss';
export function About() {
  const t = useTranslations('HomePage.About')

  return (
    <section className='container-mini pt-[80px] pb-[93px]'>
      <div className='flex items-center max-w-[896px] mx-auto mobile:flex-col'>
        <SahathaiText className='shrink-0' h='h2' />
        <p className='desktop-tablet:ml-[50px] desktop-tablet:pl-[50px] desktop-tablet:border-l mobile:mt-[50px] mobile:pt-[50px] mobile:border-t border-black-6 body-1 text-darkGray py-[8.5px] !leading-[29px]'>
          {t('content')}
        </p>
      </div>
        <div className='flex justify-center gap-y-[45px] flex-wrap gap-x-[25px] mt-[72px] w-full'>
            <AboutCard
                title={t('comprehensiveService.title')}
                content={t('comprehensiveService.content')}
                imageUrl='/home/comprehensive-service.png'
            />
            <AboutCard
                title={t('globalTransportationNetwork.title')}
                content={t('globalTransportationNetwork.content')}
                imageUrl='/home/global-transportation-network.png'
            />
          <AboutCard
            title={t('worldClassStandards.title')}
            content={t('worldClassStandards.content')}
            imageUrl='/home/world-class-standards.png'
          />
            <AboutCard
                title={t('convenientLocation.title')}
                content={t('convenientLocation.content')}
                imageUrl='/home/convenient-location.png'
            />
            <AboutCard
                title={t('coversAllNeeds.title')}
                content={t('coversAllNeeds.content')}
                imageUrl='/home/covers-all-needs.png'
            />


        </div>
    </section>
  )
}
