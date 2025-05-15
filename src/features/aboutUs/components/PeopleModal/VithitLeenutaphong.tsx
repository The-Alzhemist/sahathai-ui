import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function VithitLeenutaphong() {
  const t = useTranslations('AboutUsPage.VithitLeenutaphong')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl='/about-us/vithit-leenutaphong.png'
        fullName={t('fullName')}
        positions={[t('position1'), t('position2'), t('position3')]}
      />
      <ContentWrap>
        <Content title={common('education')} contents={[t('education1'),t('education2'),t('education3')]} />
        <Content
          title={common('trainingHistory')}
          contents={[t('trainingHistory1'),t('trainingHistory2'),t('trainingHistory3'),t('trainingHistory4'),t('trainingHistory5'),t('trainingHistory6')]}
        />
        <Content
          title={common('dateAppointment')}
          contents={[t('dateAppointment1'),t('dateAppointment2'),t('dateAppointment3')]}
        />
        <Content
          title={common('positionHeldInListCompany')}
          contents={[t('positionHeldInListCompany1'),t('positionHeldInListCompany2')]}
        />
        <Content
          title={common('positionHeldInOtherOrganization')}
          contents={[t('positionHeldInOtherOrganization1'),t('positionHeldInOtherOrganization2'),t('positionHeldInOtherOrganization3')]}
        />
        <Content
          title={common('positionHeldInOtherCompany')}
          contents={[t('positionHeldInOtherCompany1'),t('positionHeldInOtherCompany2')]}
        />
        <Content
          title={common('pastPositionHeld')}
          contents={[t('pastPositionHeld1'),t('pastPositionHeld2')]}
        />

      </ContentWrap>
    </Fragment>
  )
}
