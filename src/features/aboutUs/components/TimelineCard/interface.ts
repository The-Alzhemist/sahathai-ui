export interface TimelineCardProps {
  className?: string
  year: string
  imageUrl: string
  contentPosition: 'left' | 'right'
  children: React.ReactNode
}

export interface TimelineCardVariantProps extends TimelineCardProps {
  animationClassName: string
}
