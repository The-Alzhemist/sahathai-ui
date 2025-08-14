import { useTranslations } from 'next-intl'
import React, { useMemo } from 'react'
import { AboutUsTabEnum } from '@/features/aboutUs/pages/AboutUsPage/interface'
import { UserIcon } from '@/components/icons/UserIcon'
import { HeadsetIcon } from '@/components/icons/HeadsetIcon'
import { ShippingIcon } from '@/components/icons/ShippingIcon'
import { NewspaperIcon } from '@/components/icons/NewsIcon'
import { DeviceMobileIcon } from '@/components/icons/DeviceMobileIcon'
import { ChartIcon } from '@/components/icons/ChartIcon'

export function useSubmenu() {
  const t = useTranslations('Menu')

  const menus = useMemo(() => {
    return [
      {
        title: t('aboutUs.title'),
        pathname: '/about-us',
        isExternalLink: false,
        isScroll: false,
        icon: <UserIcon width='20' height='20' />,
        children: [
          {
            title: t('aboutUs.visionMission'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.VISION_MISSION}`,
          },
          {
            title: t('aboutUs.ourCommitmentSuccess'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.OUT_COMMITMENT_SUCCESS}`,
          },
          {
            title: t('aboutUs.boardDirectorsExecutiveCommittee'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.BOARD_DIRECTORS_EXE}`,
          },
          {
            title: t('aboutUs.corporateGroupStructureOrganizationalStructure'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE}`,
          },
        ],
      },
      {
        title: t('service.title'),
        pathname: '/services',
        isExternalLink: false,
        isScroll: false,
        icon: <HeadsetIcon width='20' height='20' />,
        children: [
          {
            title: t('service.title'),
            pathname: '/services',
            isExternalLink: false,
            isScroll: false,
          },
          {
            title: t('service.commercialDock'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/services/commercial-dock`,
          },
          {
            title: t('service.bargeServices'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/services/barge-services`,
          },
          {
            title: t('service.containerHandling'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/services/container-handling`,
          },
          {
            title: t('service.containerMaintenance'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/services/container-maintenance`,
          },
          {
            title: t('service.groundContainerTransportationServices'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/services/ground-container-transportation-services`,
          },
          {
            title: t('service.containerServices'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/services/container-services`,
          },
        ],
      },
      {
        title: t('infrastructureContainers.title'),
        pathname: '/infrastructure-containers',
        isExternalLink: false,
        isScroll: false,
        icon: <ShippingIcon width='20' height='20' />,
        children: [
          {
            title: t('infrastructureContainers.machineryEquipment'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/infrastructure-containers#machinery-equipment`,
          },
          {
            title: t('infrastructureContainers.logisticInnovation'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/infrastructure-containers#logistic-innovation`,
          },
          {
            title: t('infrastructureContainers.opticalCharacterRecognition'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/infrastructure-containers#optical-character-recognition`,
          },
          {
            title: t('infrastructureContainers.operationGuidelines'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/infrastructure-containers#operation-guidelines`,
          },
          {
            title: t('infrastructureContainers.contactUs'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/infrastructure-containers#contact-us`,
          },
        ],
      },
      {
        title: t('news.title'),
        pathname: '/news',
        isExternalLink: false,
        isScroll: false,
        icon: <NewspaperIcon width='20' height='20' />,
        children: [
          {
            title: t('news.latestNews'),
            pathname: '/news#latest-news',
            isExternalLink: false,
            isScroll: true,
          },
          {
            title: t('news.pressRelease'),
            pathname: '/news#press-release',
            isExternalLink: false,
            isScroll: true,
          },
        ],
      },
      {
        title: t('eService'),
        pathname: 'https://sahathaiterminal.com/th/tracking/',
        isExternalLink: true,
        isScroll: false,
        icon: <DeviceMobileIcon width='20' height='20' />,
      },
      {
        title: t('investorRelations.title'),
        pathname: '/investor-information',
        isExternalLink: false,
        isScroll: false,
        icon: <ChartIcon width='20' height='20' />,
        children: [
          {
            title: t('investorRelations.investorInformation'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information`,
          },
          {
            title: t('investorRelations.sustainabilityManagement'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/sustainability-management`,
          },
          {
            title: t('investorRelations.codeConduct'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/code-of-conduct`,
          },
          {
            title: t('investorRelations.shareHolder'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/share-holder`,
          },
          {
            title: t('investorRelations.shareHolderMeeting'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/share-holder-meeting`,
          },
          {
            title: t('investorRelations.FinancialInformation'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/financial-information`,
          },
          {
            title: t('investorRelations.PerformanceReport'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/performance-report`,
          },
          {
            title: t('investorRelations.DocumentAnnouncement'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/document-announcement`,
          },
          {
            title: t('investorRelations.GoodCorporate'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/good-corporate`,
          },

          {
            title: t('investorRelations.Activity'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/activity`,
          },
          {
            title: t('investorRelations.Warrant'),
            isExternalLink: false,
            isScroll: false,
            pathname: `/investor-information/warrant`,
          },
        ],
      },
    ]
  }, [t])

  return {
    menus,
  }
}
