import { cn } from '@/libs/util'
import { ContactTypeFieldProps } from './interface'
import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'

export function ContactTypeField({
  className,
  text,
  checked,
  disabled,
  Icon,
  contactUsType,
  ...props
}: ContactTypeFieldProps) {
  return (
    <label
      className={cn(
        'flex items-center gap-x-[20px] cursor-pointer py-[16.5px] px-[29px] rounded-[10px] border border-white shadow-6 bg-white text-darkGray',
        {
          'pointer-events-none': disabled,
          [contactUsType === ContactUsTypeEnum.CONTACT
            ? 'border-primary'
            : 'border-red-400']: checked,
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
      <Icon className='text-navy' width='45' height='45' />
      {text}
    </label>
  )
}
