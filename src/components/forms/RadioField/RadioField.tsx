import { cn } from '@/libs/util'
import { CheckIcon } from '@/components/icons/CheckIcon'
import { RadioFieldProps } from './interface'

export function RadioField({
  className,
  text,
  checked,
  disabled,
  textClassName,
  ...props
}: RadioFieldProps) {
  return (
    <label
      className={cn(
        'group flex items-center gap-x-[8px] cursor-pointer',
        {
          'pointer-events-none': disabled,
        },
        className
      )}
    >
      <input
        className='hidden'
        type='radio'
        {...props}
        checked={checked}
        disabled={disabled}
      />
      <div
        className={cn(
          'relative shrink-0 flex items-center justify-center bg-white border-[4px] border-dark-20 rounded-full w-[24px] h-[24px]',
          {
            'bg-blue-400 border-blue-400': checked,
          }
        )}
      >
        {checked && (
          <CheckIcon
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'
            width='15'
            height='15'
          />
        )}
      </div>
      <div className={cn('subtitle-1 text-black-80', textClassName)}>
        {text}
      </div>
    </label>
  )
}
