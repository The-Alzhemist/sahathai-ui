import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function BunditRungsimanon() {
  const t = useTranslations('AboutUsPage.BunditRungsimanon')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl='/about-us/bundit-rungsimanon.png'
        fullName={t('fullName')}
        positions={[t('position1')]}
      />
      <ContentWrap>
        <Content title={common('education')} contents={[t('education1'),t('education2'),t('education3'),t('education4')]} />
        <Content
          title={common('trainingHistory')}
          contents={[t('trainingHistory1')]}
        />
        <Content
          title={common('dateAppointment')}
          contents={[t('dateAppointment1')]}
        />

        <Content
          title={common('workExperience')}
          contents={[t('workExperiment1'),t('workExperiment2')]}
        />


      </ContentWrap>
    </Fragment>
  )
}
