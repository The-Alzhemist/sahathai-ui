import { DescriptionType } from './DescriptionType'
import { ArticleCardDataType } from './ArticleCardDataType'

export type NewsDataType = ArticleCardDataType & {
  description: DescriptionType
}
