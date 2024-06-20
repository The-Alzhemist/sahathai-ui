import { CommitmentSuccessContentProps } from './interface'

export function CommitmentSuccessContent({
  year,
  title,
  description,
}: CommitmentSuccessContentProps) {
  return (
    <div className='space-y-[8px] max-w-[562px] mx-auto'>
      <div className='font-[500] text-[20px] leading-[24px] text-dark-300'>
        {year}
      </div>
      <h2 className='font-[600] text-[30px] leading-[36px]'>{title}</h2>
      <p className='text-[14px] leading-[20px] text-dark-300'>{description}</p>
    </div>
  )
}
