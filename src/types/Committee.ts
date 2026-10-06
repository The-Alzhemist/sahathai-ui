import { CommitteeContentBlock } from './CommitteeContentType'

export type Committee = {
  id: number
  documentId: string
  name: string
  order: number
  content: CommitteeContentBlock[]
  locale: string
  publishedAt: string
  createdAt: string
  updatedAt: string
}
