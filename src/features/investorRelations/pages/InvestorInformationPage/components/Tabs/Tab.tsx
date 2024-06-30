import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <button
      className={cn('py-[15px] text-[18px] leading-[28px] sarabun', {
        'text-blue headline-4 border-b-2 border-blue mb-[4px]': isActive,
      })}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
