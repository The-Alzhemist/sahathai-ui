import { useTranslations } from 'next-intl'

import { PeopleCard } from '../PeopleCard'

export function Board() {
  const t = useTranslations('BoardAndExecutivesPage.Board')

  return (
    <section className='bg-dark-60'>
      <h2 className='pt-[44px] headline-1 text-center'>{t('title')}</h2>
      <p className='mt-[32px] body-1 max-w-[896px] text-center mx-auto whitespace-pre'>
        {t('description')}
      </p>
      <section className='flex flex-wrap py-[57px] gap-x-[57.5px] gap-y-[20px] max-w-[1150px] mx-auto'>
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
        />
      </section>
    </section>
  )
}
