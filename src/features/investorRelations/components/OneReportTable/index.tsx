import { useTranslations } from 'next-intl'
import { DownloadButton } from '@/components/DownloadButton'
import { getStrapiImageUrl } from '@/libs/util'
import { AnnualReport } from '@/types/AnnualReport'

// CMS stores the Gregorian year (Buddhist = year + 543); tolerate Buddhist values too.
const toBuddhistYear = (year: number) => (year > 2400 ? year : year + 543)

export function OneReportTable({ data }: { data: AnnualReport[] }) {
  const common = useTranslations('common')
  const t = useTranslations('InvestorInformationPage.OneReportTable')

  return (
    <div
      role='region'
      aria-label='One Report Table'
      className='w-full overflow-x-auto  px-4 md:mx-auto pb-[200px]  z-10'
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
            {data.map(item => (
              <div
                key={item.id}
                className='grid grid-cols-[120px,1fr,1fr,1fr] md:grid-cols-[160px,1fr,1fr,1fr] gap-x-4 py-5 items-center'
              >
                <div>
                  <div className='small-medium text-black-2'>
                    {toBuddhistYear(item.year)}
                  </div>
                  <div className='small-reg text-dark-40'>
                    {toBuddhistYear(item.year) - 543}
                  </div>
                </div>

                <div className='flex justify-start md:justify-center'>
                  {item.annualReport?.file ? (
                    <DownloadButton
                      className='md:mx-auto'
                      href={getStrapiImageUrl(item.annualReport.file.url)}
                    />
                  ) : (
                    <span>-</span>
                  )}
                </div>

                <div className='flex justify-start md:justify-center'>
                  {item.report56_1?.file ? (
                    <DownloadButton
                      className='md:mx-auto'
                      href={getStrapiImageUrl(item.report56_1.file.url)}
                    />
                  ) : (
                    <span>-</span>
                  )}
                </div>

                <div className='flex justify-end'>
                  {item.oneReport?.file ? (
                    <DownloadButton
                      href={getStrapiImageUrl(item.oneReport.file.url)}
                    />
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
