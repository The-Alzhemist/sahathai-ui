import { Banner } from './components/Banner'
import { About } from './components/About'
import { License } from './components/License'
import { Service } from './components/Service'
import { News } from './components/News'
import { Highlight } from './components/Highlight'
import { OurSubsidiaries } from './components/OurSubsidiaries'
import { HamburgerMenu } from './components/HamburgerMenu'
import ContactUs from '@/components/ContactUs/ContactUs'
import CookieConsentFloatingBar from '@/components/CookieConsentFloatingBar/CookieConsentFloatingBar'

export function HomePage() {
  return (
    <main>
      <Banner />
      <About />
      <License />
      <Service />
      <News />
      <Highlight />
      <OurSubsidiaries />
      <ContactUs className='mt-[94px] mb-[111px]' />
      <HamburgerMenu />
      <CookieConsentFloatingBar />
    </main>
  )
}
