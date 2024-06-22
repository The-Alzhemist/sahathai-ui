import { cn } from '@/libs/util'
import { FunctionComponentType } from '@/models/FunctionComponentType'

export function Tabs({ children, className }: FunctionComponentType) {
  return (
    <div className={cn('p-[10px] flex gap-x-[16px] items-center', className)}>
      {children}
    </div>
  )
}
