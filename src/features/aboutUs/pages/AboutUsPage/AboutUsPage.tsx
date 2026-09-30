'use client'

import { Menu } from '@/components/Menu'

import { VisionMissionValues } from '../../components/VisionMissionValues'
import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { CorporateGroupOrganizationalStructure } from '../../components/CorporateGroupOrganizationalStructure'
import { CorporateGroup } from '../../components/CorporateGroup'
import { OrganizationalStructure } from '../../components/OrganizationalStructure'
import { AboutPageProps, AboutUsTabEnum } from './interface'
import SwiperVertical from '@/components/Header/components/SwiperVertical'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function AboutUsPage({
  active,
  boardData,
  committeeData,
}: AboutPageProps) {
  const { tick } = useNavigationTick()

  return (
    <main>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />
          <SwiperVertical />

          {active === AboutUsTabEnum.VISION_MISSION ? (
            <VisionMissionValues />
          ) : active === AboutUsTabEnum.OUT_COMMITMENT_SUCCESS ? (
            <CommitmentSuccess />
          ) : active === AboutUsTabEnum.BOARD_DIRECTORS_EXE ? (
            <BoardAndExecutives
              boardData={boardData}
              committeeData={committeeData}
            />
          ) : active === AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE ? (
            <CorporateGroupOrganizationalStructure>
              <CorporateGroup />
            </CorporateGroupOrganizationalStructure>
          ) : active === AboutUsTabEnum.ORGANIZATIONAL_STRUCTURE ? (
            <CorporateGroupOrganizationalStructure>
              <OrganizationalStructure />
            </CorporateGroupOrganizationalStructure>
          ) : null}
        </Animation>
      </AnimatePresence>
    </main>
  )
}
