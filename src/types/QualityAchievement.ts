import { MediaType } from './MediaType'

export type QualityAchievementItem = {
  id: number
  caption: string
  image: MediaType | null
}

export type QualityAchievement = {
  id: number
  documentId: string
  description: string
  items: QualityAchievementItem[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
