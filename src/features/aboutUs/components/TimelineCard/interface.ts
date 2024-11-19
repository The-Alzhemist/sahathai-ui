export interface TimelineCardProps {
  className?: string
  year: string
  imageUrl: string
  contentPosition: 'left' | 'right'
  children: React.ReactNode
}
