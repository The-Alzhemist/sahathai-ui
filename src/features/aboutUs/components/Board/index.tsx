import { useTranslations } from 'next-intl'

import { PeopleCard } from '../PeopleCard'
import { BoardProps } from './interface'
import { PeopleEnum } from '@/enums/PeopleEnum'

export function Board({ onClick }: BoardProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Board')
  const yuthVorachattarn = useTranslations('AboutUsPage.YuthVorachattarn')
  const vithitLeenutaphong = useTranslations('AboutUsPage.VithitLeenutaphong')
  const vilaiChattanrassamee = useTranslations(
    'AboutUsPage.VilaiChattanrassamee'
  )
  const wichitRattanasirivilai = useTranslations(
    'AboutUsPage.WichitRattanasirivilai'
  )
  const suchinRattanasirivilai = useTranslations(
    'AboutUsPage.SuchinRattanasirivilai'
  )
  const anggoonSrisunthorn = useTranslations('AboutUsPage.AnggoonSrisunthorn')
  const chairatChongyangyuenvong = useTranslations(
    'AboutUsPage.ChairatChongyangyuenvong'
  )
  const sauwakunKaruchit = useTranslations('AboutUsPage.SauwakunKaruchit')
  const banchaiKaruchit = useTranslations('AboutUsPage.BanchaiKaruchit')

  return (
    <section className='max-w-[1040px] mx-auto w-full'>
      <h2 className='headline-2 text-center text-white'>{t('title')}</h2>
      <section className='max-w-[734px] w-full mx-auto mt-[40px] grid grid-cols-3 gap-x-5 md:gap-x-[60px] gap-y-[20px]'>
        <PeopleCard
          name={yuthVorachattarn('fullName')}
          imageUrl='/about-us/yuth-vorachattarn.png'
          jobTitle={[
            yuthVorachattarn('position1'),
            yuthVorachattarn('position2'),
            yuthVorachattarn('position3'),
            yuthVorachattarn('position4'),
          ]}
          onClick={() => onClick(PeopleEnum.YuthVorachattarn)}
        />
        <PeopleCard
          name={vithitLeenutaphong('fullName')}
          imageUrl='/about-us/vithit-leenutaphong.png'
          jobTitle={[
            vithitLeenutaphong('position1'),
            vithitLeenutaphong('position2'),
            vithitLeenutaphong('position3'),
          ]}
          onClick={() => onClick(PeopleEnum.VithitLeenutaphong)}
        />
        <PeopleCard
          name={vilaiChattanrassamee('fullName')}
          imageUrl='/about-us/vilai-chattanrassamee.png'
          jobTitle={[
            vilaiChattanrassamee('position1'),
            vilaiChattanrassamee('position2'),
            vilaiChattanrassamee('position3'),
            vilaiChattanrassamee('position4'),
          ]}
          onClick={() => onClick(PeopleEnum.VilaiChattanrassamee)}
        />
        <PeopleCard
          name={wichitRattanasirivilai('fullName')}
          imageUrl='/about-us/wichit-rattanasirivilai.png'
          jobTitle={[
            wichitRattanasirivilai('position1'),
            wichitRattanasirivilai('position2'),
            wichitRattanasirivilai('position3'),
          ]}
          onClick={() => onClick(PeopleEnum.WichitRattanasirivilai)}
        />
        <PeopleCard
          name={suchinRattanasirivilai('fullName')}
          imageUrl='/about-us/suchin-rattanasirivilai.png'
          jobTitle={[
            suchinRattanasirivilai('position1'),
            suchinRattanasirivilai('position2'),
          ]}
          onClick={() => onClick(PeopleEnum.SuchinRattanasirivilai)}
        />
        <PeopleCard
          name={anggoonSrisunthorn('fullName')}
          imageUrl='/about-us/anggoon-srisunthorn.png'
          jobTitle={[
            anggoonSrisunthorn('position1'),
            anggoonSrisunthorn('position2'),
          ]}
          onClick={() => onClick(PeopleEnum.AnggoonSrisunthorn)}
        />
        <PeopleCard
          name={chairatChongyangyuenvong('fullName')}
          imageUrl='/about-us/chairat-chongyangyuenvong.png'
          jobTitle={[
            chairatChongyangyuenvong('position1'),
            chairatChongyangyuenvong('position2'),
          ]}
          onClick={() => onClick(PeopleEnum.ChairatChongyangyuenvong)}
        />
        <PeopleCard
          name={sauwakunKaruchit('fullName')}
          imageUrl='/about-us/sauwakun-karuchit.png'
          jobTitle={[
            sauwakunKaruchit('position1'),
            sauwakunKaruchit('position2'),
            sauwakunKaruchit('position3'),
            sauwakunKaruchit('position4'),
          ]}
          onClick={() => onClick(PeopleEnum.SauwakunKaruchit)}
        />
        <PeopleCard
          name={banchaiKaruchit('fullName')}
          imageUrl='/about-us/banchai-karuchit.png'
          jobTitle={[
            banchaiKaruchit('position1'),
            banchaiKaruchit('position2'),
            banchaiKaruchit('position3'),
            banchaiKaruchit('position4'),
            banchaiKaruchit('position5'),
          ]}
          onClick={() => onClick(PeopleEnum.BanchaiKaruchit)}
        />
      </section>
    </section>
  )
}
