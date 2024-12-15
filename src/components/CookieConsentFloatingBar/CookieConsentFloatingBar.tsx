'use client'

import { CookieConsentFloatingBarProps } from '@/components/CookieConsentFloatingBar/interface'
import withCookieConsentFloatingBar from './withCookieConsentFloatingBar'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const CookieConsentFloatingBar = ({
  handleOnClickAccept,
  isOpen,
}: CookieConsentFloatingBarProps) => {
  const t = useTranslations('CookieConsentFloatingBar')
  return (
    isOpen && (
      <section className={`flex justify-center shadow-2xl`}>
        <div className='bg-white sm:w-[90%] border-t-2 fixed z-50 bottom-0 md:bottom-10 p-5 sm:rounded-lg  w-full max-w-[800px] flex justify-between gap-x-5 flex-col sm:flex-row'>
          <div className='flex flex-col justify-center mb-5 sm:mb-0'>
            <div className='text-xl font-semibold mb-2'>{t('Title')}</div>
            <div className='text-sm font-light flex gap-x-2'>
              {t('Description')}
              {/* TODO:   href='/privacy-policy' need to change to navigate with locale */}
              <Link
                className='text-primary border-b border-primary'
                href='en/privacy-policy'
              >
                {t('ReadPolicy')}
              </Link>
            </div>
          </div>

          <div className='flex flex-row-reverse gap-x-3  justify-start sm:justify-center  sm:flex-col'>
            <button
              className=' w-[150px] h-[40px] sm:h-[40px] flex justify-center items-center bg-navy text-white rounded-full'
              onClick={() => handleOnClickAccept(true)}
            >
              {t('Accept')}
            </button>
            <div
              className='text-xs cursor-pointer absolute top-1 
                    right-2 text-gray-400 bg-transparent'
              onClick={() => handleOnClickAccept(false)}
            >
              X
            </div>
          </div>
        </div>
      </section>
    )
  )
}

const WrappedComponent = withCookieConsentFloatingBar(CookieConsentFloatingBar)
export default WrappedComponent
