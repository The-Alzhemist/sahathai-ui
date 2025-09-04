'use client'
import { useTranslations } from 'next-intl'

import { PeopleEnum } from '@/enums/PeopleEnum'
import { PeopleCard } from '../PeopleCard'
import { ExecutivesProps } from './interface'

export function Executives({ onClick }: ExecutivesProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Executives')


  const papatssarin = useTranslations('AboutUsPage.Papatsarin')
  const papatssarinPositions = papatssarin.raw('positions') as string[]


  const sauwakunKaruchit = useTranslations('AboutUsPage.Saowakun')
  const sauwakunPositions = sauwakunKaruchit.raw('positions') as string[]

  const banchaiKaruchit = useTranslations('AboutUsPage.Banchai')
  const banchaiPositions = banchaiKaruchit.raw('positions') as string[]

  const kittikhunLochaya = useTranslations('AboutUsPage.Kittikhun')
  const kittikhunPositions = kittikhunLochaya.raw('positions') as string[]


  const sangaSanguansaksri = useTranslations('AboutUsPage.Sanga')
  const sangaPositions = sangaSanguansaksri.raw('positions') as string[]


  const rungroj = useTranslations('AboutUsPage.Rungroj')
  const rungRojPositions = rungroj.raw('positions') as string[]


  return (
    <section className='mt-[120px] max-w-[1040px] mx-auto w-full'>
      <h2 className='headline-2 text-center text-white'>{t('title')}</h2>
      <section className='max-w-[734px] w-full mx-auto mt-[40px] grid justify-center md:grid-cols-3 gap-x-5 md:gap-x-[60px] gap-y-[20px] px-5 '>
        <PeopleCard
          name={sauwakunKaruchit('fullName')}
          imageUrl='/about-us/sauwakun-karuchit.png'
          jobTitle={sauwakunPositions}
          onClick={() => onClick(PeopleEnum.SauwakunKaruchit)}
        />

        <PeopleCard
          name={banchaiKaruchit('fullName')}
          imageUrl='/about-us/banchai-karuchit.png'
          jobTitle={banchaiPositions}
          onClick={() => onClick(PeopleEnum.BanchaiKaruchit)}
        />

        <PeopleCard
          name={kittikhunLochaya('fullName')}
          imageUrl='/about-us/kittikhun-lochaya.png'
          jobTitle={kittikhunPositions}
          onClick={() => onClick(PeopleEnum.KittikhunLochaya)}
        />

        <PeopleCard
          name={papatssarin('fullName')}
          imageUrl='/about-us/papatsarin-1.png'
          jobTitle={papatssarinPositions}
          onClick={() => onClick(PeopleEnum.Papatssarin)}
        />

        <PeopleCard
          name={sangaSanguansaksri('fullName')}
          imageUrl='/about-us/Sanga_Sanguansaksri.jpg'
          jobTitle={sangaPositions}
          onClick={() => onClick(PeopleEnum.SangaSanguansaksri)}
        />

        <PeopleCard
          name={rungroj('fullName')}
          imageUrl='/about-us/rungroj.jpg'
          jobTitle={rungRojPositions}
          onClick={() => onClick(PeopleEnum.RoongrojWhangteeranon)}
        />

      </section>
    </section>
  )
}
