import { SustainabilityCardProps } from './interface'
import Image from 'next/image'

export function SustainabilityCard({
  title,
  descriptions,
  imagePath,
  imgClassName
}: SustainabilityCardProps) {
  return (
    <div className='max-w-[300px] w-full rounded-[20px] p-[16px] shadow-2 bg-white'>
      {imagePath && (
        <div className='flex justify-center mb-5 h-[60px]'>
          <Image  src={imagePath} alt={imagePath} width={70} height={70} className={imgClassName}/>
        </div>

      )}

      <h2 className='headline-4 text-navy text-center mb-[24px]'>
        {title}
      </h2>
      {descriptions.map((description, index) => (
        <div
          className='grid grid-cols-[10px_1fr] body-1  text-black-60 whitespace-pre-line'
          key={index}
        >
          <span>&bull;</span>
          <p className='whitespace-pre-wrap text-sm'>{description}</p>
          <br />
        </div>
      ))}
    </div>
  )
}
