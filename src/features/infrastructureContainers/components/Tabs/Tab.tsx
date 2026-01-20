import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <div
      className={cn(
        'leading-5 md:leading-[24px]  bg-white-3 p-2 md:p-4 rounded-[8px] min-w-[200px]  text-center md:w-full text-[#999999] bg-white cursor-pointer text-md',
        {
          'bg-blue-400 text-white': isActive,
        }
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
