import { Line } from '@/components/Line'
import { useTranslations } from 'next-intl'
import { Animation } from '@/components/Animation'
import Image from 'next/image'
import { getStrapiImageUrl } from '@/libs/util'
import { GovernanceStructure } from '@/types/GovernanceStructure'

export function OrganizationalStructure({
  data,
}: {
  data: GovernanceStructure
}) {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  return (
    <div>
      <h2 className='headline-2 text-navy'>
        {t('organizationalStructure.title')}
      </h2>
      <Line className='my-[8px]' />
      <p className='mt-[20px] text-black-6 body-1 whitespace-pre-line'>
        {data.description}
      </p>

      {data.chartImage && (
        <Animation className='w-full mt-[50px] shadow-8 rounded-[15px] overflow-hidden bg-white'>
          <Image
            src={getStrapiImageUrl(data.chartImage.url)}
            width={data.chartImage.width}
            height={data.chartImage.height}
            alt={t('organizationalStructure.title')}
            className='w-full h-auto'
          />
        </Animation>
      )}
    </div>
  )
}
