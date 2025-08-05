'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { DownloadButton } from '@/components/DownloadButton'

export function ShareHolderMeetingPage({ shareHolderMeetingData }: ShareHolderMeetingPageProps) {
  const t = useTranslations('InvestorInformationPage.ShareHolderMeeting')
  const tMenu = useTranslations('Menu')

  // State to track open tabs per group
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
    <main className="pb-[176px] bg-white">
      <Menu />
      <Banner
        imagePath="/about-us/banner.png"
        alt={tMenu('investorRelations.shareHolderMeeting')}
        caption={tMenu('investorRelations.shareHolderMeeting')}
      />

      <section className="p-5 max-w-4xl mx-auto space-y-6">
        {group.map((groupItem: any, groupIndex: number) => (
          <div key={groupIndex} className=" rounded-md p-4">
            {/* --- Group Header (always visible) --- */}
            <h2 className=" text-lg md:text-3xl mb-7 text-blue-400 text-center ">
              {groupItem.heading}
            </h2>

            <div className="space-y-4">
              {groupItem.tab?.map((tabItem: any, tabIndex: number) => {
                const isOpen = openTabs[groupIndex]?.includes(tabIndex) || false
                return (
                  <div
                    key={tabIndex}
                    className="  overflow-hidden"
                  >
                    {/* --- Tab Toggle Button --- */}
                    <button
                      onClick={() => toggleTab(groupIndex, tabIndex)}
                      className="w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <span>{tabItem.heading}</span>
                      {isOpen ? <FaChevronDown className='text-blue-300' /> : <FaChevronRight className='text-blue-300' />}
                    </button>

                    {/* --- Tab Content with Animation --- */}
                    <div
                      className="transition-all duration-500 ease-in-out overflow-hidden bg-white text-darkGray"
                      style={{
                        maxHeight: isOpen ? '1000px' : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="p-4 ">
                        {tabItem.row?.map((rowItem: any, rowIndex: number) => (
                          <div
                            key={rowIndex}
                            className="relative w-full flex  justify-between  border-left border-l-[2px] last:border-l-[2px] border-blue-300 last:border-white  pl-5"
                          >
                            <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-0 -translate-x-1/2  '>
                            </div>

                            <div className='mb-10 w-full'>
                              {rowItem.heading && (
                                <h3 className="text-sm text-gray-700 mb-5">
                                  {rowItem.heading}
                                </h3>
                              )}

                              {/* --- YouTube iframe --- */}
                              {rowItem.youtubeUrl && (
                                <div className="w-full h-[300px]">
                                  <iframe
                                    className="w-full h-full rounded-[30px]"
                                    src={rowItem.youtubeUrl.replace('watch?v=', 'embed/')}
                                    title={rowItem.heading}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              )}

                            </div>


                            {rowItem.file?.filename && (
                              <div>
                                <DownloadButton
                                  className={` ${!rowItem.file.filename ? 'opacity-30 pointer-events-none ' : ''}`}
                                  href={rowItem.file.filename}
                                />
                              </div>
                            )}

                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
