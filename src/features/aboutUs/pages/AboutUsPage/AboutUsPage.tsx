import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'
import { Tabs } from '@/components/Tabs'
import { Banner } from '@/components/Banner'
import { VisionMissionValues } from '../../components/VisionMissionValues'
import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { CorporateGroupOrganizationalStructure } from '../../components/CorporateGroupOrganizationalStructure'
import { AboutPageProps, AboutUsTabEnum } from './interface'

export function AboutUsPage({
  tabs,
  active,
  handleOnActiveTabChange,
}: AboutPageProps) {
  const t = useTranslations('AboutUsPage.Tabs')
  const tMenu = useTranslations('Menu')

  return (
    <main>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('aboutUs.title')}
        caption={tMenu('aboutUs.title')}
      />
      <div className='flex justify-center px-2'>
        <Tabs
          className='mt-[40px]'
          tabs={tabs}
          style='normal'
          active={active}
          onChange={v => handleOnActiveTabChange(v as AboutUsTabEnum)}
        />
      </div>

      {active === AboutUsTabEnum.VISION_MISSION ? (
        <VisionMissionValues />
      ) : active === AboutUsTabEnum.OUT_COMMITMENT_SUCCESS ? (
        <CommitmentSuccess />
      ) : active === AboutUsTabEnum.BOARD_DIRECTORS_EXE ? (
        <BoardAndExecutives />
      ) : active === AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE ? (
        <CorporateGroupOrganizationalStructure />
      ) : null}
    </main>
  )
}
