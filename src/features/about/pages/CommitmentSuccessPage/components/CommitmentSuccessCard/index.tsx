import { cn } from '@/libs/util'
import { FunctionComponentType } from '@/models/FunctionComponentType'

export function CommitmentSuccessCard({
  children,
  className,
}: FunctionComponentType) {
  return (
    <div
      className={cn(
        'py-[20px] px-[24px] flex justify-center gap-[24px] flex-wrap',
        className
      )}
    >
      {children}
    </div>
  )
}
