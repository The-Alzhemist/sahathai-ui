'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import { AccordionTabs } from '../../components/AccordionTabs'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'

export function ShareHolderMeetingPage({
  shareHolderMeetingData,
}: ShareHolderMeetingPageProps) {
  const tMenu = useTranslations('Menu')

  const [openTabs, setOpenTabs] = useState<Record<number, number[]>>({})

  if (!shareHolderMeetingData) {
    return <div>No data</div>
  }

  const group = shareHolderMeetingData.story.content.body[0].group || []

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
        imageSrc='/investor-relations/new/investor-banner-5.webp'
        alt='investor-banner-5'
      />

      <section className='px-5 pb-5  pt-[100px] max-w-4xl mx-auto space-y-6'>
        {group.map((groupItem: any, groupIndex: number) => (
          <div key={groupIndex} className=' rounded-md p-4'>
            {/* --- Group Header (always visible) --- */}
            <h2 className=' text-lg md:text-3xl mb-7 text-blue-400 text-center '>
              {groupItem.heading}
            </h2>

            <div className='space-y-4'>
              {groupItem.tab?.map((tabItem: any, tabIndex: number) => {
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
