import { useTranslations } from 'next-intl'
import { PeopleCard } from '../PeopleCard'

export function Executives() {
  const t = useTranslations('BoardAndExecutivesPage.Executives')

  return (
    <section>
      <h2 className='pt-[104px] headline-1 text-center'>{t('title')}</h2>
      <p className='mt-[20px] body-1 max-w-[1196px] text-center mx-auto whitespace-pre'>
        {t('description')}
      </p>
      <section className='flex flex-wrap pt-[71px] pb-[61px] gap-x-[57.5px] gap-y-[20px] max-w-[1150px] mx-auto'>
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
          border
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
          border
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
          border
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
          border
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
          border
        />
        <PeopleCard
          name='FULL NAME'
          jobTitle={`job_title\njob_title\njob_title`}
          border
        />
      </section>
    </section>
  )
}
