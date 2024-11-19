import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function YuthVorachattarn() {
  const t = useTranslations('AboutUsPage.YuthVorachattarn')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl='/about-us/yuth-vorachattarn.png'
        fullName={t('fullName')}
        positions={[
          t('position1'),
          t('position2'),
          t('position3'),
          t('position4'),
        ]}
      />
      <ContentWrap>
        <Content
          title={common('education')}
          contents={[t('education1'), t('education2')]}
        />
        <Content
          title={common('trainingHistory')}
          contents={[
            t('trainingHistory1'),
            t('trainingHistory2'),
            t('trainingHistory3'),
            t('trainingHistory4'),
            t('trainingHistory5'),
            t('trainingHistory6'),
            t('trainingHistory7'),
            t('trainingHistory8'),
            t('trainingHistory9'),
            t('trainingHistory10'),
            t('trainingHistory11'),
          ]}
        />
        <Content
          title={common('dateAppointment')}
          contents={[
            t('dateAppointment1'),
            t('dateAppointment2'),
            t('dateAppointment3'),
            t('dateAppointment4'),
            t('dateAppointment5'),
          ]}
        />
        <Content
          title={common('positionHeldInListCompany')}
          contents={[
            t('positionHeldInListCompany1'),
            t('positionHeldInListCompany2'),
            t('positionHeldInListCompany3'),
            t('positionHeldInListCompany4'),
          ]}
        />
        <Content
          title={common('positionHeldInOtherCompany')}
          contents={[
            t('positionHeldInOtherCompany1'),
            t('positionHeldInOtherCompany2'),
            t('positionHeldInOtherCompany3'),
          ]}
        />
        <Content
          title={common('pastPositionHeld')}
          contents={[
            t('pastPositionHeld1'),
            t('pastPositionHeld2'),
            t('pastPositionHeld3'),
          ]}
        />
      </ContentWrap>
    </Fragment>
  )
}
