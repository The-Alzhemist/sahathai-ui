import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { SahathaiText } from '@/components/SahathaiText'
import { PeopleEnum } from '@/enums/PeopleEnum'
import { Board } from '../Board'

import { Subcommittee } from '../Subcommittee'

import Image from 'next/image'
import { BoardAndExecutivesProps } from '@/features/aboutUs/components/BoardAndExecutives/interface'

import { BoardCard } from '@/features/aboutUs/components/BoardCard'
import { PeopleInformationModal } from '@/features/aboutUs/components/PeopleModal/MockPeopleModal'

export function BoardAndExecutives({ boardData }: BoardAndExecutivesProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives')

  const [selectPeople, setSelectPeople] = useState(false)

  function closeModal() {
    setSelectPeople(false)
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
          <section className='max-w-[1040px] mx-auto w-full'>
            <h2 className='headline-2 text-center text-white'>
              {t('Board.title')}
            </h2>
            <section className='max-w-[734px] w-full mx-auto my-[40px] grid grid-cols-1 justify-center md:grid-cols-3 gap-x-5 md:gap-x-[60px] gap-y-[20px]'>
              {boardData.story.content.body?.map((board: any) =>
                board.isBoardOfDirector ? (
                  <BoardCard
                    key={board._uid}
                    name={board.name}
                    imageUrl={board.peopleImage.filename}
                    jobTitle={board}
                    onClick={() => setSelectPeople(board)}
                  />
                ) : null
              )}
            </section>
          </section>

          {/* Executive */}
          <section className='max-w-[1040px] mx-auto w-full pt-10'>
            <h2 className='headline-2 text-center text-white'>
              {t('Executives.title')}
            </h2>
            <section className='max-w-[734px] w-full mx-auto my-[40px] grid grid-cols-1 justify-center  md:grid-cols-3 gap-x-5 md:gap-x-[60px] gap-y-[20px] md:px-2'>
              {boardData.story.content.body?.map((board: any) =>
                board.isCommittee ? (
                  <BoardCard
                    key={board._uid}
                    name={board.name}
                    imageUrl={board.peopleImage.filename}
                    jobTitle={board}
                    onClick={() => setSelectPeople(board)}
                  />
                ) : null
              )}
            </section>
          </section>
          {/* <Board onClick={clickPeople} />
          <Executives onClick={clickPeople} /> */}
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
        <PeopleInformationModal
          selectPeople={selectPeople}
          onClose={closeModal}
        />
      )}{' '}
    </section>
  )
}
