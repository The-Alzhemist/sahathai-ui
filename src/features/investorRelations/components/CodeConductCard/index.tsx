import { DownloadButton } from '@/components/DownloadButton'
import { CodeConductCardProps } from './interface'

export function CodeConductCard({ title, fileUrl }: CodeConductCardProps) {
  return (
    <div className='space-y-[16px] p-[16px] shadow-6 rounded-[8px]'>
      <h2 className='text-[20px] leading-[24px] tracking-[0.15px] text-blue-400'>
        {title}
      </h2>
      <DownloadButton href={fileUrl} />
    </div>
  )
}
