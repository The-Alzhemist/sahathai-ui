import { useTranslations } from 'next-intl'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function ContainerHandlingPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.containerHandling'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={t('title')}
      imageUrl='/services/container-handling.png'
      content={t('content')}
    />
  )
}
