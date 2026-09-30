import { DescriptionRichTextBlock } from './DescriptionType'

export type CommitteeMemberBlock = {
  id: number
  __component: 'shared.committee-member'
  name: string
  role: string
}

export type CommitteeContentBlock =
  | DescriptionRichTextBlock
  | CommitteeMemberBlock
