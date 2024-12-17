import { useTranslations } from 'next-intl'

import { NewsCard } from '@/components/NewsCard'
import { Animation } from '@/components/Animation'

export function News() {
  const t = useTranslations('HomePage.News')

  return (
    <section className='container mt-[83px]'>
      <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>
      <Animation className='mt-[42px] flex flex-wrap justify-center gap-[32px] max-w-[862px] mx-auto'>
        <NewsCard
          title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
          content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
          createdAt='2010-11-12T13:14:15Z'
          fullSlug='/xxx'
        />
        <NewsCard
          title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
          content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
          createdAt='2010-11-12T13:14:15Z'
          fullSlug='/xxx'
        />
        <NewsCard
          title='SAHATHAI TERMINAL ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย'
          content='Sahathai Terminal ร่วมออกบูธภายในพิธีลงนามข้อตกลงความร่วมมือเพื่อส่งเสริมศักยภาพและความร่วมมือการต่อต้านการค้าสัตว์ป่า ตัวนิ่ม สัตว์ป่าอื่น และพันธุ์พืชที่ผิดกฏหมาย ระหว่างสมาคมตัวแทนออกของรับอนุญาตไทย (Thai Authorized Customs Brokers Association: TACBA) และสมาคมสัตววิทยาแห่งลอนดอน (ZSL) ประเทศไทย ซึ่งจัดขึ้นในวันที่ 28 พฤษภาคมที่ผ่านมา ณ ห้องเดอะแซมเบอร์ ชั้น B โรงแรมเอส 31 สุขุมวิท กรุงเทพมหานคร'
          createdAt='2010-11-12T13:14:15Z'
          fullSlug='/xxx'
        />
      </Animation>
    </section>
  )
}
