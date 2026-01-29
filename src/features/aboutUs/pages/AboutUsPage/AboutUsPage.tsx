'use client'

import { Menu } from '@/components/Menu'

import { VisionMissionValues } from '../../components/VisionMissionValues'
import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { CorporateGroupOrganizationalStructure } from '../../components/CorporateGroupOrganizationalStructure'
import { AboutPageProps, AboutUsTabEnum } from './interface'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'

export function AboutUsPage({ active, boardData }: AboutPageProps) {
  return (
    <main>
      <AnimatePresence mode='wait'>
        <Animation key={active}>
          <Menu />
          <SwiperVertical />
          {active}
          {active === AboutUsTabEnum.VISION_MISSION ? (
            <VisionMissionValues />
          ) : active === AboutUsTabEnum.OUT_COMMITMENT_SUCCESS ? (
            <CommitmentSuccess />
          ) : active === AboutUsTabEnum.BOARD_DIRECTORS_EXE ? (
            <BoardAndExecutives boardData={boardData} />
          ) : active === AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE ? (
            <CorporateGroupOrganizationalStructure />
          ) : null}
        </Animation>
      </AnimatePresence>
    </main>
  )
}
