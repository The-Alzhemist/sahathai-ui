import { MediaType } from './MediaType'
import { TextItem } from './TextItem'

export type Person = {
  id: number
  documentId: string
  fullName: string
  photo: MediaType | null
  isBoardMember: boolean
  isExecutive: boolean
  age: number | null
  positions: TextItem[]
  education: TextItem[]
  trainingHistory: TextItem[]
  directorType: string | null
  appointmentDates: TextItem[]
  tenureDuration: string | null
  workExperience5Years: TextItem[]
  positionsInListedCompanies: TextItem[]
  positionsInRelatedCompanies: TextItem[]
  positionsInOtherCompanies: TextItem[]
  positionsInOtherOrganizations: TextItem[]
  pastPositions: TextItem[]
  shareholding: string | null
  penaltyHistory5Years: TextItem[]
  familyRelationships: TextItem[]
  remarks: TextItem[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
