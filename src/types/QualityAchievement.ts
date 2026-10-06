import { MediaType } from './MediaType'
import { RichTextNode } from './DescriptionType'

export type QualityAchievementItem = {
  id: number
  caption: string
  image: MediaType | null
}

export type QualityAchievement = {
  id: number
  documentId: string
  description: RichTextNode[]
  items: QualityAchievementItem[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
