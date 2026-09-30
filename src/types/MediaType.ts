import { FormatsType } from './FormatsType'

export type MediaType = {
  id: number
  url: string
  alternativeText: string | null
  formats: FormatsType
}
