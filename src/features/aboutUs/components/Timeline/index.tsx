import Image from 'next/image'

import { getStrapiImageUrl } from '@/libs/util'
import { CompanyHistoryTimelineItem } from '@/types/CompanyHistory'
import { TimelineCard } from '../TimelineCard'

export function Timeline({ items }: { items: CompanyHistoryTimelineItem[] }) {
  return (
    <section className='relative max-w-[794px] mx-auto mt-[80px] flex flex-col gap-y-[25px] mb-[100px]'>
      {items.map((item, index) => (
        <TimelineCard
          key={item.id}
          contentPosition={index % 2 === 0 ? 'right' : 'left'}
          year={String(item.year)}
          imageUrl={item.image ? getStrapiImageUrl(item.image.url) : ''}
        >
          {item.icon && (
            <Image
              className='mb-[30px] object-cover'
              src={getStrapiImageUrl(item.icon.url)}
              width={152}
              height={35}
              alt=''
            />
          )}
          <p className='font-light'>{item.description}</p>
        </TimelineCard>
      ))}
    </section>
  )
}
