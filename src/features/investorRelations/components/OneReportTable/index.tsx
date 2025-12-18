import { useTranslations } from 'next-intl'
import { DownloadButton } from '@/components/DownloadButton'
import { oneReportInformationList } from '@/features/investorRelations/components/OneReportTable/oneReportInformationList'

export function OneReportTable() {
  const common = useTranslations('common')
  const t = useTranslations('InvestorInformationPage.OneReportTable')
  const investorTranslate = useTranslations(
    'InvestorInformationPage.OneReportTable'
  )

  return (
    <div
      role='region'
      aria-label='One Report Table'
      className='w-full overflow-x-auto  px-4 md:mx-auto pb-[350px]  z-10'
      style={{ WebkitOverflowScrolling: 'touch' }} // iOS momentum scroll
    >
      <div className='min-w-[720px] md:min-w-0 max-w-[860px] mx-auto shadow-6 rounded-[20px] bg-white p-5 md:p-6'>
        {/* Header */}
        <div className='p-4 grid grid-cols-[120px,1fr,1fr,1fr] md:grid-cols-[160px,1fr,1fr,1fr] gap-x-4 mb-3'>
          <div className='subtitle-1 text-darkGray !font-normal'>
            {common('year')}
          </div>
          <div className='subtitle-1 text-darkGray !font-normal text-center'>
            {t('AnnualReport')}
          </div>
          <div className='subtitle-1 text-darkGray !font-normal text-center'>
            {t('56-1oneReport')}
          </div>
          <div className='subtitle-1 text-darkGray !font-normal text-right'>
            {t('56-1OneReport')}
          </div>
        </div>

        {/* Body */}
        <div className='rounded-[20px] border border-[#CFE6FF] bg-[#F9FCFF] p-4 md:p-5'>
          <div className='divide-y divide-[#E6F2FF]'>
            {oneReportInformationList.map((item, idx) => (
              <div
                key={idx}
                className='grid grid-cols-[120px,1fr,1fr,1fr] md:grid-cols-[160px,1fr,1fr,1fr] gap-x-4 py-5 items-center'
              >
                <div>
                  <div className='small-medium text-black-2'>
                    {item.year + 543}
                  </div>
                  <div className='small-reg text-dark-40'>{item.year}</div>
                </div>

                <div className='flex justify-start md:justify-center'>
                  {item.annualReportUrl ? (
                    <DownloadButton
                      className='md:mx-auto'
                      href={item.annualReportUrl}
                    />
                  ) : (
                    <span>-</span>
                  )}
                </div>

                <div className='flex justify-start md:justify-center'>
                  {item.report56Url ? (
                    <DownloadButton
                      className='md:mx-auto'
                      href={item.report56Url}
                    />
                  ) : (
                    <span>-</span>
                  )}
                </div>

                <div className='flex justify-end'>
                  {item.oneReportUrl ? (
                    <DownloadButton href={item.oneReportUrl} />
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
