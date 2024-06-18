import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { AboutCard } from '../AboutCard'
import { ArrowRightCircleIcon } from '@/components/icons/ArrowRightCircleIcon'

export function About() {
  const t = useTranslations('HomePage.About')

  return (
    <section className='p-[80px_78px]'>
      <h1 className='text-[30px] font-[600] leading-[36px] text-center'>
        {t('title')}
      </h1>
      <p className='mt-[20px] text-[20px] font-[500] leading-[24px] text-dark-300 max-w-[910px] text-center mx-auto'>
        {t('description')}
      </p>
      <div className='flex justify-center gap-y-[40px] flex-wrap gap-x-[20px] mt-[40px] max-w-[1060px] mx-auto'>
        <AboutCard
          title={t('comprehensiveService.title')}
          description={t('comprehensiveService.description')}
        />
        <AboutCard
          title={t('globalTransportationNetwork.title')}
          description={t('globalTransportationNetwork.description')}
        />
        <AboutCard
          title={t('convenientLocation.title')}
          description={t('convenientLocation.description')}
        />
        <AboutCard
          title={t('worldClassStandards.title')}
          description={t('worldClassStandards.description')}
        />
        <AboutCard
          title={t('coversAllNeeds.title')}
          description={t('coversAllNeeds.description')}
        />
        <Link
          href=''
          className='w-[320px] m-[10px] bg-dark-60 rounded-[8px] flex flex-col justify-center items-center'
        >
          <h2 className='text-[30px] font-[600] leading-[36px]'>
            {t('other.title')}
          </h2>
          <p className='whitespace-pre mt-[8px] text-[18px] leading-[28px] text-center'>
            {t('other.description')}
          </p>
          <ArrowRightCircleIcon className='mt-[34px]' width='96' height='96' />
        </Link>
      </div>
    </section>
  )
}
