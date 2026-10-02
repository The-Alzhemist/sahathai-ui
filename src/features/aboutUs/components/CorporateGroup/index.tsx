import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { Line } from '@/components/Line'
import { getStrapiImageUrl } from '@/libs/util'
import { ShareholdingStructure } from '@/types/ShareholdingStructure'

type DetailsBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

function parseDetails(details: string): DetailsBlock[] {
  const blocks: DetailsBlock[] = []
  let currentList: string[] | null = null

  const flushList = () => {
    if (currentList) {
      blocks.push({ type: 'list', items: currentList })
      currentList = null
    }
  }

  details
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .forEach(line => {
      const headingMatch = line.match(/^\*\*(.+)\*\*$/)
      const listItemMatch = line.match(/^\d+\.\s*(.+)$/)

      if (headingMatch) {
        flushList()
        blocks.push({ type: 'heading', text: headingMatch[1] })
      } else if (listItemMatch) {
        currentList = currentList ?? []
        currentList.push(listItemMatch[1])
      } else {
        flushList()
        blocks.push({ type: 'paragraph', text: line })
      }
    })

  flushList()

  return blocks
}

export function CorporateGroup({ data }: { data: ShareholdingStructure }) {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  const blocks = parseDetails(data.details)

  return (
    <div>
      <h2 className='text-navy headline-2'>{t('corporateGroup')}</h2>
      <Line className='my-[8px]' />

      <Animation className='w-full mt-[50px] shadow-8 rounded-[15px] overflow-hidden bg-white'>
        <div className='px-5 py-[40px] md:px-[60px] md:py-[60px]'>
          {data.chartImage && (
            <Image
              src={getStrapiImageUrl(data.chartImage.url)}
              width={data.chartImage.width}
              height={data.chartImage.height}
              alt=''
              className='w-full h-auto'
            />
          )}
        </div>
      </Animation>

      <Animation className='w-full mt-[30px] shadow-8 rounded-[15px] bg-white px-5 py-[40px] md:px-[60px] md:py-[60px]'>
        {blocks.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h3
                key={index}
                className='headline-5 text-secondary mt-[32px] first:mt-0'
              >
                {block.text}
              </h3>
            )
          }

          if (block.type === 'list') {
            return (
              <ol
                key={index}
                className='mt-[12px] space-y-4 list-decimal pl-5'
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className='body-1 text-black-6'>
                    {item}
                  </li>
                ))}
              </ol>
            )
          }

          return (
            <p key={index} className='body-1 text-black-6'>
              {block.text}
            </p>
          )
        })}
      </Animation>
    </div>
  )
}
