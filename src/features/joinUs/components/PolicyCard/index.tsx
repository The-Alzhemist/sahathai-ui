import { PolicyCardProps } from './interface'
import { DownloadButton } from '@/components/DownloadButton'

export function PolicyCard({ title, downloadLink }: PolicyCardProps) {
  return (
    <section className='py-[8px] px-[15px]'>
      <h2 className='text-[20px] leading-[24px] tracking-[0.15px] text-blue-400'>
        {title}
      </h2>
      <DownloadButton className='mt-[16px]' href={downloadLink} />
    </section>
  )
}
