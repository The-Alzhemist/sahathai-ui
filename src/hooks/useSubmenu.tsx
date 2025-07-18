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
        icon: <UserIcon width='20' height='20' />,
        children: [
          {
            title: t('aboutUs.visionMission'),
            isExternalLink: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.VISION_MISSION}`,
          },
          {
            title: t('aboutUs.ourCommitmentSuccess'),
            isExternalLink: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.OUT_COMMITMENT_SUCCESS}`,
          },
          {
            title: t('aboutUs.boardDirectorsExecutiveCommittee'),
            isExternalLink: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.BOARD_DIRECTORS_EXE}`,
          },
          {
            title: t('aboutUs.corporateGroupStructureOrganizationalStructure'),
            isExternalLink: false,
            pathname: `/about-us?tab=${AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE}`,
          },
        ],
      },
      {
        title: t('service.title'),
        pathname: '/services',
        isExternalLink: false,
        icon: <HeadsetIcon width='20' height='20' />,
        children: [
          {
            title: t('service.title'),
            pathname: '/services',
            isExternalLink: false,
          },
          {
            title: t('service.commercialDock'),
            isExternalLink: false,
            pathname: `/services/commercial-dock`,
          },
          {
            title: t('service.bargeServices'),
            isExternalLink: false,
            pathname: `/services/barge-services`,
          },
          {
            title: t('service.containerHandling'),
            isExternalLink: false,
            pathname: `/services/container-handling`,
          },
          {
            title: t('service.containerMaintenance'),
            isExternalLink: false,
            pathname: `/services/container-maintenance`,
          },
          {
            title: t('service.groundContainerTransportationServices'),
            isExternalLink: false,
            pathname: `/services/ground-container-transportation-services`,
          },
        ],
      },
      {
        title: t('infrastructureContainers'),
        pathname: '/infrastructure-containers',
        isExternalLink: false,
        icon: <ShippingIcon width='20' height='20' />,
      },
      {
        title: t('news'),
        pathname: '/news',
        isExternalLink: false,
        icon: <NewspaperIcon width='20' height='20' />,
      },
      {
        title: t('eService'),
        pathname: 'https://sahathaiterminal.com/th/tracking/',
        isExternalLink: true,
        icon: <DeviceMobileIcon width='20' height='20' />,
      },
      {
        title: t('investorRelations.title'),
        pathname: '/investor-information',
        isExternalLink: false,
        icon: <ChartIcon width='20' height='20' />,
        children: [
          {
            title: t('investorRelations.investorInformation'),
            isExternalLink: false,
            pathname: `/investor-information`,
          },
          {
            title: t('investorRelations.sustainabilityManagement'),
            isExternalLink: false,
            pathname: `/sustainability-management`,
          },
          {
            title: t('investorRelations.codeConduct'),
            isExternalLink: false,
            pathname: `/code-of-conduct`,
          },
          {
            title: t('investorRelations.shareHolder'),
            isExternalLink: false,
            pathname: `/investor-information/share-holder`,
          },
          {
            title: t('investorRelations.shareHolderMeeting'),
            isExternalLink: false,
            pathname: `/investor-information/share-holder-meeting`,
          },
          {
            title: t('investorRelations.FinancialInformation'),
            isExternalLink: false,
            pathname: `/investor-information/financial-information`,
          },
          {
            title: t('investorRelations.PerformanceReport'),
            isExternalLink: false,
            pathname: `/investor-information/performance-report`,
          },
          {
            title: t('investorRelations.DocumentAnnouncement'),
            isExternalLink: false,
            pathname: `/investor-information/document-announcement`,
          },
          {
            title: t('investorRelations.GoodCorporate'),
            isExternalLink: false,
            pathname: `/investor-information/good-corporate`,
          },
          {
            title: t('investorRelations.SustainableDevelopment'),
            isExternalLink: false,
            pathname: `/investor-information/sustainable-development`,
          },
          {
            title: t('investorRelations.Activity'),
            isExternalLink: false,
            pathname: `/investor-information/activity`,
          },
          {
            title: t('investorRelations.Warrant'),
            isExternalLink: false,
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


