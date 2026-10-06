import { Person } from '@/types/Person'

export interface BoardCardProps {
  imageUrl?: string
  imageClassName?: string
  name: string
  board?: Person
  onClick: () => void
}
