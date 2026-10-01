import { MediaType } from './MediaType'

export type PublishedDocumentQuarter = {
  id: number
  url: string | null
  file: MediaType | null
} | null

export type PublishedDocument = {
  id: number
  documentId: string
  year: number
  q1: PublishedDocumentQuarter
  q2: PublishedDocumentQuarter
  q3: PublishedDocumentQuarter
  annual: PublishedDocumentQuarter
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
