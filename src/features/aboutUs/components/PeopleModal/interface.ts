import { PeopleEnum } from '@/enums/PeopleEnum'

export interface PeopleModalProps {
  people: PeopleEnum
  onClose: () => void
}

export interface PositionProps {
  imageUrl: string
  fullName: string
  positions: string[]
}

export interface ContentProps {
  title: string
  contents: string[]
}

export interface ContentWrapProps {
  children: React.ReactNode
}
