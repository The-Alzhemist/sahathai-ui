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

// Strapi Blocks JSON node (paragraph, heading, list, list-item, quote, code,
// link, image, text). One loose recursive shape keeps the renderer simple.
export type RichTextNode = {
  type: string
  children?: RichTextNode[]
  text?: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
  level?: number
  format?: 'ordered' | 'unordered'
  url?: string
  image?: { url: string; alternativeText?: string | null }
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
