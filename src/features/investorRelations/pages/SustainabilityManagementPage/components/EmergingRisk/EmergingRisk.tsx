import Image from 'next/image'
import { SustainCard } from '@/features/investorRelations/pages/SustainabilityManagementPage/SustainCard/Card'
import { useTranslations } from 'next-intl'

export const EmergingRisk = () => {

  const t = useTranslations('SustainabilityManagementPage')

    return <section>
      {/* img */}
      <div className="relative w-full h-[520px]">
        {/* Background image */}
        <Image
          src="/investor-relations/emerging-bg.webp"
          alt="emerging-bg"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-start max-w-[1000px] mx-auto">
          <h1 className="text-white text-3xl font-bold">{t('emergingRisk.title')}</h1>
        </div>
      </div>

      {/* Card Section */}
      <div className="relative -mt-[200px] max-w-[1020px] mx-auto flex flex-col gap-y-10 px-5 mb-[100px]">
        <SustainCard
          title={t('emergingRisk.cyber.title')}
          content={t('emergingRisk.cyber.description')}
          imageUrl={'/investor-relations/working.webp'}
          position={'left'}
          key={'emergingRisk.businessContinuityManagement'}
        />
        <SustainCard
          title={t('emergingRisk.riskManagement.title')}
          content={t('emergingRisk.riskManagement.description')}
          imageUrl={'/investor-relations/engineer.webp'}
          position={'right'}
          key={'emergingRisk.riskManagement'}
        />
      </div>
    </section>
}

