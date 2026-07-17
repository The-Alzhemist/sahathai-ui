import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { Line } from '@/components/Line'

type CompanyItem = {
  percent: string
  code: string
  name: string
}

const COMPANY_CODE_LETTER_COLORS: Record<string, string[]> = {
  BBT: ['text-navy', 'text-navy', 'text-primary'],
  BCDS: ['text-navy', 'text-navy', 'text-primary', 'text-secondary'],
  BTS: ['text-navy', 'text-primary', 'text-secondary'],
  BBS: ['text-navy', 'text-primary', 'text-[#F5A623]'],
  BLP: ['text-navy', 'text-navy', 'text-navy'],
}

const COMPANY_CODE_NOT_ITALIC = ['BLP']

function CompanyCodeLogo({ code }: { code: string }) {
  const colors = COMPANY_CODE_LETTER_COLORS[code] ?? code.split('').map(() => 'text-navy')
  const isItalic = !COMPANY_CODE_NOT_ITALIC.includes(code)

  return (
    <span
      className={`font-black text-3xl tracking-[-0.06em] leading-none ${isItalic ? 'italic' : ''}`}
    >
      {code.split('').map((letter, index) => (
        <span key={index} className={colors[index] ?? 'text-navy'}>
          {letter}
        </span>
      ))}
    </span>
  )
}

export function CorporateGroup() {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  const subsidiaries = t.raw('chart.subsidiaries') as CompanyItem[]
  const associates = t.raw('chart.associates') as CompanyItem[]
  const subsidiaryDetails = t.raw('chart.subsidiaryDetails') as string[]
  const associateDetails = t.raw('chart.associateDetails') as string[]

  return (
    <div>
      <h2 className='text-navy headline-2'>{t('corporateGroup')}</h2>
      <Line className='my-[8px]' />

      <Animation className='w-full mt-[50px] shadow-8 rounded-[15px] overflow-hidden bg-white'>
        <div className='px-5 py-[40px] md:px-[60px] md:py-[60px]'>
          {/* Parent company */}
          <div className='flex flex-col items-center'>
            <Image
              src='/logo.png'
              width={140}
              height={34}
              alt='Sahathai Terminal'
            />
            <div className='w-full max-w-[420px] flex items-center my-4'>
              <hr className='flex-1 border-t-[3px] border-t-blue-300' />
              <hr className='flex-1 border-t-[3px] border-t-red-300' />
            </div>
            <p className='body-2 font-semibold text-navy text-center'>
              {t('chart.parentCompany')}
            </p>
            <div className='w-full max-w-[420px] flex items-center mt-4'>
              <hr className='flex-1 border-t-[3px] border-t-blue-300' />
              <hr className='flex-1 border-t-[3px] border-t-red-300' />
            </div>
          </div>

          {/* Branch connectors */}
          <div className='relative h-[60px] hidden md:block'>
            {/* center stem down from company name */}
            <div className='absolute left-1/2 -translate-x-1/2 top-0 h-[30px] border-l-2 border-dashed border-secondary/60' />
            {/* horizontal split */}
            <div
              className='absolute top-[30px] border-t-2 border-dashed border-secondary/60'
              style={{ left: 'calc(25% - 10px)', right: 'calc(25% - 10px)' }}
            />
            {/* drops into each column label */}
            <div
              className='absolute top-[30px] h-[30px] border-l-2 border-dashed border-secondary/60'
              style={{ left: 'calc(25% - 10px)' }}
            />
            <div
              className='absolute top-[30px] h-[30px] border-l-2 border-dashed border-secondary/60'
              style={{ right: 'calc(25% - 10px)' }}
            />
          </div>

          {/* Two columns: subsidiaries / associates */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-[30px] md:mt-0'>
            <div className='flex flex-col items-center'>
              <span className='inline-block border border-dashed border-secondary text-secondary rounded-[6px] px-5 py-[6px] body-2 font-semibold'>
                {t('chart.subsidiaryLabel')}
              </span>

              <div className='mt-6 w-full space-y-6'>
                {subsidiaries.map(item => (
                  <div
                    key={item.code}
                    className='border-b-2 border-secondary pb-4 text-center md:text-left'
                  >
                    <div className='flex items-center gap-2 justify-center md:justify-start'>
                      <span className='font-bold text-black-3 text-sm'>
                        {item.percent}
                      </span>
                      <CompanyCodeLogo code={item.code} />
                    </div>
                    <p className='text-sm text-black-6 mt-1'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <span className='inline-block border border-dashed border-secondary text-secondary rounded-[6px] px-5 py-[6px] body-2 font-semibold'>
                {t('chart.associateLabel')}
              </span>

              <div className='mt-6 w-full space-y-6'>
                {associates.map(item => (
                  <div
                    key={item.code}
                    className='border-b-2 border-secondary pb-4 text-center md:text-left'
                  >
                    <div className='flex items-center gap-2 justify-center md:justify-start'>
                      <span className='font-bold text-black-3 text-sm'>
                        {item.percent}
                      </span>
                      <CompanyCodeLogo code={item.code} />
                    </div>
                    <p className='text-sm text-black-6 mt-1'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Animation>

      <Animation className='w-full mt-[30px]'>
        <p className='body-1 text-black-6'>{t('chart.summary')}</p>

        <h3 className='headline-5 text-secondary mt-[24px]'>
          {t('chart.subsidiaryDetailsTitle')}
        </h3>
        <ol className='mt-[12px] space-y-4 list-decimal pl-5'>
          {subsidiaryDetails.map((detail, index) => (
            <li key={index} className='body-1 text-black-6'>
              {detail}
            </li>
          ))}
        </ol>

        <h3 className='headline-5 text-secondary mt-[32px]'>
          {t('chart.associateDetailsTitle')}
        </h3>
        <ol className='mt-[12px] space-y-4 list-decimal pl-5'>
          {associateDetails.map((detail, index) => (
            <li key={index} className='body-1 text-black-6'>
              {detail}
            </li>
          ))}
        </ol>
      </Animation>
    </div>
  )
}
