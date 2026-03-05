import { Link } from '@/libs/intl/navigation'
import { FacebookIcon } from '../icons/FacebookIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
import { useLocale, useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className='flex flex-col justify-between py-6 px-10 bg-blue-400 text-white body-s'>
      <section className='flex justify-between w-full mb-5'>
        <span> info@sahathaiterminal.com @2025. All rights reserved.</span>
        <div className='flex gap-x-[16px]'>
          <Link
            href='https://www.youtube.com/channel/UCp2XYZiyDSN6Xt5DSQv_foA/videos?view=0&sort=dd&shelf_id=0'
            target='_blank'
            rel='noopener noreferrer'
          >
            <YoutubeIcon width='24' height='24' />
          </Link>
          <Link
            href='https://www.facebook.com/sahathaiterminal/?locale=th_TH'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon width='24' height='24' />
          </Link>
          <Link
            href='https://www.instagram.com/sahathaiterminal/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon width='24' height='24' />
          </Link>
        </div>
      </section>

      <section className='flex justify-start'>
        <Link href='/privacy-policy'>{t('Privacy_policy')}</Link>
        {/* <iframe
          src='https://weblink.settrade.com/IRPage/irpage.jsp?txtSymbol=PORT&amp;language=th&amp;key=31525'
          width='200'
          height='200'
          frameborder='0'
          scrolling='no'
          data-dashlane-frameid='563'
        ></iframe> */}
        {/* <iframe
          src='https://weblink.settrade.com/banner/banner3.jsp'
          width='200'
          height='260'
          frameborder='0'
          scrolling='no'
        ></iframe> */}
      </section>
    </footer>
  )
}
