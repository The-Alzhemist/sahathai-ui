import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function SauwakunKaruchit() {
  const t = useTranslations('AboutUsPage.SauwakunKaruchit')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl='/about-us/sauwakun-karuchit.png'
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
          contents={[t('trainingHistory1'),t('trainingHistory2'),t('trainingHistory3')]}
        />
        <Content
          title={common('dateAppointment')}
          contents={[t('dateAppointment1'),t('dateAppointment2'),t('dateAppointment3')]}
        />
        <Content
          title={common('positionHeldInListCompany')}
          contents={[t('positionHeldInListCompany1')]}
        />
        <Content
          title={common('positionHeldInOtherCompany')}
          contents={[t('positionHeldInOtherCompany1'),t('positionHeldInOtherCompany2'),t('positionHeldInOtherCompany3'),t('positionHeldInOtherCompany4')]}
        />
        <Content
          title={common('pastPositionHeld')}
          contents={[t('pastPositionHeld1'),t('pastPositionHeld2'),t('pastPositionHeld3'),t('pastPositionHeld4')]}
        />
      </ContentWrap>
    </Fragment>
  )
}
