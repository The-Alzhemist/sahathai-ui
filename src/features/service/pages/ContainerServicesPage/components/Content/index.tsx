import { Slide } from '@/components/Slide'
import { ContentProps } from './interface'
import { cn } from '@/libs/util'

export function Content({ className, title, description }: ContentProps) {
  return (
    <section className={cn('max-w-[1276px] mx-auto', className)}>
      <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
        {title}
      </h2>
      <Slide />
      <p className='text-center'>{description}</p>
    </section>
  )
}
