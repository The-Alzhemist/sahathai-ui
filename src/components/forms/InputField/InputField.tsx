import { Input } from '@/components/Input'
import { cn } from '@/libs/util'
import { InputFieldProps } from './interface'

export function InputField({
  label,
  className,
  meta,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn('space-y-[10px]', className)}>
      {label && <div className='subtitle-1 text-darkGray'>{label}</div>}
      <Input {...props} />
      {meta.touched && meta.error && (
        <div className='text-red-500'>{meta.error}</div>
      )}
    </div>
  )
}
