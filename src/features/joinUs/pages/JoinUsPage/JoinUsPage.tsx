import { Menu } from '@/components/Menu'
import { Banner } from '../../components/Banner'
import { ContactHumanResources } from '../../components/ContactHumanResources'
import { Policy } from '../../components/Policy'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function JoinUsPage() {
  const { tick } = useNavigationTick()

  return (
    <Animation className='mb-[57px]' key={tick}>
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
