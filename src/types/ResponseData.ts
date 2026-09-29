import { MetaType } from './MetaType'

export type ResponseData<T> = {
  data: T

  meta: MetaType
}
