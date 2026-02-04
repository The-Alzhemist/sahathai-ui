import { useLocale, useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { LocaleButton } from '../LocaleButton'
import { DownloadButton } from '@/components/DownloadButton'
import Image from 'next/image'
import { DocumentIcon } from '@/components/icons/DocumentIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'

export function CompanyFactSheet() {
  const t = useTranslations('InvestorInformationPage.FactSheet')

  return (
    <Animation>
      <div className='w-full'>
        <section className='relative flex-1 w-full bg-white mx-auto  rounded-[10px] p-5 border border-blue-200 '>
          <h2
            className='headline-2 text-blue-400 mb-5 !text-2xl flex items-center gap-5'
            id={InvestorInformationEnum.Factsheet}
          >
            <DocumentIcon
              className='text-navy  text-[0px]'
              width='34'
              height='38'
            />{' '}
            {t('title')}
          </h2>

          <div className='  flex justify-between items-center font-light'>
            <div>{t('detail')}</div>

            <div>
              <DownloadButton
                className='mx-auto'
                href='https://a.storyblok.com/f/316761/x/1a86f1d2d5/company-snapshot-9m-2021.pdf'
              />
            </div>
          </div>
        </section>
      </div>
    </Animation>
  )
}
