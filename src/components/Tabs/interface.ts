import { TabType } from '@/models/TabType'

export interface TabsProps {
  className?: string
  tabs: TabType[]
  style: 'normal' | 'border'
  active: string
  onChange: (value: string) => void
}

export interface TabProps extends TabType {
  style: 'normal' | 'border'
  isActive?: boolean
  onClick: () => void
}

export interface TabProviderProps {
  children: React.ReactNode
}
