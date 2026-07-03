import { CardProps } from '@/components/ContactUs/interface'
import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'

export function Card({ Icon, title, description, contactUsType }: CardProps) {
  return (
    <div className='grid grid-cols-[40px_1fr] gap-x-[16px]'>
      <div className='col-span-2 flex gap-x-[16px] items-center'>
        <div
          className={`w-[40px] h-[40px] rounded-full ${
            contactUsType === ContactUsTypeEnum.CONTACT
              ? 'bg-background'
              : 'bg-red-400'
          } flex items-center justify-center text-white`}
        >
          <Icon width='24' height='24' />
        </div>
        <div className='subtitle-1 text-black'>{title}</div>
      </div>
      <div />
      <div className='body-1 text-black-6'>{description}</div>
    </div>
  )
}
