import { cn } from '@/libs/util'
import { MissionCardProps } from './interface'

export function MissionCard({
  title,
  description,
  className,
}: MissionCardProps) {
  return (
    <div className='max-w-[436px] w-full'>
      <div className='relative pt-[76.38%] w-full'>
        <div
          className={cn(
            'absolute inset-0 w-full h-full rounded-[8px] p-[32px] overflow-hidden text-white flex flex-col justify-end',
            className
          )}
        >
          <h3 className='text-[24px] leading-[36px]'>{title}</h3>
          <p className='mt-[15px] text-[16px] leading-[24px] tracking-[0.18px]'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
