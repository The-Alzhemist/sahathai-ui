'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Modal } from '@/components/Modal'
import { PeopleInformationModalProps } from '@/features/aboutUs/components/PeopleModal/interface'
import { getStrapiImageUrl } from '@/libs/util'
import { TextItem } from '@/types/TextItem'

function TextItemSection({ title, items }: { title: string; items: TextItem[] }) {
  if (!items || items.length === 0) return null

  return (
    <section className='mb-8'>
      <div className='text-md md:text-[20px] leading-[48.38px] text-navy px-5 md:px-0'>
        {title}
      </div>

      <div className='mt-2 text-black-6 body-2 w-full space-y-1'>
        <ul className='space-y-1'>
          {items.map(item => (
            <li key={item.id} className='grid grid-cols-[30px_1fr]'>
              <span className='text-center'>&bull;</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function TextSection({ title, value }: { title: string; value: string | null }) {
  if (!value) return null

  return (
    <section className='mb-8'>
      <div className='text-md md:text-[20px] leading-[48.38px] text-navy px-5 md:px-0'>
        {title}
      </div>

      <div className='mt-2 text-black-6 body-2 w-full space-y-1'>{value}</div>
    </section>
  )
}

export function PeopleInformationModal({
  selectPeople,
  onClose,
}: PeopleInformationModalProps) {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.PeopleModal')

  if (!selectPeople) return null

  return (
    <>
      <Modal className='max-w-[770px] w-[90%] ' onClose={onClose}>
        <div onClick={onClose}></div>
        <div className='flex flex-col md:flex-row gap-x-3 md:gap-x-[13px] items-center'>
          <div className='max-w-[90%] md:max-w-[309px] w-full overflow-hidden'>
            <div className='relative aspect-square w-full'>
              <Image
                src={
                  selectPeople.photo
                    ? getStrapiImageUrl(selectPeople.photo.url)
                    : ''
                }
                alt={selectPeople.fullName}
                fill
                className='object-cover'
              />
            </div>
          </div>

          <div className='w-full'>
            <div className='text-xl md:text-[32px] leading-[1.35] text-navy px-5 md:px-0 mt-4 md:mt-0'>
              {selectPeople.fullName}
            </div>

            {selectPeople.positions.length > 0 && (
              <div className='mt-2 text-black-6 body-2 w-full space-y-1'>
                <ul className='px-1 space-y-1'>
                  {selectPeople.positions.map(item => (
                    <li key={item.id} className='grid grid-cols-[30px_1fr]'>
                      <span className='text-center'>&bull;</span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className='px-5 md:px-9 py-9 bg-white-1 space-y-5 md:space-y-[30px] mt-8 md:mt-0'>
          <div className='py-2 grid grid-cols-1 md:grid-cols-1 gap-1'>
            {selectPeople.age && (
              <TextSection
                title={t('age')}
                value={t('ageValue', { age: selectPeople.age })}
              />
            )}
            <TextItemSection
              title={t('education')}
              items={selectPeople.education}
            />
            <TextItemSection
              title={t('trainingHistory')}
              items={selectPeople.trainingHistory}
            />
            <TextSection
              title={t('directorType')}
              value={selectPeople.directorType}
            />
            <TextItemSection
              title={t('appointmentDates')}
              items={selectPeople.appointmentDates}
            />
            <TextSection
              title={t('tenureDuration')}
              value={selectPeople.tenureDuration}
            />
            <TextItemSection
              title={t('workExperience5Years')}
              items={selectPeople.workExperience5Years}
            />
            <TextItemSection
              title={t('positionsInListedCompanies')}
              items={selectPeople.positionsInListedCompanies}
            />
            <TextItemSection
              title={t('positionsInRelatedCompanies')}
              items={selectPeople.positionsInRelatedCompanies}
            />
            <TextItemSection
              title={t('positionsInOtherCompanies')}
              items={selectPeople.positionsInOtherCompanies}
            />
            <TextItemSection
              title={t('positionsInOtherOrganizations')}
              items={selectPeople.positionsInOtherOrganizations}
            />
            <TextItemSection
              title={t('pastPositions')}
              items={selectPeople.pastPositions}
            />
            <TextSection
              title={t('shareholding')}
              value={selectPeople.shareholding}
            />
            <TextItemSection
              title={t('penaltyHistory5Years')}
              items={selectPeople.penaltyHistory5Years}
            />
            <TextItemSection
              title={t('familyRelationships')}
              items={selectPeople.familyRelationships}
            />
            <TextItemSection title={t('remarks')} items={selectPeople.remarks} />
          </div>
        </div>
      </Modal>
    </>
  )
}
