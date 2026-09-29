import { ArticleEnum } from '@/enums/ArticleEnum'
import { CoverType } from './CoverType'

export type ArticleCardDataType = {
  documentId: string
  title: string
  slug: string
  locale: string
  type: ArticleEnum
  publishDate: string
  shortDescription: string
  cover: CoverType
}
