import { useTranslations } from 'next-intl'

import { Board } from '../Board'
import { Executives } from '../Executives'
import { Subcommittee } from '../Subcommittee'

export function BoardAndExecutives() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives')
  const common = useTranslations('common')

  return (
    <section className='mt-[80px] max-w-[896px] w-full mx-auto'>
      <h2 className='headline-1'>
        <span className='text-blue-300'>{common('sahathai')}</span>
        <span className='text-red-400'>{common('terminal')}</span>
      </h2>
      <p className='max-w-[896px] w-full mx-auto mt-[26px] body-1 text-black-60'>
        {t('description')}
      </p>
      <Board />
      <Executives />
      <Subcommittee />
    </section>
  )
}
