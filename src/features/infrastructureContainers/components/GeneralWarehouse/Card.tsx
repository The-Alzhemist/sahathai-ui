import { Polygon1Icon } from '@/components/icons/Polygon1Icon'
import { Polygon2Icon } from '@/components/icons/Polygon2Icon'
import { CardProps } from './interface'

export function Card({ title, description }: CardProps) {
  return (
    <div className='relative w-[182px] h-[192px] rounded-[8px] overflow-hidden bg-white'>
      <h3 className='subtitle-1 text-blue-400 text-center mt-[16px] px-[4px]'>
        {title}
      </h3>
      <p className='mt-[8px] body-2 text-black-60 px-[16px] text-center'>
        {description}
      </p>
      <Polygon1Icon
        className='absolute bottom-0 right-0'
        width='182'
        height='48'
      />
      <Polygon2Icon
        className='absolute bottom-0 left-0'
        width='182'
        height='53'
      />
    </div>
  )
}
