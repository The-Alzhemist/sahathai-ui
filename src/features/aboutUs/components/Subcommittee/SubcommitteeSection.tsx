import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { AvatarIcon } from '@/components/icons/AvatarIcon'
import { SubcommitteeEnum } from './interface'

export function SubcommitteeSection({ activeTab }: { activeTab: string }) {
  const t = useTranslations(`AboutUsPage.BoardAndExecutives.Subcommittee`)
  const membersRow = t.raw(`${activeTab}.members`) as Array<{
    name: string
    role: string
  }>

  // for auditCommittee
  const notesRow = t.raw('auditCommittee.note') as Array<{ content: string }>

  const members = Array.isArray(membersRow) ? membersRow : []

  return (
    <section className=' text-black-6'>
      <p className='mb-7'>{t(`${activeTab}.intro`)}</p>

      <ul className='mt-4 grid gap-3 mb-7'>
        {members.map((m, i) => (
          <li key={i} className='flex items-center md:items-end gap-3'>
            <div className='self-start'>
              <AvatarIcon className='text-base relative  mr-[15px] ' />
            </div>

            <div className='flex flex-wrap items-center gap-x-5'>
              <div className='max-w-[300px]'>{m.name}</div>
              <div>{m.role}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* tab 1 only */}
      {activeTab === SubcommitteeEnum.Audit && (
        <>
          <p className='mb-7'>{t(`${activeTab}.intro2`)}</p>
          <div>{t(`${activeTab}.noteTitle`)}</div>

          <ul className='grid mb-7'>
            {notesRow.map((note, i) => (
              <li key={i} className='flex items-start gap-3'>
                <div className='flex flex-wrap gap-x-5'>
                  <div>
                    {i + 1}. {note.content}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className='flex flex-wrap items-center gap-2 '>
            <p>{t(`${activeTab}.pdfTitle`)}</p>
            <Link
              className='hover:underline text-secondary font-normal'
              href='https://a.storyblok.com/f/316761/x/0f383ec951/ac-id.pdf'
            >
              {t(`${activeTab}.clickLinkText`)}
            </Link>
          </div>
        </>
      )}
    </section>
  )
}
