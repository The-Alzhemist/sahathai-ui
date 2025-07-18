import { SustainabilityCardProps } from './interface'

export function SustainabilityCard({
  title,
  descriptions,
}: SustainabilityCardProps) {
  return (
    <div className='max-w-[348px] w-full rounded-[8px] p-[16px] shadow-2'>
      <h2 className='headline-4 text-blue-300 text-center mb-[24px]'>
        {title}
      </h2>
      {descriptions.map((description, index) => (
        <div
          className='grid grid-cols-[10px_1fr] body-1  text-black-60 whitespace-pre-line'
          key={index}
        >
          <span>&bull;</span>
          <p className='whitespace-pre-wrap'>{description}</p>
          <br />
        </div>
      ))}
    </div>
  )
}
