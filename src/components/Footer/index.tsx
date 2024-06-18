import { FacebookIcon } from '../icons/FacebookIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'

export function Footer() {
  return (
    <footer className='flex justify-between py-[26px] px-[80px] bg-dark text-white'>
      CompanyName @ 202X. All rights reserved.
      <div className='flex gap-x-[16px]'>
        <YoutubeIcon width='24' height='24' />
        <FacebookIcon width='24' height='24' />
        <TwitterIcon width='24' height='24' />
        <InstagramIcon width='24' height='24' />
        <LinkedinIcon width='24' height='24' />
      </div>
    </footer>
  )
}
