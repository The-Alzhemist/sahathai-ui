import { Line } from '@/components/Line'
import { CardProps } from './interface'

export function Card({ title, descriptions }: CardProps) {
  return (
    <div className='max-w-[348px] w-full rounded-[8px] p-[16px] shadow-2'>
      <h2 className='font-[700] text-[24px] leading-[44px] text-center'>
        {title}
      </h2>
      <Line className='my-[6px]' />
      {descriptions.map((description, index) => (
        <div className='grid grid-cols-[3px_1fr] text-black-60' key={index}>
          <span className='text-[16px] sarabun'>&bull;</span>
          <p className='leading-[24px] sarabun whitespace-pre-wrap pl-[10px]'>
            {description}
          </p>
          <br />
        </div>
      ))}
    </div>
  )
}
