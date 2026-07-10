import { useTranslations } from 'next-intl'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function FeederVesselServicesPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.feederVesselServices'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={t('title')}
      data={[
        {
          imageUrl: '/services/new/service-inside-8.webp',
          contents: [t('content')],
        },
      ]}
    />
  )
}
