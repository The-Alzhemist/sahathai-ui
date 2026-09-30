import { ArticleEnum } from '@/enums/ArticleEnum'
import { MediaType } from './MediaType'

export type ArticleCardDataType = {
  documentId: string
  title: string
  slug: string
  locale: string
  type: ArticleEnum
  publishDate: string
  shortDescription: string
  cover: MediaType
}
