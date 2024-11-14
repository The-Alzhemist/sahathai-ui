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
      {label && <div className='subtitle-1 text-darkGray'>{label}</div>}
      <textarea
        className={cn(
          'body-1 block text-darkGray placeholder:text-placeholder w-full p-[20px] rounded-[6px] focus:outline-none border border-white-2 focus:border-primary resize-none',
          textAreaClassName
        )}
        value={value}
        maxLength={maxLength}
        {...props}
      />
      {maxLength && (
        <div className='text-right text-[14px] leading-[22px] inter text-black-2'>
          {((value as string)?.length ?? 0).toLocaleString()}&nbsp;/&nbsp;
          {maxLength.toLocaleString()}
        </div>
      )}
    </div>
  )
}
