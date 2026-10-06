import { FormatsType } from './FormatsType'

export type MediaType = {
  id: number
  url: string
  alternativeText: string | null
  width: number
  height: number
  formats: FormatsType
}
