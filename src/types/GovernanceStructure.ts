import { MediaType } from './MediaType'

export type GovernanceStructure = {
  id: number
  documentId: string
  description: string
  chartImage: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
