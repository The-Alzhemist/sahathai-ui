import { Person } from '@/types/Person'
import { Committee } from '@/types/Committee'
import { CompanyHistory } from '@/types/CompanyHistory'
import { TabType } from '@/models/TabType'

export interface AboutPageProps {
  tabs: TabType[]
  active: AboutUsTabEnum
  handleOnActiveTabChange: (tab: AboutUsTabEnum) => void
  boardData: Person[]
  committeeData: Committee[]
  companyHistoryData: CompanyHistory
}

export interface AboutPageAcceptProps {
  boardData: Person[]
  committeeData: Committee[]
  companyHistoryData: CompanyHistory
}

export enum AboutUsTabEnum {
  VISION_MISSION = 'visionMission',
  OUT_COMMITMENT_SUCCESS = 'ourCommitmentSuccess',
  BOARD_DIRECTORS_EXE = 'boardDirectorsExecutiveCommittee',
  CORPORATE_GROUP_STRUCTURE = 'corporateGroupStructure',
  ORGANIZATIONAL_STRUCTURE = 'organizationalStructure',
}
