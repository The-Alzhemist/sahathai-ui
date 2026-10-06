import { MediaType } from './MediaType'

export type Policy = {
  id: number
  documentId: string
  title: string
  fileTh: MediaType | null
  fileEn: MediaType | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
