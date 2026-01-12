'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'
import { Tabs } from '@/components/Tabs'
import { Banner } from '@/components/Banner'
import { VisionMissionValues } from '../../components/VisionMissionValues'
import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { CorporateGroupOrganizationalStructure } from '../../components/CorporateGroupOrganizationalStructure'
import { AboutPageProps, AboutUsTabEnum } from './interface'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'

export function AboutUsPage({
  tabs,
  active,
  handleOnActiveTabChange,
}: AboutPageProps) {
  // const t = useTranslations('AboutUsPage.Tabs')
  // const tMenu = useTranslations('Menu')

  return (
    <main>
      <AnimatePresence mode='wait'>
        <Animation key={active}>
          <Menu />
          <SwiperVertical />
          {active === AboutUsTabEnum.VISION_MISSION ? (
            <VisionMissionValues />
          ) : active === AboutUsTabEnum.OUT_COMMITMENT_SUCCESS ? (
            <CommitmentSuccess />
          ) : active === AboutUsTabEnum.BOARD_DIRECTORS_EXE ? (
            <BoardAndExecutives />
          ) : active === AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE ? (
            <CorporateGroupOrganizationalStructure />
          ) : null}
        </Animation>
      </AnimatePresence>
    </main>
  )
}
