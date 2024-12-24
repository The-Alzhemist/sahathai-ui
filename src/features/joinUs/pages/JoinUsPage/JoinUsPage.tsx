import CookieConsentFloatingBar from '@/components/CookieConsentFloatingBar/CookieConsentFloatingBar'
import { Banner } from '../../components/Banner'
import { ContactHumanResources } from '../../components/ContactHumanResources'
import { Policy } from '../../components/Policy'

export function JoinUsPage() {
  return (
    <main className='space-y-[40px] mb-[57px]'>
      <Banner />
      <section className='px-5'>
        <Policy />
      </section>

      <section className='px-5'>
        <ContactHumanResources />
      </section>
    </main>
  )
}
