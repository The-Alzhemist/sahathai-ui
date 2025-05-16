import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

import { Position } from './Position'
import { Content } from './Content'
import { ContentWrap } from './ContentWrap'

export function SangaSanguansaksri() {
  const t = useTranslations('AboutUsPage.SangaSanguansaksri')
  const common = useTranslations('common')

  return (
    <Fragment>
      <Position
        imageUrl='/about-us/Sanga_Sanguansaksri.jpg'
        fullName={t('fullName')}
        positions={[t('position1')]}
      />
      <ContentWrap>
        <Content title={common('education')} contents={[t('education1')]} />

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
