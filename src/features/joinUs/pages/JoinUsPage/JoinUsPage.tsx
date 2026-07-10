import { Menu } from '@/components/Menu'
import { Banner } from '../../components/Banner'
import { ContactHumanResources } from '../../components/ContactHumanResources'
import { Policy } from '../../components/Policy'
import { Animation } from '@/components/Animation'

export function JoinUsPage() {
  return (
    <Animation className='mb-[57px]' key={`join-us-${Date.now()}`}>
      <Menu />
      <Banner />
      <section className='my-[40px] px-5'>
        <Policy />
      </section>
      <section className='px-5'>
        <ContactHumanResources />
      </section>
    </Animation>
  )
}
