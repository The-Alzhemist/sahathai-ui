'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { CodeOfConductPageProps } from '@/features/investorRelations/pages/CodeConductPage'
import { GroupStoryblok } from '@/types/storyblok'

import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { ContactUsForm } from '@/components/ContactUs/ContactUsForm'

export function CodeOfConductPage({
  conOdConductData,
}: CodeOfConductPageProps) {
  useRouter()
  const t = useTranslations('CodeConductPage')

  if (!conOdConductData) {
    return <div>No data</div>
  }
  const group =
    (conOdConductData.story.content.body[0].group as GroupStoryblok[]) || []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`code-of-conduct-${Date.now()}`}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-4.webp'
            imageSrc='/investor-relations/new/investor-banner-4.webp'
            alt='investor-banner-4'
          />

          <section className='px-5 pb-5 pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-10 text-blue-400 text-center'>
              {t('title')}
            </h1>
            <GroupAccordionTabs pageKey='code-of-conduct' group={group} />
          </section>
          <section className='px-5 pb-5 pt-[50px] max-w-4xl mx-auto space-y-6'>
            <ContactUsForm hideContactForm />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
