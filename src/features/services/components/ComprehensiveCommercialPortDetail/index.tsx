import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { Menu } from '@/components/Menu'
import { ComprehensiveCommercialPortDetailProps } from './interface'
import { Card } from './Card'

export function ComprehensiveCommercialPortDetail({
  title,
  data,
}: ComprehensiveCommercialPortDetailProps) {
  const common = useTranslations('common')

  return (
    <main>
      <Menu />
      <section className='max-w-[1040px] w-full mx-auto pt-[130px] pb-[74px] px-3'>
        <div className='flex flex-col md:flex-row  gap-[16px] justify-between items-center '>
          <h1 className='text-xl md:text-[32px] font-[500] text-navy flex items-center'>
            {title}
          </h1>
          <Link
            className='px-[20px] py-[10px] rounded-full button-small text-lightGray border border-black-8 hover:text-blue-300 hover:border-blue-300 transition-all'
            href='/services'
          >
            {common('back')}
          </Link>
        </div>
        {data.map((row, index) => (
          <Card
            key={index}
            title={row.title}
            imageUrl={row.imageUrl}
            contents={row.contents}
          />
        ))}
      </section>
    </main>
  )
}
