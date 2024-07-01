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
    <div className={cn('space-y-[10px]', className)}>
      {label && <div className='subtitle-1 text-black-2'>{label}</div>}
      <textarea
        className={cn(
          'medium block text-black-2 placeholder:text-dark-30 w-full p-[20px] rounded-[6px] focus:outline-none border border-black-20 focus:border-blue resize-none',
          textAreaClassName
        )}
        value={value}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && (
        <div className='text-right text-[14px] leading-[22px] inter text-dark-40'>
          {((value as string)?.length ?? 0).toLocaleString()}&nbsp;/&nbsp;
          {maxLength.toLocaleString()}
        </div>
      )}
    </div>
  )
}
