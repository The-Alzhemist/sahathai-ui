import { cn } from '@/libs/util'
import { InputProps } from './interface'

export function Input({
  className,
  suffix,
  leftIcon,
  type = 'text',
  labelRef,
  ...props
}: InputProps) {
  return (
    <label
      ref={labelRef}
      className={cn(
        'flex gap-x-[4px] items-center rounded-[6px] overflow-hidden border border-dark-60 h-[40px] px-[16px] [&:has(input:focus)]:border-dark [&:has(input:disabled)]:bg-dark-60',
        className
      )}
    >
      <input
        type={type}
        className='peer text-dark placeholder:text-dark-60 w-full focus:outline-none bg-transparent disabled:text-dark-60'
        autoComplete='off'
        {...props}
      />
    </label>
  )
}
