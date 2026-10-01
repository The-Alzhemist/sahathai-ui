import { MediaType } from './MediaType'

export type Service = {
  id: number
  documentId: string
  title: string
  description: string
  order: number
  icon: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
