import { DescriptionType } from './DescriptionType'
import { ArticleCardDataType } from './ArticleCardDataType'
import { ArticleSeo } from './ArticleSeo'

export type NewsDataType = ArticleCardDataType & {
  description: DescriptionType
  seo: ArticleSeo | null
}
