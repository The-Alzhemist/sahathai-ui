import { getTranslations } from 'next-intl/server'

import { Link } from '@/libs/intl/navigation'
import { ArrowRightCircleIcon } from '@/components/icons/ArrowRightCircleIcon'
import { Animation } from '@/components/Animation'
import { getServices } from '@/libs/strapi/service'
import { getStrapiImageUrl } from '@/libs/util'
import { HomePageProps } from '@/features/home/pages/HomePage/withHomePage'
import { ServiceCard } from '../ServiceCard'

export async function Service({ params }: HomePageProps) {
  const t = await getTranslations('HomePage.Service')
  const common = await getTranslations('common')

  const { data: services } = await getServices(params.locale)

  return (
    <section className=' py-[62px] bg-modellBgDark'>
      <h2 className='headline-2 text-white text-center container-mini'>
        {t('title')}
      </h2>

      <Animation className='mt-[80px] w-full container-mini'>
        <div className='flex justify-center flex-wrap gap-x-[24px] gap-y-[75px]'>
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              content={service.description}
              imageUrl={service.icon ? getStrapiImageUrl(service.icon.url) : ''}
              imageSize={70}
            />
          ))}
        </div>

        <Link
          className='mt-[40px] flex gap-[20px] subtitle-1 text-white items-center  w-fit mx-auto transition-all hover:scale-125'
          href='/services'
        >
          {common('seeMore')}
          <div className='bg-blue-300 rounded-full'>
            <ArrowRightCircleIcon width='40' height='40' />
          </div>
        </Link>
      </Animation>
    </section>
  )
}
