import { MediaType } from './MediaType'

export type Machinery = {
  id: number
  documentId: string
  title: string
  subtitle: string | null
  description: string
  order: number
  image: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
