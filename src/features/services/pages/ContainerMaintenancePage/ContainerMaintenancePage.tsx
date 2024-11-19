import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import Image from 'next/image'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function ContainerMaintenancePage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.containerMaintenance'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={
        <Fragment>
          {t('title')}&nbsp;|&nbsp;
          <Image src='/bcds.png' width={85} height={29.35} alt='' />
        </Fragment>
      }
      imageUrl='/services/container-maintenance.png'
      content={t('content')}
    />
  )
}
