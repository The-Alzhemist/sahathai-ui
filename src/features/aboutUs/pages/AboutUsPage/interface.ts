import { TabType } from '@/models/TabType'

export interface AboutPageProps {
  tabs: TabType[]
  active: AboutUsTabEnum
  handleOnActiveTabChange: (tab: AboutUsTabEnum) => void
}

export enum AboutUsTabEnum {
  VISION_MISSION = 'visionMission',
  OUT_COMMITMENT_SUCCESS = 'ourCommitmentSuccess',
  BOARD_DIRECTORS_EXE = 'boardDirectorsExecutiveCommittee',
  CORPORATE_GROUP_STRUCTURE = 'corporateGroupStructureOrganizationalStructure',
}
