import { PolicyCardProps } from './interface'
import { DownloadButton } from '@/components/DownloadButton'

export function PolicyCard({ title, downloadLink }: PolicyCardProps) {
  return (
    <section className='py-[8px] px-[15px]'>
      <h2 className='text-[18px] leading-[28px] sarabun'>{title}</h2>
      <DownloadButton className='mt-[8px]' href={downloadLink} />
    </section>
  )
}
