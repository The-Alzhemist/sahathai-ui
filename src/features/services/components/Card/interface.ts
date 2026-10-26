export interface CardProps {
  imageUrl: string
  title: string
  // When set, shown as the second title line instead of splitting `title` on '-'.
  subtitle?: string
  content: string
  position: 'left' | 'right'
}
