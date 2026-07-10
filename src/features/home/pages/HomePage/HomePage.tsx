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
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTop'

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
      <ScrollToTopButton />
      {/* <div dangerouslySetInnerHTML={{ __html: PORT_HTML }} />
      <iframe
        src='https://weblink.settrade.com/banner/banner3.jsp'
        width='800'
        height='200'
        frameborder='0'
        scrolling='no'
      ></iframe> */}
    </main>
  )
}
