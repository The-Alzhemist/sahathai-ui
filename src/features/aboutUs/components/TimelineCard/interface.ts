export interface TimelineCardProps {
  className?: string
  contentClassName?: string
  year: string
  imageUrl: string
  logoUrl: string
  children: React.ReactNode
  position: 'right' | 'left'
}
