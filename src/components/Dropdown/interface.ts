import { SelectType } from '@/models/SelectType'

export interface DropdownProps {
  icon?: React.ReactNode
  className?: string
  value: string
  options: SelectType[]
  onSelect: (value: string) => void
}
