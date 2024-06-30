import { CardProps } from './interface'

export function Card({ title, descriptions }: CardProps) {
  return (
    <div className='max-w-[348px] w-full rounded-[8px] p-[16px] shadow-2'>
      <h2 className='font-[700] text-[24px] leading-[44px] text-center'>
        {title}
      </h2>
      <div className='max-w-[56px] flex items-center mx-auto my-[6px]'>
        <hr className='flex-1 border-b-2 border-b-blue-300' />
        <hr className='flex-1 border-b-2 border-b-red-300' />
      </div>
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
