import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <button
      className={cn(
        'text-[20px] leading-[24px] p-[10px] rounded-[8px] font-[500]',
        {
          'bg-dark-80 font-[700]': isActive,
        }
      )}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
