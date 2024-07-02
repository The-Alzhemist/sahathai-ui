import { cn } from '@/libs/util'
import { LineProps } from './interface'

export function Line({ className }: LineProps) {
  return (
    <div className={cn('w-[56px] flex items-center', className)}>
      <hr className='flex-1 border-t-[4px] border-t-blue-300' />
      <hr className='flex-1 border-t-[4px] border-t-red-300' />
    </div>
  )
}
