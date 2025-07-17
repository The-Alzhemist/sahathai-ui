import {useLocale, useTranslations} from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { LocaleButton } from '../LocaleButton'
import { DownloadButton } from '@/components/DownloadButton'

export function CompanyFactSheet() {
  const t = useTranslations('InvestorInformationPage.FactSheet')


  return (
    <Animation>
      <div className='flex items-center justify-between mb-5'>
        <h2
          className='headline-2 text-blue-400'
          id={InvestorInformationEnum.Factsheet}
        >
          {t('title')}
        </h2>
        {/*<LocaleButton />*/}
      </div>

      <div className='mt-[32px] w-full flex justify-between items-center mb-5 border border-gray-200 bg-gray-50 rounded-md  p-5'>
          <div>
            {t('detail')}
          </div>

        <div>
          <DownloadButton  className='mx-auto' href='https://sahathaiterminal.com/wp-content/uploads/2022/02/Company-Snapshot-9M-2021.pdf' />
        </div>

      </div>
    </Animation>
  )
}
