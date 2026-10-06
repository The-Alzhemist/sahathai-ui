import { MediaType } from './MediaType'

export type PopupBanner = {
  id: number
  documentId: string
  isActive: boolean
  image: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
