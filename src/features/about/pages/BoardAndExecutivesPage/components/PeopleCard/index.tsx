import { cn } from '@/libs/util'
import { PeopleCardProps } from './interface'

export function PeopleCard({
  name,
  jobTitle,
  border = false,
}: PeopleCardProps) {
  return (
    <div
      className={cn('p-[12px] rounded-[16px] bg-white max-w-[345px] w-full', {
        'border border-dark-80': border,
      })}
    >
      <div className='w-[321px] h-[321px] bg-dark-80 rounded-[8px]' />
      <div className='mt-[12px] font-[600] text-[30px] leading-[36px]'>
        {name}
      </div>
      <div className='mt-[8px] whitespace-pre text-[14px] leading-[20px]'>
        {jobTitle}
      </div>
    </div>
  )
}
