import { Input } from '@/components/Input'
import { cn } from '@/libs/util'
import { InputFieldProps } from './interface'

export function InputField({ label, className, ...props }: InputFieldProps) {
  return (
    <div className={cn('space-y-[10px]', className)}>
      {label && <div className='subtitle-1 text-black-2'>{label}</div>}
      <Input {...props} />
    </div>
  )
}
