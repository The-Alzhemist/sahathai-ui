import { DisplayStyleEnum } from '@/enums/DisplayStyleEnum'
import { StrapiMediaFile } from './StrapiMediaFile'

export type DescriptionGalleryBlock = {
  id: number
  __component: 'shared.gallery'
  files: StrapiMediaFile[]
}

export type DescriptionMediaBlock = {
  id: number
  __component: 'shared.media'
  displayStyle: DisplayStyleEnum
  file: StrapiMediaFile
}

export type RichTextChild = {
  type: 'text'
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
}

export type RichTextNode = {
  type: string
  children: RichTextChild[]
}

export type DescriptionRichTextBlock = {
  id: number
  __component: 'shared.rich-text'
  body: RichTextNode[]
}

export type DescriptionBlock =
  | DescriptionGalleryBlock
  | DescriptionMediaBlock
  | DescriptionRichTextBlock

export type DescriptionType = DescriptionBlock[]
