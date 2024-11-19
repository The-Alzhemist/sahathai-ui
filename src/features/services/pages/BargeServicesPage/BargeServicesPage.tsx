import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import Image from 'next/image'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function BargeServicesPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.bargeServices'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={
        <Fragment>
          {t('title')}&nbsp;|&nbsp;
          <Image src='/bbs.png' width={65} height={30} alt='' />
        </Fragment>
      }
      imageUrl='/services/barge-services.png'
      content={t('content')}
    />
  )
}
