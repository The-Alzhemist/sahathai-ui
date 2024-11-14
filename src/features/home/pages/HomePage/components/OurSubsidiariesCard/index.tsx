import Image from 'next/image'
import { OurSubsidiariesCardProps } from './interface'

export function OurSubsidiariesCard({
  imageUrl,
  width,
  height,
}: OurSubsidiariesCardProps) {
  return (
    <div className='w-[160px] h-[170px] flex justify-center items-center border-background border-t-[10px] bg-white'>
      <Image src={imageUrl} width={width} height={height} alt='' />
    </div>
  )
}
