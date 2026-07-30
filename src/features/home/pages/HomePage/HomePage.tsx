import { Banner } from './components/Banner'
import { About } from './components/About'
import { License } from './components/License'
import { Service } from './components/Service'

import { Highlight } from './components/Highlight'
import { OurSubsidiaries } from './components/OurSubsidiaries'
import { HamburgerMenu } from './components/HamburgerMenu'
import ContactUs from '@/components/ContactUs/ContactUs'

import HomePageNews from '@/features/home/pages/HomePage/components/News'
import { HomePageProps } from '@/features/home/pages/HomePage/withHomePage'

export function HomePage({ params }: HomePageProps) {
  return (
    <main>
      <Banner />
      <About />
      <License />
      <Service />
      <HomePageNews params={params} />
      <Highlight />
      <OurSubsidiaries />
      <ContactUs className='mt-[94px] mb-[111px]' />
      <HamburgerMenu />
    </main>
  )
}
