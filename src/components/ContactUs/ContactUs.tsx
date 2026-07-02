'use client'
import { useTranslations } from 'next-intl'

import { ContactUsProps } from './interface'

import { TelephoneIcon } from '../icons/TelephoneIcon'
import { PrinterIcon } from '../icons/PrinterIcon'
import { LocationIcon } from '../icons/LocationIcon'
import { Animation } from '../Animation'

import withContactUs from '@/components/ContactUs/withContactUs'
import Link from 'next/link'
import { Menu } from '@/components/Menu'
import { ContactUsForm } from './ContactUsForm'

const ContactUs = ({ className, isShowMenuBar = false }: ContactUsProps) => {
  const t = useTranslations('ContactUs')

  return (
    <Animation className={className} key={`contact-us-${Date.now()}`}>
      {isShowMenuBar && <Menu />}
      <section className='container-mini pt-[96px] space-y-[52px]'>
        <h2
          className='w-full text-center text-[32px] leading-[48.38px] font-[500] text-navy'
          id='contact-us'
        >
          {t('title')}
        </h2>
        <ContactUsForm />
        <section className='flex overflow-hidden rounded-[10px] bg-[#F7F9FC] mobile:flex-col'>
          <div className='flex items-center justify-center px-10  shrink-0  mobile:w-full mobile:p-5'>
            <div className='rounded-[14px] bg-white p-[24px] shadow-6 md:w-[300px]'>
              <div className='flex  items-center gap-[14px]'>
                <div className='flex  h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#E8F4FF]'>
                  <LocationIcon className='h-[24px] w-[24px]' />
                </div>
                <h3 className='text-md font-[600]  text-navy mobile:text-[20px] mobile:leading-[30px]'>
                  Sahathai Terminal <br />
                  (Head Office)
                </h3>
              </div>

              <div className='mt-[18px] space-y-[10px] text-[14px] font-[500] leading-[20px] text-[#60666F]'>
                <div className='flex items-center gap-[10px]'>
                  <TelephoneIcon className='h-[18px] w-[18px]' />
                  <span>โทรศัพท์: +66 (0) 2386 8000</span>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <PrinterIcon className='h-[18px] w-[18px]' />
                  <span>อีเมล: info@sahathaiterminal.com</span>
                </div>
              </div>
              <Link
                href='https://maps.app.goo.gl/gmcqzcVK9Ucox9Am7'
                target='_blank'
                className='mt-[24px] flex h-[60px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-white text-[16px] font-[600] text-secondary shadow-6'
              >
                <LocationIcon className='h-[18px] w-[18px]' />
                {t('getDirection')}
              </Link>
            </div>
          </div>
          <div className='min-w-0 flex-1'>
            <iframe
              className='h-[450px] w-full border-0 mobile:h-[320px]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0414378335654!2d100.5412016753903!3d13.655243299521123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a19a77eec8cd%3A0xc3d0c1f510b50313!2sSahathai%20Terminal%20(Head%20Office)!5e0!3m2!1sen!2sth!4v1779070830024!5m2!1sen!2sth'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
              title='Sahathai Terminal location map'
            />
          </div>
        </section>
      </section>
    </Animation>
  )
}

const WrappedComponent = withContactUs(ContactUs)
export default WrappedComponent
