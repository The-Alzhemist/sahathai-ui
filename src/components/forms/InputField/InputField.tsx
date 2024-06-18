import { Input } from '@/components/Input'
import { cn } from '@/libs/util'
import { InputFieldProps } from './interface'

export function InputField({ label, className, ...props }: InputFieldProps) {
  return (
    <div className={cn('space-y-[4px]', className)}>
      {label && <div className='text-[14px] text-dark'>{label}</div>}
      <Input {...props} />
    </div>
  )
}
