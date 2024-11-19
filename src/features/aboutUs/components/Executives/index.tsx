'use client'
import { useTranslations } from 'next-intl'

import { PeopleEnum } from '@/enums/PeopleEnum'
import { PeopleCard } from '../PeopleCard'
import { ExecutivesProps } from './interface'

export function Executives({ onClick }: ExecutivesProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Executives')
  const sauwakunKaruchit = useTranslations('AboutUsPage.SauwakunKaruchit')
  const banchaiKaruchit = useTranslations('AboutUsPage.BanchaiKaruchit')
  const kittikhunLochaya = useTranslations('AboutUsPage.KittikhunLochaya')
  const minrawiPhodee = useTranslations('AboutUsPage.MinrawiPhodee')
  const bunditRungsimanon = useTranslations('AboutUsPage.BunditRungsimanon')
  const roongrojWhangteeranon = useTranslations(
    'AboutUsPage.RoongrojWhangteeranon'
  )

  return (
    <section className='mt-[120px] max-w-[1040px] mx-auto w-full'>
      <h2 className='headline-2 text-center text-white'>{t('title')}</h2>
      <section className='max-w-[734px] w-full mx-auto mt-[40px] flex flex-wrap gap-x-[60px] gap-y-[20px]'>
        <PeopleCard
          name={sauwakunKaruchit('fullName')}
          imageClassName='left-[-34px] top-0 w-[276px]'
          imageUrl='/about-us/sauwakun-karuchit.png'
          jobTitle={[
            sauwakunKaruchit('position1'),
            sauwakunKaruchit('position2'),
            sauwakunKaruchit('position3'),
            sauwakunKaruchit('position4'),
          ].join('\n')}
          onClick={() => onClick(PeopleEnum.SauwakunKaruchit)}
        />

        <PeopleCard
          name={banchaiKaruchit('fullName')}
          imageClassName='left-[-34px] top-0 w-[258px]'
          imageUrl='/about-us/banchai-karuchit.png'
          jobTitle={[
            banchaiKaruchit('position1'),
            banchaiKaruchit('position2'),
            banchaiKaruchit('position3'),
            banchaiKaruchit('position4'),
            banchaiKaruchit('position5'),
          ].join('\n')}
          onClick={() => onClick(PeopleEnum.BanchaiKaruchit)}
        />

        <PeopleCard
          name={kittikhunLochaya('fullName')}
          imageClassName='left-[-80.33px] top-0 w-[323px]'
          imageUrl='/about-us/kittikhun-lochaya.png'
          jobTitle={kittikhunLochaya('position1')}
          onClick={() => onClick(PeopleEnum.KittikhunLochaya)}
        />

        <PeopleCard
          name={minrawiPhodee('fullName')}
          imageClassName='left-[-34px] top-0 w-[258px]'
          imageUrl='/about-us/minrawi-phodee.png'
          jobTitle={minrawiPhodee('position1')}
          onClick={() => onClick(PeopleEnum.MinrawiPhodee)}
        />

        <PeopleCard
          name={bunditRungsimanon('fullName')}
          imageClassName='left-[-53px] top-[-7.14px] w-[297px]'
          imageUrl='/about-us/bundit-rungsimanon.png'
          jobTitle={bunditRungsimanon('position1')}
          onClick={() => onClick(PeopleEnum.BunditRungsimanon)}
        />

        <PeopleCard
          name={roongrojWhangteeranon('fullName')}
          jobTitle={roongrojWhangteeranon('position1')}
          onClick={() => onClick(PeopleEnum.RoongrojWhangteeranon)}
        />
      </section>
    </section>
  )
}
