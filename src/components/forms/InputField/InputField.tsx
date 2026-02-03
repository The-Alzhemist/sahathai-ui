import { Input } from '@/components/Input'
import { cn } from '@/libs/util'
import { InputFieldProps } from './interface'

export function InputField({
  label,
  className,
  meta,
  type,
  inputClassName,
  onlyNumber,
  helpers,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn('space-y-[10px]', className)}>
      {label && <div className='subtitle-1 text-darkGray'>{label}</div>}
      <Input
        type={type}
        inputClassName={inputClassName}
        {...props}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value

          if (onlyNumber) {
            value = value.replace(/[^0-9]/g, '')
          }

          helpers?.setValue(value)
        }}
      />
      {meta.touched && meta.error && (
        <div className='text-red-500'>{meta.error}</div>
      )}
    </div>
  )
}
