import { cn } from '@/libs/util'
import { InputProps } from './interface'

export function Input({ type = 'text', inputClassName, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        'medium text-darkGray placeholder:text-placeholder w-full focus:border-primary focus:outline-none bg-white rounded-[6px] border border-white-2 h-[46px] px-[20px]',
        inputClassName
      )}
      autoComplete='off'
      {...props}
    />
  )
}
