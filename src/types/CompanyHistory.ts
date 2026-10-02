import { MediaType } from './MediaType'

export type CompanyHistoryTimelineItem = {
  id: number
  year: number
  description: string
  image: MediaType | null
  icon: MediaType | null
}

export type CompanyHistory = {
  id: number
  documentId: string
  description: string
  timeline: CompanyHistoryTimelineItem[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
