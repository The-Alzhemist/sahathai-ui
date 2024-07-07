import { cn } from '@/libs/util'
import { FunctionComponentType } from '@/models/FunctionComponentType'

export function FinancialReportsTabs({
  children,
  className,
}: FunctionComponentType) {
  return (
    <div className={cn('flex gap-x-[40px] items-center', className)}>
      {children}
    </div>
  )
}
