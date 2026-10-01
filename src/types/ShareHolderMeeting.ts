import { MediaType } from './MediaType'

export type ShareHolderMeetingItem = {
  id: number
  label: string
  url: string | null
  file: MediaType | null
}

export type ShareHolderMeetingSection = {
  id: number
  title: string
  items: ShareHolderMeetingItem[]
}

export type ShareHolderMeeting = {
  id: number
  documentId: string
  title: string
  order: number | null
  sections: ShareHolderMeetingSection[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
