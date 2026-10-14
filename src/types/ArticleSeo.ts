import { MediaType } from './MediaType'

export type ArticleSeo = {
  id: number
  metaTitle: string
  metaDescription: string
  shareImage: MediaType | null
}
