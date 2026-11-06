import { MediaType } from './MediaType'

export type CorporateGovernanceDocument = {
  id: number
  label: string
  url: string | null
  file: MediaType | null
}

export type CorporateGovernanceSection = {
  id: number
  title: string
  items: CorporateGovernanceDocument[]
}

export type CorporateGovernance = {
  id: number
  documentId: string
  sections: CorporateGovernanceSection[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
