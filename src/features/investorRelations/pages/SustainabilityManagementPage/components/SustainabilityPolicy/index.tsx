import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { getStrapiImageUrl } from '@/libs/util'
import { SustainabilitySection } from '@/types/Sustainability'

export function SustainabilityPolicy({
  data,
}: {
  data: SustainabilitySection | null
}) {
  const t = useTranslations(
    'SustainabilityManagementPage.SustainabilityManagementPolicy'
  )

  if (!data) return null

  return (
    <section className='py-[88px] bg-white'>
      <Animation className='max-w-[950px] w-full mx-auto px-5'>
        <h2 className='headline-2 text-blue-400'>{t('sectionTitle')}</h2>
        <p className='mt-[16px] body-1 text-black-6 whitespace-pre-line'>
          {data.content}
        </p>

        {data.image && (
          <Image
            src={getStrapiImageUrl(data.image.url)}
            width={data.image.width}
            height={data.image.height}
            alt=''
            className='mt-[50px] w-full h-auto'
          />
        )}
      </Animation>
    </section>
  )
}
