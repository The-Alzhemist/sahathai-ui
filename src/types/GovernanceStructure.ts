import { MediaType } from './MediaType'
import { RichTextNode } from './DescriptionType'

export type GovernanceStructure = {
  id: number
  documentId: string
  description: RichTextNode[]
  chartImage: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
