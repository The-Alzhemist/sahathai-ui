import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { SahathaiText } from '@/components/SahathaiText'
import { PeopleEnum } from '@/enums/PeopleEnum'
import { Board } from '../Board'
import { Executives } from '../Executives'
import { Subcommittee } from '../Subcommittee'
import { PeopleModal } from '../PeopleModal'

export function BoardAndExecutives() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives')
  const [people, setPeople] = useState<PeopleEnum>()

  function closeModal() {
    setPeople(undefined)
  }

  function clickPeople(value: PeopleEnum) {
    setPeople(value)
  }

  return (
    <section className='mt-[80px]'>
      <SahathaiText className='max-w-[1040px] w-full mx-auto px-5' h='h1' />
      <p className='max-w-[1040px] w-full mx-auto mt-[24px] body-1 text-black-6 px-5'>
        {t('content')}
      </p>

      <section className='mt-[110px] bg-[url("/about-us/board-executive.jpeg")] bg-center bg-cover'>
        <section className='py-[94px] bg-modellBgDark/50'>
          <Board onClick={clickPeople} />
          <Executives onClick={clickPeople} />
        </section>
      </section>
      <Subcommittee />
      {people && <PeopleModal people={people} onClose={closeModal} />}
    </section>
  )
}
