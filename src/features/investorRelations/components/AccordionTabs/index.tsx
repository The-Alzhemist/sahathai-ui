import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { DownloadButton } from '@/components/DownloadButton'
import { AccordionTabsProps } from './interface'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
export const AccordionTabs = ({
  groupIndex,
  tabIndex,
  isOpen,
  tabItem,
  toggleTab,
}: AccordionTabsProps) => {
  const lang = useLocale()
  return (
    <div key={tabIndex} className='overflow-hidden'>
      {/* --- Tab Toggle Button --- */}
      <button
        onClick={() => toggleTab(groupIndex, tabIndex)}
        className='w-full flex justify-between items-center text-left px-4 py-3 h-[70px] text-darkGray border-l-[4px] border-l-blue-300 bg-gray-50 hover:bg-gray-100 transition'
      >
        <span>{tabItem.heading ? tabItem.heading : '-'}</span>
        {isOpen ? (
          <FaChevronDown className='text-blue-300' />
        ) : (
          <FaChevronRight className='text-blue-300' />
        )}
      </button>

      {/* --- Tab Content with Animation --- */}
      <div
        className='transition-all duration-500 ease-in-out overflow-hidden bg-white text-darkGray'
        style={{
          maxHeight: isOpen ? '2000px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className='p-4'>
          {tabItem.row?.map((rowItem, rowIndex) => (
            <div
              key={rowIndex}
              className='relative w-full flex justify-between border-left border-l-[2px] last:border-l-[2px] border-blue-300 last:border-white pl-5'
            >
              <div className='w-[15px] h-[15px] border-[2px] border-blue-300 rounded-full absolute -left-[1px] bg-white top-0 -translate-x-1/2'></div>

              <div className='mb-10 w-full'>
                <h3 className='text-sm text-gray-700 mb-5'>
                  {rowItem.heading !== '' ? rowItem.heading : '-'}
                </h3>

                {rowItem.youtubeUrl && (
                  <div className='w-full h-[300px]'>
                    <iframe
                      className='w-full h-full rounded-[30px]'
                      src={rowItem.youtubeUrl.replace('watch?v=', 'embed/')}
                      title={rowItem.heading}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {lang === 'th' && rowItem.file?.filename && (
                <div>
                  <DownloadButton
                    className={` ${
                      !rowItem.file.filename
                        ? 'opacity-30 pointer-events-none '
                        : ''
                    }`}
                    href={rowItem.file.filename}
                  />
                </div>
              )}

              {lang === 'en' && rowItem.englishFile?.filename && (
                <div>
                  <DownloadButton
                    className={` ${
                      !rowItem.englishFile.filename
                        ? 'opacity-30 pointer-events-none '
                        : ''
                    }`}
                    href={rowItem.englishFile.filename}
                  />
                </div>
              )}

              {lang === 'cn ' && rowItem.chineseFile?.filename && (
                <div>
                  <DownloadButton
                    className={` ${
                      !rowItem.chineseFile.filename
                        ? 'opacity-30 pointer-events-none '
                        : ''
                    }`}
                    href={rowItem.chineseFile.filename}
                  />
                </div>
              )}

              {/* Link */}
              {rowItem.externalLink && (
                <Link
                  href={rowItem.externalLink}
                  target='_blank'
                  className='mt-0.5 mx-3   min-w-[60px] h-fit block px-[19px] py-[4px] border border-blue-300 rounded-[10px] bg-blue-50 hover:scale-105 transition-all'
                >
                  <Image
                    src='/investor-relations/new/link-icon-3x.png'
                    width={20}
                    height={20}
                    alt='link-icon'
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
