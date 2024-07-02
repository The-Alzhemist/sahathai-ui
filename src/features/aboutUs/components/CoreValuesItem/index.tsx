import { CoreValuesItemProps } from './interface'

export function CoreValuesItem({ title, description }: CoreValuesItemProps) {
  return (
    <div className='max-w-[222.75px] w-full h-[140px] rounded-[8px] shadow-7 p-[16px] text-center'>
      <h3 className='headline-4 underline text-blue-400'>{title}</h3>
      <p className='mt-[16px] subtitle-1 text-black-60'>{description}</p>
    </div>
  )
}
