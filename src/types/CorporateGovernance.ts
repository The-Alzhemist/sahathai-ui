import { MediaType } from './MediaType'

export type CorporateGovernanceDocument = {
  id: number
  label: string
  url: string | null
  file: MediaType | null
}

export type CorporateGovernance = {
  id: number
  documentId: string
  documents: CorporateGovernanceDocument[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
