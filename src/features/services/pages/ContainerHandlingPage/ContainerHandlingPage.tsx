import { useTranslations } from 'next-intl'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function ContainerHandlingPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.containerHandling'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={t('title')}
      imageUrl='/services/new/service-3.webp'
      content={t('content')}
    />
  )
}
