import { Pagination } from '@/components/Pagination'
import { NewsCard } from '@/components/NewsCard'
import { Brochure } from '../../components/Brochure'
import { useTranslations } from 'next-intl'
import { Animation } from '@/components/Animation'
import { Menu } from '@/components/Menu'
import { LastestNews } from '@/components/LastestNews/LastestNews'
import NewsBlogList from '@/features/news/components/NewsBlogList/NewsBlogList'

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
          {/* <Animation className='max-w-[900px] py-9'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('pressRelease')}
            </h2>
            <section className='flex justify-center items-center flex-wrap gap-x-5 gap-y-5'>
              <NewsCard
                title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
                content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
                createdAt='2010-11-12T13:14:15Z'
              />
              <NewsCard
                title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
                content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
                createdAt='2010-11-12T13:14:15Z'
              />
              <NewsCard
                title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
                content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
                createdAt='2010-11-12T13:14:15Z'
              />
              <NewsCard
                title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
                content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
                createdAt='2010-11-12T13:14:15Z'
              />
              <NewsCard
                title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
                content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
                createdAt='2010-11-12T13:14:15Z'
              />
              <NewsCard
                title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
                content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
                createdAt='2010-11-12T13:14:15Z'
              />
              <Pagination
                className='w-full news'
                pageCount={10}
                pageChange={() => {}}
              />
            </section>
          </Animation> */}
        </section>

        <NewsBlogList />

        <section className='bg-[#E9F4FF] min-h-[450px] flex justify-center items-center px-5'>
          <Brochure className='' />
        </section>
      </section>
    </main>
  )
}
