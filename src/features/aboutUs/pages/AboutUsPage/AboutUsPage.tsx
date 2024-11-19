import { useTranslations } from 'next-intl'

import { Menu } from '@/components/Menu'
import { Tabs } from '@/components/Tabs'
import { Banner } from '../../components/Banner'
import { VisionMissionValues } from '../../components/VisionMissionValues'
import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { CorporateGroupOrganizationalStructure } from '../../components/CorporateGroupOrganizationalStructure'
import { AboutPageProps } from './interface'

export function AboutUsPage({ tabs, active, setActive }: AboutPageProps) {
  const t = useTranslations('AboutUsPage.Tabs')

  return (
    <main>
      <Menu />
      <Banner />
      <Tabs
        className='mt-[40px]'
        tabs={tabs}
        style='normal'
        active={active}
        onChange={setActive}
      />
      {active === t('visionMission') ? (
        <VisionMissionValues />
      ) : active === t('ourCommitmentSuccess') ? (
        <CommitmentSuccess />
      ) : active === t('boardDirectorsExecutiveCommittee') ? (
        <BoardAndExecutives />
      ) : active === t('corporateGroupStructureOrganizationalStructure') ? (
        <CorporateGroupOrganizationalStructure />
      ) : null}
    </main>
  )
}
