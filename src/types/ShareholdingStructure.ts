import { MediaType } from './MediaType'

export type ShareholdingStructure = {
  id: number
  documentId: string
  details: string
  chartImage: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
