import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import Image from 'next/image'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function ServiceProviderImportExportPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.serviceProviderImportExport'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={
        <Fragment>
          {t('title')}&nbsp;|&nbsp;
          <Image src='/logo.png' width={69} height={31} alt='' />
        </Fragment>
      }
      data={[
        {
          imageUrl: '/services/new/container-service-5.webp',
          contents: [t('content')],
        },
      ]}
    />
  )
}
