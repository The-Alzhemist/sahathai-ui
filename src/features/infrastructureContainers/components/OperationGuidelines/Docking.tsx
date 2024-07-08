import Image from 'next/image'
import { DockProps } from './interface'

export function Docking({ imageUrl, description }: DockProps) {
  return (
    <div>
      <Image src={imageUrl} alt='' width={666} height={328} />
      <p className='mt-[16px] body-1 text-black-60'>{description}</p>
    </div>
  )
}
