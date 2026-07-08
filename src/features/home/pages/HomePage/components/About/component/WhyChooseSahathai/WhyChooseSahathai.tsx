'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'

const portraits = [
  { src: '/home/new/home-portrait-1.webp', self: 'self-start' },
  { src: '/home/new/home-portrait-2.webp', self: 'self-end' },
  { src: '/home/new/home-portrait-3-2x.webp', self: 'self-start' },
  { src: '/home/new/home-portrait-4.webp', self: 'self-end' },
]

export const WhyChooseSahathai = () => {
  const t = useTranslations('HomePage.About')

  return (
    <section className='flex justify-between flex-col lg:flex-row items-center max-w-[1040px] gap-5 mx-auto '>
      <div>
        <div className='flex gap-4 items-center '>
          <div className='w-[40px] h-[3px] bg-red-400'></div>
          <span className='text-2xl text-blue-400 font-light'>
            {t('title')}
          </span>
        </div>
        <p className='!prompt border-black-6 font-light text-darkGray py-[8.5px] !leading-[29px] max-w-[247px]'>
          {t('content')}
        </p>
      </div>

      <div className='flex gap-5 min-h-[340px] flex-wrap justify-center'>
        {portraits.map((portrait, index) => (
          <motion.div
            key={portrait.src}
            className={portrait.self}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Image
              className='rounded-[30px]'
              src={portrait.src}
              width={153}
              height={290}
              alt={`home-portrait-${index + 1}`}
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
