'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import { AccordionTabs } from '../../components/AccordionTabs'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok, TabStoryblok } from '@/types/storyblok'

export function ShareHolderMeetingPage({
  shareHolderMeetingData,
}: ShareHolderMeetingPageProps) {
  const tMenu = useTranslations('Menu')

  const [openTabs, setOpenTabs] = useState<Record<number, number[]>>({})

  if (!shareHolderMeetingData) {
    return <div>No data</div>
  }

  const group =
    (shareHolderMeetingData.story.content.body[0].group as GroupStoryblok[]) ||
    []

  const toggleTab = (groupIndex: number, tabIndex: number) => {
    setOpenTabs(prev => {
      const groupOpenTabs = prev[groupIndex] || []
      const newOpenTabs = groupOpenTabs.includes(tabIndex)
        ? groupOpenTabs.filter(i => i !== tabIndex)
        : [...groupOpenTabs, tabIndex]
      return { ...prev, [groupIndex]: newOpenTabs }
    })
  }

  return (
    <main className='pb-[176px] bg-white'>
      <Menu />
      <BannerImage
        mobileImageSrc='/investor-relations/new/investor-banner-mobile-5.webp'
        imageSrc='/investor-relations/new/investor-banner-5.webp'
        alt='investor-banner-5'
      />

      <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
        <h1 className='text-lg md:text-3xl mb-7 text-blue-400 text-center'>
          {tMenu('investorRelations.shareHolderMeeting')}
        </h1>
        {group.map((groupItem: GroupStoryblok, groupIndex: number) => (
          <div key={groupIndex} className=' rounded-md p-4'>
            <h2 className='   text-left text-lg mb-7 text-blue-400 '>
              {groupItem.heading}
            </h2>

            <div className='space-y-4'>
              {groupItem.tab?.map((tabItem: TabStoryblok, tabIndex: number) => {
                const isOpen = openTabs[groupIndex]?.includes(tabIndex) || false
                return (
                  <AccordionTabs
                    tabIndex={tabIndex}
                    key={tabIndex}
                    groupIndex={groupIndex}
                    toggleTab={toggleTab}
                    tabItem={tabItem}
                    isOpen={isOpen}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
