import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({ isActive = false, children, onClick }: TabProps) {
  return (
    <button
      className={cn(
        'py-[15px] subtitle-1 border-b-2 border-white text-black-20 whitespace-nowrap',
        {
          'text-blue-400 border-blue-400': isActive,
        }
      )}
      type='button'
      onClick={onClick}
    >
      {children}
    </button>
  )
}
