import { MissionCardProps } from './interface'

export function MissionCard({ title, description }: MissionCardProps) {
  return (
    <div className='w-[522px] h-[522px] relative bg-white-1 rounded-[4px]'>
      <div className='absolute left-[38px] top-[353px]'>
        <h3 className='font-[700] text-[36px] leading-[44px]'>{title}</h3>
        <p className='mt-[12px] font-[500] text-[20px] leading-[24px] whitespace-pre'>
          {description}
        </p>
      </div>
    </div>
  )
}
