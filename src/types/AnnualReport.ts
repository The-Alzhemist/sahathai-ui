import { MediaType } from './MediaType'

export type AnnualReportFile = {
  id: number
  file: MediaType | null
} | null

export type AnnualReport = {
  id: number
  documentId: string
  year: number
  annualReport: AnnualReportFile
  report56_1: AnnualReportFile
  oneReport: AnnualReportFile
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
