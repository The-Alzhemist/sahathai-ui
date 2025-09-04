import { useTranslations } from 'next-intl'

import { PeopleCard } from '../PeopleCard'
import { BoardProps } from './interface'
import { PeopleEnum } from '@/enums/PeopleEnum'

export function Board({ onClick }: BoardProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Board')
  const yuthVorachattarn = useTranslations('AboutUsPage.Yuth')
  const yuthVorachattarnPositions = yuthVorachattarn.raw('positions') as string[]

  const vithitLeenutaphong = useTranslations('AboutUsPage.Vithit')
  const vithitLeenutaphongPositions = yuthVorachattarn.raw('positions') as string[]

  const vilaiChattanrassamee = useTranslations(
    'AboutUsPage.Vilai'
  )
  const vilaiChattanrassameePositions = vilaiChattanrassamee.raw('positions') as string[]


  const wichitRattanasirivilai = useTranslations(
    'AboutUsPage.Wichit'
  )
  const wichitRattanasirivilaiPositions = wichitRattanasirivilai.raw('positions') as string[]


  const suchinRattanasirivilai = useTranslations(
    'AboutUsPage.Suchin'
  )
  const suchinRattanasirivilaiPositions = suchinRattanasirivilai.raw('positions') as string[]


  const anggoonSrisunthorn = useTranslations('AboutUsPage.Auggoon')
  const anggoonSrisunthorniPositions = anggoonSrisunthorn.raw('positions') as string[]



  const chairatChongyangyuenvong = useTranslations(
    'AboutUsPage.Chairat'
  )
  const chairatChongyangyuenvongPositions = chairatChongyangyuenvong.raw('positions') as string[]



  const banchaiKaruchit = useTranslations('AboutUsPage.Banchai')
  const banchaiKaruchitPositions = banchaiKaruchit.raw('positions') as string[]

  const sauwakunKaruchit = useTranslations('AboutUsPage.Saowakun')
  const sauwakunPositions = sauwakunKaruchit.raw('positions') as string[]


  return (
    <section className='max-w-[1040px] mx-auto w-full'>
      <h2 className='headline-2 text-center text-white'>{t('title')}</h2>
      <section className='max-w-[734px] w-full mx-auto mt-[40px] grid justify-center md:grid-cols-3 gap-x-5 md:gap-x-[60px] gap-y-[20px]'>
        <PeopleCard
          name={yuthVorachattarn('fullName')}
          imageUrl='/about-us/yuth-vorachattarn.png'
          jobTitle={yuthVorachattarnPositions}
          onClick={() => onClick(PeopleEnum.YuthVorachattarn)}
        />
        <PeopleCard
          name={vithitLeenutaphong('fullName')}
          imageUrl='/about-us/vithit-leenutaphong.png'
          jobTitle={vithitLeenutaphongPositions}
          onClick={() => onClick(PeopleEnum.VithitLeenutaphong)}
        />
        <PeopleCard
          name={vilaiChattanrassamee('fullName')}
          imageUrl='/about-us/vilai-chattanrassamee.png'
          jobTitle={vilaiChattanrassameePositions}
          onClick={() => onClick(PeopleEnum.VilaiChattanrassamee)}
        />
        <PeopleCard
          name={wichitRattanasirivilai('fullName')}
          imageUrl='/about-us/wichit-rattanasirivilai.png'
          jobTitle={wichitRattanasirivilaiPositions}
          onClick={() => onClick(PeopleEnum.WichitRattanasirivilai)}
        />
        <PeopleCard
          name={suchinRattanasirivilai('fullName')}
          imageUrl='/about-us/suchin-rattanasirivilai.png'
          jobTitle={suchinRattanasirivilaiPositions}
          onClick={() => onClick(PeopleEnum.SuchinRattanasirivilai)}
        />
        <PeopleCard
          name={anggoonSrisunthorn('fullName')}
          imageUrl='/about-us/anggoon-srisunthorn.png'
          jobTitle={anggoonSrisunthorniPositions}
          onClick={() => onClick(PeopleEnum.AnggoonSrisunthorn)}
        />
        <PeopleCard
          name={chairatChongyangyuenvong('fullName')}
          imageUrl='/about-us/chairat-chongyangyuenvong.png'
          jobTitle={chairatChongyangyuenvongPositions}
          onClick={() => onClick(PeopleEnum.ChairatChongyangyuenvong)}
        />
        <PeopleCard
          name={sauwakunKaruchit('fullName')}
          imageUrl='/about-us/sauwakun-karuchit.png'
          jobTitle={sauwakunPositions}
          onClick={() => onClick(PeopleEnum.SauwakunKaruchit)}
        />
        <PeopleCard
          name={banchaiKaruchit('fullName')}
          imageUrl='/about-us/banchai-karuchit.png'
          jobTitle={banchaiKaruchitPositions}
          onClick={() => onClick(PeopleEnum.BanchaiKaruchit)}
        />

      </section>
    </section>
  )
}
