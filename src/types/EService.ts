import { MediaType } from './MediaType'

export type EService = {
  id: number
  documentId: string
  title: string
  url: string
  order: number
  image: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
