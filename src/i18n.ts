import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['th', 'en']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()

  // Define the list of pages
  const pages = [
    'common',
    'Menu',
    'HomePage',
    'CommitmentSuccessPage',
    'CorporateGroupOrganizationalStructurePage',
    'BoardAndExecutivesPage',
    'AntiCorruptionPolicyPage',
    'VisionMissionValuesPage',
    'PortFacilitiesPage',
    'TechnologyEquipmentPage',
    'HarborOperatingSystemPage',
    'OperationGuidelinesPage',
    'ContainerServicesPage',
    'ValueAddedServicesPage',
    'NewsPage',
    'AboutUsVideoPage',
    'AnnualReportPage',
  ]

  const messages = {}

  for (const page of pages) {
    const pageMessages = (await import(`../messages/${page}/${locale}.json`))
      .default
    Object.assign(messages, pageMessages)
  }

  return { messages, timeZone: 'Asia/Bangkok' }
})
