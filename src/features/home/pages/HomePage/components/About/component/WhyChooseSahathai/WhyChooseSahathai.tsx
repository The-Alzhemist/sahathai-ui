import { useTranslations } from 'next-intl'
import Image from 'next/image'

export   const WhyChooseSahathai = () => {
  const t = useTranslations('HomePage.About')

  return <section className='flex justify-between flex-col lg:flex-row items-center max-w-[1040px] gap-5 mx-auto '>
    <div>
      <div className='flex gap-4 items-center '><div className='w-[40px] h-[3px] bg-red-400'></div><span className='text-2xl text-blue-400 font-light'>สหไทย เทอร์มินอล</span></div>
      <p
        className='!prompt border-black-6 font-light text-darkGray py-[8.5px] !leading-[29px] max-w-[285px]'>
        {t('content')}
      </p>
    </div>

    <div className='flex gap-5 min-h-[340px] flex-wrap justify-center'>
      <Image
        className='self-start rounded-[30px]'
        src="https://placehold.co/153x290"
        width={153}
        height={290}
        alt=""
        unoptimized
      />
      <Image
        className='self-end rounded-[30px]'
        src="https://placehold.co/153x290"
        width={153}
        height={290}
        alt=""
        unoptimized
      />
      <Image
        className='self-start rounded-[30px]'
        src="https://placehold.co/153x290"
        width={153}
        height={290}
        alt=""
        unoptimized
      />
      <Image
        className='self-end rounded-[30px]'
        src="https://placehold.co/153x290"
        width={153}
        height={290}
        alt=""
        unoptimized
      />
    </div>

  </section>
}

