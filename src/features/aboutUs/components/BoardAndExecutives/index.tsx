import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { SahathaiText } from '@/components/SahathaiText'

import { Subcommittee } from '../Subcommittee'

import Image from 'next/image'
import { BoardAndExecutivesProps } from '@/features/aboutUs/components/BoardAndExecutives/interface'

import { BoardCard } from '@/features/aboutUs/components/BoardCard'
import { PeopleInformationModal } from '@/features/aboutUs/components/PeopleModal/PeopleInformationModal'
import { BoardAndCommitteeStoryblok } from '@/types/storyblok'
import { BoardSection } from '../BoardSection'

export function BoardAndExecutives({ boardData }: BoardAndExecutivesProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives')

  const [selectPeople, setSelectPeople] =
    useState<BoardAndCommitteeStoryblok | null>(null)

  function closeModal() {
    setSelectPeople(null)
  }

  return (
    <section className='mt-[80px] relative'>
      <SahathaiText
        className='max-w-[1040px] w-full mx-auto px-5 headline-3 md:headline-1'
        h='h1'
      />
      <p className='max-w-[1040px] w-full mx-auto mt-[24px] body-1 text-black-6 px-5 mb-[110px]'>
        {t('content')}
      </p>
      <BoardSection title={t('Board.title')}>
        {boardData.story.content.body?.map(
          (board: BoardAndCommitteeStoryblok) =>
            board.isBoardOfDirector ? (
              <BoardCard
                key={board._uid}
                name={board.name || ''}
                imageUrl={board.peopleImage?.filename || ''}
                board={board}
                onClick={() => setSelectPeople(board)}
              />
            ) : null
        )}
      </BoardSection>
      <section className='relative min-h-[1190px] md:min-h-[990px]'>
        <div className='absolute top-0 left-0  w-full h-full'>
          <Image
            src='/about-us/new/about-us-container.webp'
            alt='About us container background'
            fill
            className='object-cover object-bottom'
          />
        </div>
        <Subcommittee />
      </section>
      {/* Executive */}
      <BoardSection title={t('Executives.title')}>
        {boardData.story.content.body?.map(
          (board: BoardAndCommitteeStoryblok) =>
            board.isCommittee ? (
              <BoardCard
                key={board._uid}
                name={board.name || ''}
                imageUrl={board.peopleImage?.filename || ''}
                board={board}
                onClick={() => setSelectPeople(board)}
              />
            ) : null
        )}
      </BoardSection>
      {selectPeople && (
        <PeopleInformationModal
          selectPeople={selectPeople}
          onClose={closeModal}
        />
      )}{' '}
    </section>
  )
}
