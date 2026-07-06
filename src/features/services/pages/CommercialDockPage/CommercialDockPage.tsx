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
      data={[
        {
          title: t('sahathai.title'),
          imageUrl: '/services/new/service-inside-1.webp',
          content: t('sahathai.content'),
        },
        {
          title: t('bbt.title'),
          imageUrl: '/services/new/service-inside-6.webp',
          content: t('bbt.content'),
        },
      ]}
    />
  )
}
