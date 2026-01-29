import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { SahathaiText } from '@/components/SahathaiText'
import { PeopleEnum } from '@/enums/PeopleEnum'
import { Board } from '../Board'
import { Executives } from '../Executives'
import { Subcommittee } from '../Subcommittee'
import { PeopleModal } from '../PeopleModal'
import Image from 'next/image'
import { BoardAndExecutivesProps } from '@/features/aboutUs/components/BoardAndExecutives/interface'
import { MockPeopleModal } from '@/features/aboutUs/components/PeopleModal/MockPeopleModal'
import { BoardCard } from '@/features/aboutUs/components/BoardCard'

export function BoardAndExecutives({ boardData }: BoardAndExecutivesProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives')
  const [people, setPeople] = useState<PeopleEnum>()

  const [selectPeople, setSelectPeople] = useState(false)

  function closeModal() {
    setPeople(undefined)
    setSelectPeople(false)
  }

  function clickPeople(value: PeopleEnum) {
    setPeople(value)
  }

  return (
    <section className='mt-[80px] relative'>
      <SahathaiText
        className='max-w-[1040px] w-full mx-auto px-5 headline-3 md:headline-1'
        h='h1'
      />
      <p className='max-w-[1040px] w-full mx-auto mt-[24px] body-1 text-black-6 px-5'>
        {t('content')}
      </p>
      <section className='mt-[110px] bg-[url("/about-us/board-executive.jpeg")] bg-center bg-cover bg-yellow-50'>
        <section className='py-[94px] bg-modellBgDark/50'>
          {boardData.story.content.body &&
            boardData.story.content.body.map((board: any, index: number) => {
              return (
                <>
                  {/* <div
                    className='text-white border-2 p-5'
                    onClick={() => setSelectPeople(board)}
                  >
                    {board.name}
                  </div> */}
                  <BoardCard
                    name={board.name}
                    imageUrl={board.peopleImage.filename}
                    jobTitle={board}
                    onClick={() => setSelectPeople(board)}
                  />
                </>
              )
            })}

          <Board onClick={clickPeople} />
          {/* <Executives onClick={clickPeople} /> */}
        </section>
      </section>
      <div className='relative  min-h-[1190px] md:min-h-[990px]'>
        <Subcommittee />
        <div className='absolute -z-10 top-0 left-0  w-full h-full'>
          <Image
            src='/about-us/new/about-us-container.webp'
            alt='About us container background'
            fill
            className='object-cover object-bottom'
          />
        </div>
      </div>
      {/* {people && <PeopleModal people={people} onClose={closeModal} />} */}
      {selectPeople && (
        <MockPeopleModal selectPeople={selectPeople} onClose={closeModal} />
      )}{' '}
    </section>
  )
}
