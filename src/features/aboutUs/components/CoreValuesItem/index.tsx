import { Animation } from '@/components/Animation'
import { CoreValuesItemProps } from './interface'

export function CoreValuesItem({ title, content, Icon }: CoreValuesItemProps) {
  return (
    <Animation className='max-w-[242px] w-full h-[230px] shadow-5 py-[30px] px-[22px] flex flex-col items-center border-b-[10px] border-background'>
      <Icon className='text-secondary' width='70' height='70' />
      <h3 className='mt-[20px] headline-4 !font-[500] text-navy'>{title}</h3>
      <p className='mt-[10px] body-2 text-black-6 text-center'>{content}</p>
    </Animation>
  )
}
