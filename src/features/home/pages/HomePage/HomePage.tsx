import { Banner } from './components/Banner'
import { About } from './components/About'
import { License } from './components/License'
import { Service } from './components/Service'
import { News } from './components/News'
import { Highlight } from './components/Highlight'
import { ContactUs } from './components/ContactUs'

export function HomePage() {
  return (
    <main>
      <Banner />
      <About />
      <License />
      <Service />
      <News />
      <Highlight />
      <ContactUs />
    </main>
  )
}
