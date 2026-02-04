import { BoardAndCommitteeStoryblok } from '@/types/storyblok'

export interface BoardCardProps {
  imageUrl?: string
  imageClassName?: string
  name: string
  board?: BoardAndCommitteeStoryblok
  onClick: () => void
}
