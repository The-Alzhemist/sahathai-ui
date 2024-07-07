import { Animation } from '@/components/Animation'
import { RiskCardProps, SectionProps, TitleProps } from './interface'

export function RiskCard({ children }: RiskCardProps) {
  return (
    <Animation className='mt-[46px] p-[24px] rounded-[8px] shadow-2 max-w-[1140px] w-full mx-auto'>
      {children}
    </Animation>
  )
}

RiskCard.Title = function Title({ children }: TitleProps) {
  return <h2 className='headline-2 text-blue-400'>{children}</h2>
}

RiskCard.Section = function Section({ title, description }: SectionProps) {
  return (
    <section className='mt-[24px]'>
      <h3 className='headline-3 text-blue-300 underline'>{title}</h3>
      <p className='mt-[8px] text-body-1 text-black-80'>{description}</p>
    </section>
  )
}
