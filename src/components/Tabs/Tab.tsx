import { cn } from '@/libs/util'
import { TabProps } from './interface'

export function Tab({
  isActive = false,
  style,
  title,
  icon,
  onClick,
}: TabProps) {
  return (
    <button
      className={cn(
        'py-[14.5px] px-[18px] button-small whitespace-nowrap flex gap-[10px] items-center rounded-[50px]',
        {
          'bg-primary': isActive,
          'text-lightGray border border-border-1': style === 'normal',
          'text-white border border-primary': style === 'normal' && isActive,
          'text-primary': style === 'border',
          'text-white': style === 'border' && isActive,
        }
      )}
      type='button'
      onClick={onClick}
    >
      {icon ? icon : null}
      {title}
    </button>
  )
}
