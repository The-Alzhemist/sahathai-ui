import { MediaType } from './MediaType'

export type SustainabilitySection = {
  content: string
  image: MediaType | null
}

export type Sustainability = {
  id: number
  documentId: string
  bannerText: string
  bannerImage: MediaType | null
  bannerFile: MediaType | null
  policy: SustainabilitySection | null
  goals: SustainabilitySection | null
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
