import Image from 'next/image'
import { CommitmentSuccessContentProps } from './interface'

export function CommitmentSuccessContent({
  year,
  imageUrl,
  title,
  description,
}: CommitmentSuccessContentProps) {
  return (
    <div className='space-y-[8px] max-w-[411px] w-full'>
      <div className='font-[500] text-[20px] leading-[24px] text-dark-300'>
        {year}
      </div>
      <Image src={imageUrl} width={100} height={66} alt='' />
      {title && (
        <h2 className='font-[600] text-[30px] leading-[36px] whitespace-nowrap'>
          {title}
        </h2>
      )}
      {description && (
        <p className='text-[14px] leading-[20px] text-dark-300 whitespace-pre-wrap'>
          {description}
        </p>
      )}
    </div>
  )
}
