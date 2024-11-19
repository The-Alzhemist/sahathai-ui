export interface PeopleCardProps {
  imageUrl?: string
  imageClassName?: string
  name: string
  jobTitle: React.ReactNode
  onClick: () => void
}
