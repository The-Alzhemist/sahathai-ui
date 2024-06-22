'use client'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { LocaleEnum } from '@/enums/LocaleEnum'
import { Link, usePathname, useRouter } from '@/libs/intl/navigation'
import { HeaderProps } from './interface'
import { Menu, MenuItem } from './Menu'

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('Menu')
  const router = useRouter()
  const pathname = usePathname()
  const queryStrings = useSearchParams()

  function handleLocaleChange() {
    const query = queryStrings.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, {
      locale: locale === LocaleEnum.TH ? LocaleEnum.EN : LocaleEnum.TH,
    })
  }
  return (
    <nav className='h-[62px] bg-dark flex items-center justify-between'>
      <Link href='/'>
        <Image
          className='ml-[26px]'
          src='/logo.png'
          width={101}
          height={24}
          alt=''
          priority
        />
      </Link>
      <div className='flex items-center text-white kanit font-[300]'>
        <Menu label={t('about.name')}>
          <MenuItem
            label={t('about.menu.commitmentSuccess')}
            link='/commitment-success'
          />
          <MenuItem
            label={t('about.menu.corporateGroupAndOrganizationalStructure')}
            link='/corporate-group-and-organizational-structure'
          />
          <MenuItem
            label={t('about.menu.boardAndExecutives')}
            link='/boar-and-executives'
          />
          <MenuItem
            label={t('about.menu.antiCorruptionPolicy')}
            link='/anti-corruption-policy'
          />
          <MenuItem
            label={t('about.menu.visionMissionValues')}
            link='/vision-mission-values'
          />
        </Menu>
        <Menu label={t('facilities.name')}>
          <MenuItem label={t('facilities.menu.facilities')} link='' />
          <MenuItem label={t('facilities.menu.technology')} link='' />
          <MenuItem label={t('facilities.menu.dockOperatingSystem')} link='' />
          <MenuItem label={t('facilities.menu.equipment')} link='' />
          <MenuItem label={t('facilities.menu.instructions')} link='' />
        </Menu>
        <Menu label={t('service.name')}>
          <MenuItem label={t('service.menu.containerizedCargo')} link='' />
          <MenuItem label={t('service.menu.multipurposeTerminal')} link='' />
          <MenuItem label={t('service.menu.warehousing')} link='' />
          <MenuItem label={t('service.menu.valueAddedServices')} link='' />
        </Menu>
        <Link className='px-[16px] py-[18px] hover:bg-dark-100' href='/news'>
          {t('news')}
        </Link>
        <Menu label={t('eService.name')}>
          <MenuItem label={t('eService.menu.trackByContainer')} link='' />
          <MenuItem label={t('eService.menu.trackByBookingNumber')} link='' />
          <MenuItem label={t('eService.menu.trackByBLNumber')} link='' />
          <MenuItem label={t('eService.menu.containerDepotBooking')} link='' />
          <MenuItem label={t('eService.menu.bookQBCDS')} link='' />
        </Menu>
        <Menu label={t('investorRelations.name')}>
          <MenuItem
            label={t('investorRelations.menu.inroductionVideo')}
            link=''
          />
          <Menu label={t('investorRelations.menu.financialReport.name')}>
            <MenuItem
              label={t(
                'investorRelations.menu.financialReport.menu.annualReport'
              )}
              link=''
            />
            <MenuItem
              label={t(
                'investorRelations.menu.financialReport.menu.financialInformation'
              )}
              link=''
            />
            <MenuItem
              label={t(
                'investorRelations.menu.financialReport.menu.performanceReport'
              )}
              link=''
            />
            <MenuItem
              label={t(
                'investorRelations.menu.financialReport.menu.publishedDocument'
              )}
              link=''
            />
          </Menu>
          <Menu label={t('investorRelations.menu.shareholderInformation.name')}>
            <MenuItem
              label={t(
                'investorRelations.menu.shareholderInformation.menu.majorShareholders'
              )}
              link=''
            />
            <MenuItem
              label={t(
                'investorRelations.menu.shareholderInformation.menu.dividendPayment'
              )}
              link=''
            />
          </Menu>
          <MenuItem
            label={t('investorRelations.menu.shareholderMeeting')}
            link=''
          />
          <Menu label={t('investorRelations.menu.analysisAndSupervision.name')}>
            <MenuItem
              label={t(
                'investorRelations.menu.analysisAndSupervision.menu.securitiesAnalysis'
              )}
              link=''
            />
            <MenuItem
              label={t(
                'investorRelations.menu.analysisAndSupervision.menu.corporateGovernance'
              )}
              link=''
            />
          </Menu>
          <Menu label={t('investorRelations.menu.sustainability.name')}>
            <MenuItem
              label={t(
                'investorRelations.menu.sustainability.menu.sustainabilityManagement'
              )}
              link=''
            />
            <MenuItem
              label={t('investorRelations.menu.sustainability.menu.activity')}
              link=''
            />
          </Menu>
          <MenuItem label={t('investorRelations.menu.warrant')} link='' />
          <MenuItem
            label={t('investorRelations.menu.stockInformation')}
            link=''
          />
          <MenuItem label={t('investorRelations.menu.factsheet')} link='' />
        </Menu>

        <div className='px-[16px] py-[18px]'>
          <button type='button' onClick={handleLocaleChange}>
            {locale}
          </button>
        </div>
      </div>
    </nav>
  )
}
