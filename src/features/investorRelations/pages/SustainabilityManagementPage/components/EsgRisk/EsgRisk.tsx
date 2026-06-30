import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { SustainCard } from '../SustainCard'

export const EsgRisk = () => {
  const t = useTranslations('SustainabilityManagementPage')

  return (
    <section>
      {/* img */}
      <div className='relative w-full h-[520px]'>
        {/* Background image */}
        <Image
          src='/investor-relations/esg-risk.webp'
          alt='ESG Risk'
          fill
          priority
          className='object-cover'
        />

        {/* Overlay content */}
        <div className='absolute inset-0 flex items-center  justify-center md:justify-end  max-w-[1000px] mx-auto bg-gradient-to-t from-modellBgDark/80 to-[#F5F5F5]/10 md:bg-none '>
          <h1 className='text-white text-3xl font-bold  -mr-[50px] mb-10 '>
            {t('esgRisk.title')}
          </h1>
        </div>
      </div>

      {/* Card Section */}
      <div className='relative -mt-[200px] max-w-[1020px] mx-auto flex flex-col gap-y-10 px-5 mb-[100px]'>
        <SustainCard
          title={t('esgRisk.businessContinuityManagement.title')}
          content={t('esgRisk.businessContinuityManagement.description')}
          imageUrl={'/investor-relations/new/ir-card-1.webp'}
          position={'left'}
          key={'esgRisk.businessContinuityManagement'}
        />
        <SustainCard
          title={t('esgRisk.riskManagement.title')}
          content={t('esgRisk.riskManagement.description')}
          imageUrl={'/investor-relations/new/engineer-2.webp'}
          position={'right'}
          key={'esgRisk.riskManagement'}
        />
      </div>
    </section>
  )
}
