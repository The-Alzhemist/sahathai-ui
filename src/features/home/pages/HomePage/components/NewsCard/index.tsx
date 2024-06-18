import { NewsCardProps } from './interface'

export function NewsCard({ description }: NewsCardProps) {
  return (
    <div className='p-[16px] rounded-[16px] space-y-[16px] w-full'>
      <div className='w-full h-[192px] rounded-[8px] bg-dark-80' />
      <p className='text-[12px] leading-[16px]'>{description}</p>
    </div>
  )
}
