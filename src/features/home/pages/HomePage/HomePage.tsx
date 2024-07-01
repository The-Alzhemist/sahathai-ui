import { ContactUs } from '@/components/ContactUs'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { License } from './components/License'
import { Service } from './components/Service'
import { News } from './components/News'
import { Highlight } from './components/Highlight'
import { OurSubsidiaries } from './components/OurSubsidiaries'

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
      <ContactUs className='mt-[142px] mb-[373px]' />
    </main>
  )
}
