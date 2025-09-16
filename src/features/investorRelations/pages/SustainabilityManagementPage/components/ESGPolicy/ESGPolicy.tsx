import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { DownloadButtonOutline } from '@/components/DownloadButtonOutLine'
import { Fragment } from 'react'

export default function ESGPolicy() {
  const t = useTranslations(
    'SustainabilityManagementPage.SustainabilityManagementPolicy'
  )
  const tManagementByYear = useTranslations(
    'SustainabilityManagementPage.ManagementPolicyYear'
  )
  return (
    <Fragment>
      <main className="w-full">
        {/* HERO */}
        <section className="relative w-full h-[356px] ">
          {/* Background image */}
          <Image
            src="/investor-relations/coffee-meeting-bg.webp"
            alt="ทีมงานวางมือซ้อนกันบนโต๊ะประชุม สื่อถึงการบริหารจัดการด้านความยั่งยืน"
            fill
            className="object-cover"
            sizes="100vw"
          />

          {/* Right gradient overlay to make text readable */}

          {/* Content (aligned right) */}
          <div className="absolute inset-0">
            <div className="mx-auto h-full w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
              <div className="flex h-full items-center justify-end">
                <div className="text-white max-w-[560px] w-full">
                  {/* Heading with small leaf icon */}
                  <div className="flex justify-center md:justify-end  items-center gap-3 mb-3 sm:mb-4">
                    {/*<LeafIcon className="w-5 h-5 shrink-0" />*/}
                    <h1 className="font-light text-[20px] md:text-[24px]  leading-tight">
                      {t('title')}
                    </h1>
                  </div>

                  {/* Body */}
                  {/*<p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">*/}
                  {/*  {t('description')}*/}
                  {/*</p>*/}

                  {/* CTA button */}
                  {/*<div>*/}
                  {/*  <DownloadButtonOutline href={'xxx'} />*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*<main className="w-full">*/}
      {/*  /!* HERO *!/*/}
      {/*  <section className="relative w-full h-[220px] ">*/}
      {/*    /!* Background image *!/*/}
      {/*    <Image*/}
      {/*      src="/investor-relations/hand-check-bg.webp"*/}
      {/*      alt="ทีมงานวางมือซ้อนกันบนโต๊ะประชุม สื่อถึงการบริหารจัดการด้านความยั่งยืน"*/}
      {/*      fill*/}
      {/*      className="object-cover"*/}
      {/*      sizes="100vw"*/}
      {/*    />*/}

      {/*    <div className="absolute inset-0  max-w-[1000px] mx-auto">*/}
      {/*      <div className='flex justify-between items-center max-w-[990px]  h-full w-full mx-auto px-5'>*/}
      {/*        <div className='text-white flex gap-5 items-center flex-col md:flex-col text-center md:text-left'>*/}
      {/*          {t('title')}  <DownloadButtonOutline href={'https://sahathaiterminal.com/wp-content/uploads/2022/02/Company-Snapshot-9M-2021.pdf'} />*/}

      {/*        </div>*/}

      {/*        <div className='text-white flex gap-5 items-center flex-col md:flex-col text-center md:text-left'>*/}
      {/*          {tManagementByYear('2567')}*/}
      {/*          <DownloadButtonOutline href={'https://sahathaiterminal.com/wp-content/uploads/2022/02/Company-Snapshot-9M-2021.pdf'} />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </section>*/}
      {/*</main>*/}
    </Fragment>
  )
    ;
}