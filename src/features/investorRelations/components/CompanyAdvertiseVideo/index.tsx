import { useTranslations } from 'next-intl'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'

export function CompanyAdvertiseVideo() {
  const t = useTranslations('InvestorInformationPage.CompanyAdvertiseVideo')
    const videoId =  'OTesRI1fvWI'

  return (
    <Animation>
      <div className='max-w-[980px] mx-auto flex items-center justify-center mb-5'>
        <h2
          className='headline-2 text-white text-center'
          id={InvestorInformationEnum.CompanyAdvertiseVideo}
        >
          {t('title')}
        </h2>
        {/*<LocaleButton />*/}
      </div>

      <div className='mt-[32px] w-full max-w-[980px] mx-auto  flex justify-center mb-5 border-8 md:border-[20px] rounded-[20px] border-white overflow-hidden bg-white'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='max-w-[980px] rounded-[20px] aspect-video'
        ></iframe>
      </div>
    </Animation>
  )
}
