import Image from 'next/image'
import { ShareholdersMeetingCardProps } from './interface'

export function ShareholdersMeetingCard({
  title,
}: ShareholdersMeetingCardProps) {
  return (
    <div className='max-w-[211.25px] w-full border border-white-4 rounded-[8px] overflow-hidden'>
      <div className='relative w-[211.25px] h-[150px]'>
        <Image
          src='/investor-relations/shareholders-meeting.png'
          width={211.25}
          height={150}
          alt=''
        />
        <Image
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          src='/logo.png'
          width={96}
          height={23}
          alt=''
        />
      </div>
      <div className='mt-[4px] p-[8px] subtitle-1'>{title}</div>
    </div>
  )
}
