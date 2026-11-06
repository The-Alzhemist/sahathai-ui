import { useTranslations } from 'next-intl'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function ContainerServicesPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.containerService'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={t('title')}
      data={[
        {
          imageUrl: '/services/new/service-6.webp',
          contents: [t('content')],
        },
      ]}
    />
  )
}
