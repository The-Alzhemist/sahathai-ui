export interface NewsCardProps {
  title: string
  createdAt: string
  slug: string
  page: string
  publishDate: string
  imageUrl: string
  description: string
  direction?: 'horizontal' | 'vertical'
}
