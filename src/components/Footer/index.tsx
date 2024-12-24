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
          <YoutubeIcon width='24' height='24' />
          <FacebookIcon width='24' height='24' />
          {/* <TwitterIcon width='24' height='24' /> */}
          <InstagramIcon width='24' height='24' />
          {/* <LinkedinIcon width='24' height='24' /> */}
        </div>
      </section>

      <section className='flex justify-start'>
        <Link href='/privacy-policy'>{t('Privacy_policy')}</Link>
      </section>
    </footer>
  )
}
