import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { Menu } from '@/components/Menu'
import { ComprehensiveCommercialPortDetailProps } from './interface'

export function ComprehensiveCommercialPortDetail({
  title,
  imageUrl,
  content,
}: ComprehensiveCommercialPortDetailProps) {
  const common = useTranslations('common')

  return (
    <main>
      <Menu />
      <section className='max-w-[1040px] w-full mx-auto pt-[130px] pb-[74px]'>
        <div className='flex gap-[16px] justify-between items-center'>
          <h1 className='text-[32px] font-[500] text-navy flex items-center'>
            {title}
          </h1>
          <Link
            className='px-[20px] py-[10px] rounded-full button-small text-lightGray border border-black-8'
            href='/services'
          >
            {common('back')}
          </Link>
        </div>
        <div className='mt-[22px] p-[30px] rounded-[15px] shadow-8 bg-white'>
          <div className='max-w-[980px] w-full'>
            <div className='relative pt-[63.47%] w-full'>
              <Image src={imageUrl} alt='' fill />
            </div>
          </div>
          <p className='body-1 text-black-6 mt-[25px]'>{content}</p>
        </div>
      </section>
    </main>
  )
}
