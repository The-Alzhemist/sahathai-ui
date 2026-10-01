import { MediaType } from './MediaType'

export type FinancialInfoQuarter = {
  id: number
  url: string | null
  file: MediaType | null
} | null

export type FinancialInfo = {
  id: number
  documentId: string
  year: number
  q1: FinancialInfoQuarter
  q2: FinancialInfoQuarter
  q3: FinancialInfoQuarter
  annual: FinancialInfoQuarter
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
