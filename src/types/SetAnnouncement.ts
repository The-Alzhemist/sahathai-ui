import { MediaType } from './MediaType'

export type SetAnnouncementItem = {
  id: number
  date: string | null
  label: string
  url: string | null
  file: MediaType | null
}

export type SetAnnouncement = {
  id: number
  documentId: string
  year: number
  items: SetAnnouncementItem[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
