import { MediaType } from './MediaType'

export type OperatingResultQuarter = {
  id: number
  url: string | null
  file: MediaType | null
} | null

export type OperatingResult = {
  id: number
  documentId: string
  year: number
  q1: OperatingResultQuarter
  q2: OperatingResultQuarter
  q3: OperatingResultQuarter
  annual: OperatingResultQuarter
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
