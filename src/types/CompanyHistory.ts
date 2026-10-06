import { MediaType } from './MediaType'
import { RichTextNode } from './DescriptionType'

export type CompanyHistoryTimelineItem = {
  id: number
  year: number
  description: RichTextNode[]
  image: MediaType | null
  icon: MediaType | null
}

export type CompanyHistory = {
  id: number
  documentId: string
  description: RichTextNode[]
  timeline: CompanyHistoryTimelineItem[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
