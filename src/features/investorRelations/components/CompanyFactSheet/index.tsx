import { useTranslations } from 'next-intl'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { DownloadButton } from '@/components/DownloadButton'
import { DocumentIcon } from '@/components/icons/DocumentIcon'
import { MailIcon } from '@/components/icons/MailIcon'

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
                href='https://storage.googleapis.com/sahathai-cms-uploads-510409/company_snapshot_9m_2021_6ccbb7c485/company_snapshot_9m_2021_6ccbb7c485.pdf'
              />
            </div>
          </div>

          <div className='mt-10 pt-4 text-center font-light border-t-[1px] border-blue-200'>
            <MailIcon className='mx-auto h-8 w-8 text-navy' />
            <h3 className='mt-3 font-semibold'>{t('Contact.title')}</h3>
            <p className='mt-2'>{t('Contact.detail')}</p>
            <p>{t('Contact.coordinator')}</p>
            <p>{t('Contact.phone')}</p>
          </div>
        </section>
      </div>
    </Animation>
  )
}
