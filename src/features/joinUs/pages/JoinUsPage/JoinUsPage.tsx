import { Banner } from '../../components/Banner'
import { ContactHumanResources } from '../../components/ContactHumanResources'
import { Policy } from '../../components/Policy'
import { Animation } from '@/components/Animation'
export function JoinUsPage() {
  return (
    <main>
      <Animation key={`join-us-${Date.now()}`}>
        <div className='space-y-[40px] mb-[57px]'>
          <Banner />
          <section className='px-5'>
            <Policy />
          </section>

          <section className='px-5'>
            <ContactHumanResources />
          </section>
        </div>
      </Animation>
    </main>
  )
}
