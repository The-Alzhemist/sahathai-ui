import Image from 'next/image'

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { Link } from '@/libs/intl/navigation'
import { ComprehensiveCommercialPortCardProps } from './interface'
import { useTranslations } from 'next-intl'

export function ComprehensiveCommercialPortCard({
  title,
  content,
  imageUrl,
  link,
}: ComprehensiveCommercialPortCardProps) {
  const t = useTranslations('common')

  return (
    <div className='w-[330px] rounded-[10px] overflow-hidden shadow-8 bg-white'>
      <div className='w-full'>
        <div className='relative pt-[63.64%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <div className='py-[22px] px-[30px] h-[240px] relative'>
        <h3 className='text-navy headline-6 !leading-[20px] flex items-center whitespace-nowrap'>
          {title}
        </h3>
        <p className='mt-[16px] line-clamp-4 body-2 text-black-6'>{content}</p>
        <Link
          className='absolute bottom-[22px] mt-auto flex gap-[10px] items-center text-primary w-fit transition-all hover:scale-125'
          href={link}
        >
          <div className='rounded-full bg-primary'>
            <ArrowRightIcon
              className='m-[10px] text-white'
              width='20'
              height='20'
            />
          </div>
          {t('readMore')}
        </Link>
      </div>
    </div>
  )
}
