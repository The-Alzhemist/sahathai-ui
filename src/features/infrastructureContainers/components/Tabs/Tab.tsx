import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <div
      className={cn(
        'leading-5 md:leading-[24px]  bg-white-3 p-2 md:p-4 rounded-[8px] min-w-[200px]  md:w-full text-black-40 bg-white cursor-pointer',
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
