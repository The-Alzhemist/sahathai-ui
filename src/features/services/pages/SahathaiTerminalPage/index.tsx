import { useTranslations } from 'next-intl'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function SahathaiTerminalPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.sahathaiTerminal'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={t('title')}
      data={[
        {
          imageUrl: '/services/new/service-inside-7.webp',
          contents: [t('content')],
        },
      ]}
    />
  )
}
