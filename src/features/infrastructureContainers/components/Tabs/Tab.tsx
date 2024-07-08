import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <button
      className={cn(
        'leading-[24px] k2d bg-white-3 p-[16px] rounded-[8px] w-full text-black-40',
        {
          'bg-blue-400 text-white': isActive,
        }
      )}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
