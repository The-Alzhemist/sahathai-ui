import { useTranslations } from 'next-intl'

import { PeopleCard } from '../PeopleCard'

export function Board() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Board')

  return (
    <section className='mt-[82px]'>
      <h2 className='headline-2 text-center text-blue-400'>{t('title')}</h2>
      <section className='max-w-[666px] w-full mx-auto mt-[40px] flex flex-wrap gap-[24px]'>
        <PeopleCard
          name={t('person1.title')}
          imageClassName='left-[-21.52px] top-0 w-[258.86px]'
          imageUrl='/about-us/yuth-vorachattarn.png'
          jobTitle={t('person1.description')}
        />
        <PeopleCard
          name={t('person2.title')}
          imageClassName='left-[-46px] top-[-9px] w-[281.91px]'
          imageUrl='/about-us/vithit-leenutaphong.png'
          jobTitle={t('person2.description')}
        />
        <PeopleCard
          name={t('person3.title')}
          imageClassName='left-[-43px] top-0 w-[276.79px]'
          imageUrl='/about-us/vilai-chattanrassamee.png'
          jobTitle={t('person3.description')}
        />
        <PeopleCard
          name={t('person4.title')}
          imageClassName='left-[-46px] top-0 w-[297.89px]'
          imageUrl='/about-us/wichit-rattanasirivilai.png'
          jobTitle={t('person4.description')}
        />
        <PeopleCard
          name={t('person5.title')}
          imageClassName='left-[-42.94px] top-0 w-[261.45px]'
          imageUrl='/about-us/suchin-rattanasirivilai.png'
          jobTitle={t('person5.description')}
        />
        <PeopleCard
          name={t('person6.title')}
          imageClassName='left-[-34px] top-0 w-[255.7px]'
          imageUrl='/about-us/anggoon-srisunthorn.png'
          jobTitle={t('person6.description')}
        />
        <PeopleCard
          name={t('person7.title')}
          imageClassName='left-[-34px] top-0 w-[265px]'
          imageUrl='/about-us/chairat-chongyangyuenvong.png'
          jobTitle={t('person7.description')}
        />
        <PeopleCard
          name={t('person8.title')}
          imageClassName='left-[-34px] top-0 w-[276px]'
          imageUrl='/about-us/sauwakun-karuchit.png'
          jobTitle={t('person8.description')}
        />
        <PeopleCard
          name={t('person9.title')}
          imageClassName='left-[-34px] top-0 w-[258px]'
          imageUrl='/about-us/banchai-karuchit.png'
          jobTitle={t('person9.description')}
        />
      </section>
    </section>
  )
}
