import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import Image from 'next/image'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function GroundContainerTransportationServicesPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.groundContainerTransportationServices'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={
        <Fragment>
          {t('title')}&nbsp;|&nbsp;
          <Image src='/bts.png' width={62.5} height={25} alt='' />
        </Fragment>
      }
      imageUrl='/services/ground-container-transportation-services.png'
      content={t('content')}
    />
  )
}
