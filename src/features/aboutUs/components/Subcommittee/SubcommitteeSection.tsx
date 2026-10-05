import { AvatarIcon } from '@/components/icons/AvatarIcon'
import { Committee } from '@/types/Committee'
import { StrapiBlocks } from '@/components/StrapiBlocks'

export function SubcommitteeSection({ committee }: { committee: Committee }) {
  return (
    <section className='text-black-6'>
      {committee.content.map(block => {
        if (block.__component === 'shared.committee-member') {
          return (
            <div key={block.id} className='flex items-center md:items-end gap-3 mb-3'>
              <div className='self-start'>
                <AvatarIcon className='text-base relative mr-[15px]' />
              </div>

              <div className='flex flex-wrap items-center gap-x-5'>
                <div className='max-w-[300px]'>{block.name}</div>
                <div>{block.role}</div>
              </div>
            </div>
          )
        }

        return (
          <div key={block.id} className='mb-7'>
            <StrapiBlocks body={block.body} />
          </div>
        )
      })}
    </section>
  )
}
