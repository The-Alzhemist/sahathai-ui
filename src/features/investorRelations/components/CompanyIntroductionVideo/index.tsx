import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { LocaleButton } from '../LocaleButton'

export function CompanyIntroductionVideo() {
  const t = useTranslations('InvestorInformationPage.CompanyIntroductionVideo')
  const videoId = 'dAqJn2fXyHI'

  return (
    <Animation>
      <div className='flex items-center justify-between'>
        <h2
          className='headline-2 text-blue-400'
          id={InvestorInformationEnum.CompanyIntroductionVideo}
        >
          {t('title')}
        </h2>
        <LocaleButton />
      </div>

      <div className='mt-[32px] w-full flex justify-center'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-[90%] md:w-full aspect-video'
        ></iframe>
      </div>
    </Animation>
  )
}
