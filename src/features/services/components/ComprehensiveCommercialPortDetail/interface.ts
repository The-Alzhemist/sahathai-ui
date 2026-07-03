interface DetailType {
  title?: string
  imageUrl: string
  content: string
}

export interface ComprehensiveCommercialPortDetailProps {
  title: React.ReactNode
  data: DetailType[]
}

export interface CardProps {
  title?: string
  imageUrl: string
  content: string
}
