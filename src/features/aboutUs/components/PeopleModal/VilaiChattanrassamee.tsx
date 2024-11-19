import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function VilaiChattanrassamee() {
  const t = useTranslations('AboutUsPage.VilaiChattanrassamee')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl='/about-us/vilai-chattanrassamee.png'
        fullName={t('fullName')}
        positions={[
          t('position1'),
          t('position2'),
          t('position3'),
          t('position4'),
        ]}
      />
      <ContentWrap>
        <Content title={common('education')} contents={[t('education1')]} />
        <Content
          title={common('trainingHistory')}
          contents={[t('trainingHistory1')]}
        />
        <Content
          title={common('dateAppointment')}
          contents={[t('dateAppointment1')]}
        />
        <Content
          title={common('positionHeldInListCompany')}
          contents={[t('positionHeldInListCompany1')]}
        />
        <Content
          title={common('positionHeldInOtherCompany')}
          contents={[t('positionHeldInOtherCompany1')]}
        />
        <Content
          title={common('pastPositionHeld')}
          contents={[t('pastPositionHeld1')]}
        />
      </ContentWrap>
    </Fragment>
  )
}
