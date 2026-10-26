import { useTranslations } from 'next-intl'

import { Card } from '@/features/services/components/Card'
import { getStrapiImageUrl } from '@/libs/util'
import { Machinery } from '@/types/Machinery'

export function MachineryEquipment({ data }: { data: Machinery[] }) {
  const t = useTranslations('InfrastructureContainersPage.MachineryEquipment')

  return (
    <section className='relative pt-[100px]' id='machinery-equipment'>
      <h2 className='prompt text-xl md:text-[40px] font-[500] text-center text-navy'>
        {t('title')}
      </h2>
      <div className='mt-[50px] space-y-[20px] max-w-[1082px] w-full mx-auto px-5'>
        {data.map((machinery, index) => (
          <Card
            key={machinery.id}
            imageUrl={
              machinery.image ? getStrapiImageUrl(machinery.image.url) : ''
            }
            title={machinery.title}
            subtitle={machinery.subtitle ?? ''}
            content={machinery.description}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}
