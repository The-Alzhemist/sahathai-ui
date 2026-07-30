import { Link } from '@/libs/intl/navigation'
import { FacebookIcon } from '../icons/FacebookIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
import { useTranslations } from 'next-intl'
export function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className='flex flex-col justify-between py-6 px-10 bg-blue-400 text-white body-s'>
      <section className='flex justify-center gap-x-[16px] mb-2'>
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
      </section>
      <section className='w-full mb-2 text-center'>
        info@sahathaiterminal.com @2025. All rights reserved.
      </section>

      <section className='flex justify-center'>
        <Link href='/privacy-policy'>{t('Privacy_policy')}</Link>
      </section>
    </footer>
  )
}
