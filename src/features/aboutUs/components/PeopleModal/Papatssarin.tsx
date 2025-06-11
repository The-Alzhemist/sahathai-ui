import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function Papatssarin() {
  const t = useTranslations('AboutUsPage.Papatssarin')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl=''
        fullName={t('fullName')}
        positions={[t('position1')]}
      />
      <ContentWrap>
        <Content title={common('education')} contents={[t('education1'),t('education2')]} />
        <Content
          title={common('dateAppointment')}
          contents={[t('dateAppointment1')]}
        />

        <Content
          title={common('workExperience')}
          contents={[t('trainingHistory1'),t('trainingHistory2'),t('trainingHistory3'),t('trainingHistory4')]}
        />


        {/*<Content*/}
        {/*  title={common('positionHeldInListCompany')}*/}
        {/*  contents={[t('positionHeldInListCompany1')]}*/}
        {/*/>*/}

        {/*<Content*/}
        {/*  title={common('positionHeldInOtherCompany')}*/}
        {/*  contents={[t('positionHeldInOtherCompany1')]}*/}
        {/*/>*/}

        {/*<Content*/}
        {/*  title={common('pastPositionHeld')}*/}
        {/*  contents={[t('pastPositionHeld1')]}*/}
        {/*/>*/}
      </ContentWrap>
    </Fragment>
  )
}
