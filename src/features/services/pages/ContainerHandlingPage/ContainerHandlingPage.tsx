import { useTranslations } from 'next-intl'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function ContainerHandlingPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.containerHandling'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={t('title')}
      data={[
        {
          imageUrl: '/services/new/service-inside-3.webp',
          contents: [t('content')],
        },
      ]}
    />
  )
}
