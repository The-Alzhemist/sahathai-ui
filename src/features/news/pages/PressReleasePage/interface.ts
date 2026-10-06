import { LocaleEnum } from '@/enums/LocaleEnum'
import { NewsDataType } from '@/types/NewsDataType'

export interface PressReleasePageProps {
  locale: LocaleEnum
  data: NewsDataType
  title: string
  backHref: string
}
