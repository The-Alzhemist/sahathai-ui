import { FunctionComponentType } from '@/models/FunctionComponentType'
import { TrapeziumIcon } from '../icons/TrapeziumIconIcon'

export function Title({ children }: FunctionComponentType) {
  return (
    <section className='relative bg-blue'>
      <div className='relative max-w-[1440px] mx-auto flex flex-col justify-center h-[140px]'>
        {children}
        <TrapeziumIcon
          className='absolute top-0 right-0'
          width='295'
          height='140'
        />
      </div>
      <div className='bg-red absolute top-0 right-0 h-full w-[calc((100vw-1440px)/2)]' />
    </section>
  )
}
