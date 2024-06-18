import { cn } from '@/libs/util'
import { TextAreaProps } from './interface'

export function TextAreaField({
  className,
  label,
  maxLength,
  value,
  textAreaClassName,
  ...props
}: TextAreaProps) {
  return (
    <div className={cn('space-y-[4px]', className)}>
      {label && <div className='text-[14px] text-dark'>{label}</div>}
      <textarea
        className={cn(
          'block text-dark placeholder:text-dark-60 w-full px-[16px] py-[10px] rounded-[6px] focus:outline-none border border-dark-60 focus:border-dark resize-none disabled:text-dark-60',
          textAreaClassName
        )}
        value={value}
        maxLength={maxLength}
        {...props}
      />
    </div>
  )
}
