import { MediaType } from './MediaType'

export type MissionCard = {
  id: number
  title: string
  description: string
  image: MediaType | null
}

export type CoreValueIcon = 'service' | 'heart' | 'integrity' | 'innovation'

export type CoreValue = {
  id: number
  icon: CoreValueIcon
  title: string
  description: string
}

export type VisionMission = {
  id: number
  documentId: string
  vision: string
  visionImage: MediaType | null
  missions: MissionCard[]
  coreValues: CoreValue[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
