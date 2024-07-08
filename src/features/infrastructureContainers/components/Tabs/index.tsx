import { cn } from '@/libs/util'
import { FunctionComponentType } from '@/models/FunctionComponentType'

export function Tabs({ children, className }: FunctionComponentType) {
  return <div className={cn('space-y-[8px]', className)}>{children}</div>
}
