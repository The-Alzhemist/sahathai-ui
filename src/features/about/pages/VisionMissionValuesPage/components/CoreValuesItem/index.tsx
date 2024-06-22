import { CoreValuesItemProps } from './interface'

export function CoreValuesItem({ title }: CoreValuesItemProps) {
  return (
    <div className='w-[296px] h-[224px] bg-dark-60 flex items-center justify-center rounded-[8px]'>
      <h3 className='font-[700] text-[24px] leading-[44px]'>{title}</h3>
    </div>
  )
}
