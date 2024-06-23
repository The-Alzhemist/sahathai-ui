import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <button
      className={cn(
        'leading-[24px] sarabun bg-white-1 p-[18px] rounded-[8px] w-full',
        {
          'bg-dark-100': isActive,
        }
      )}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
