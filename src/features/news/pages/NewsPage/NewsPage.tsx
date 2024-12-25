import { Brochure } from '../../components/Brochure'
import { useTranslations } from 'next-intl'
import { Animation } from '@/components/Animation'
import { Menu } from '@/components/Menu'
import { LastestNews } from '@/components/LastestNews/LastestNews'
import NewsBlogList from '@/features/news/components/NewsBlogList/NewsBlogList'
import CookieConsentFloatingBar from '@/components/CookieConsentFloatingBar/CookieConsentFloatingBar'

export function NewsPage() {
  const t = useTranslations('NewsPage')
  return (
    <main className='mt-[80px]'>
      <Menu />
      <section className=' mx-auto'>
        <section className='flex justify-center mb-10 md:mb-5'>
          <Animation className='flex flex-col justify-center items-center max-w-[897px] min-h-[500px]  px-5'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('latestNews')}
            </h2>

            <LastestNews />
          </Animation>
        </section>

        <section className='bg-white flex justify-center items-center'>
          <Animation className='max-w-90% md:max-w-[1100px] py-9'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('pressRelease')}
            </h2>
            <section className='flex justify-center items-center flex-wrap gap-x-5 gap-y-5'>
              <NewsBlogList />
            </section>
          </Animation>
        </section>

        <section className='bg-[#E9F4FF] min-h-[450px] flex justify-center items-center px-5'>
          <Brochure className='' />
        </section>
      </section>
    </main>
  )
}
