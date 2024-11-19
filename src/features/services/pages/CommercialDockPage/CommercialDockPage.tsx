import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import Image from 'next/image'

import { ComprehensiveCommercialPortDetail } from '../../components/ComprehensiveCommercialPortDetail'

export function CommercialDockPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.commercialDock'
  )

  return (
    <ComprehensiveCommercialPortDetail
      title={
        <Fragment>
          {t('title')}&nbsp;|&nbsp;
          <Image src='/bbt.png' width={70} height={31.5} alt='' />
        </Fragment>
      }
      imageUrl='/services/commercial-dock.png'
      content={t('content')}
    />
  )
}
