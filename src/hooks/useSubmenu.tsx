import { useTranslations } from 'next-intl'
import React, { useMemo } from 'react'
import { AboutUsTabEnum } from '@/features/aboutUs/pages/AboutUsPage/interface'
import { UserIcon } from '@/components/icons/UserIcon'
import { HeadsetIcon } from '@/components/icons/HeadsetIcon'
import { ShippingIcon } from '@/components/icons/ShippingIcon'
import { NewspaperIcon } from '@/components/icons/NewsIcon'

import { ChartIcon } from '@/components/icons/ChartIcon'

export function useSubmenu() {
  const t = useTranslations('Menu')

  const menus = useMemo(() => {
    return [
      {
        title: t('home.title'),
        pathname: '/',
        isExternalLink: false,
        isScroll: true,
        icon: <ChartIcon width='20' height='20' />,
      },
      {
        title: t('aboutUs.title'),
        pathname: '/about-us',
        isExternalLink: false,
        isScroll: true,
        icon: <UserIcon width='20' height='20' />,
        children: [
          {
            title: t('aboutUs.visionMission'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/about-us?tab=${AboutUsTabEnum.VISION_MISSION}`,
          },
          {
            title: t('aboutUs.ourCommitmentSuccess'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/about-us?tab=${AboutUsTabEnum.OUT_COMMITMENT_SUCCESS}`,
          },
          {
            title: t('aboutUs.boardDirectorsExecutiveCommittee'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/about-us?tab=${AboutUsTabEnum.BOARD_DIRECTORS_EXE}`,
          },
          {
            title: t('aboutUs.corporateGroupStructureOrganizationalStructure'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/about-us?tab=${AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE}`,
          },
        ],
      },
      {
        title: t('service.title'),
        pathname: '/services',
        isExternalLink: false,
        isScroll: true,
        icon: <HeadsetIcon width='20' height='20' />,
        children: [
          {
            title: t('service.title'),
            pathname: '/services',
            isExternalLink: false,
            isScroll: true,
          },
          {
            title: t('service.commercialDock'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/services/commercial-dock`,
          },
          {
            title: t('service.bargeServices'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/services/barge-services`,
          },
          {
            title: t('service.containerHandling'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/services/container-handling`,
          },
          {
            title: t('service.containerMaintenance'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/services/container-maintenance`,
          },
          {
            title: t('service.groundContainerTransportationServices'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/services/ground-container-transportation-services`,
          },
          {
            title: t('service.containerServices'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/services/container-services`,
          },
        ],
      },
      {
        title: t('infrastructureContainers.title'),
        pathname: '/infrastructure-containers',
        isExternalLink: false,
        isScroll: true,
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
        isScroll: true,
        icon: <NewspaperIcon width='20' height='20' />,
      },
      {
        title: t('pressRelease.title'),
        pathname: '/press-releases',
        isExternalLink: false,
        isScroll: true,
        icon: <NewspaperIcon width='20' height='20' />,
      },
      {
        title: t('socialResponsibility.title'),
        pathname: '/social-responsibility',
        isExternalLink: false,
        isScroll: true,
        icon: <NewspaperIcon width='20' height='20' />,
      },
      {
        title: t('eService.title'),
        pathname: '/e-service',
        isExternalLink: false,
        isScroll: true,
        icon: <ChartIcon width='20' height='20' />,
      },
      {
        title: t('investorRelations.title'),
        pathname: '/investor-information',
        isExternalLink: false,
        isScroll: true,
        icon: <ChartIcon width='20' height='20' />,
        children: [
          {
            title: t('investorRelations.investorInformation'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information`,
          },
          {
            title: t('investorRelations.sustainabilityManagement'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/sustainability-management`,
          },

          {
            title: t('investorRelations.shareHolder'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/share-holder`,
          },
          {
            title: t('investorRelations.codeConduct'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/code-of-conduct`,
          },
          {
            title: t('investorRelations.shareHolderMeeting'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/share-holder-meeting`,
          },
          {
            title: t('investorRelations.FinancialInformation'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/financial-information`,
          },
          {
            title: t('investorRelations.SetExchangeAnnouncement'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/set-exchange-announcement`,
          },
          {
            title: t('investorRelations.PerformanceReport'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/performance-report`,
          },
          {
            title: t('investorRelations.DocumentAnnouncement'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/document-announcement`,
          },
          {
            title: t('investorRelations.GoodCorporate'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/good-corporate`,
          },
          {
            title: t('investorRelations.Activity'),
            isExternalLink: false,
            isScroll: true,
            pathname: `/investor-information/activity`,
          },
        ],
      },
    ]
  }, [t])

  return {
    menus,
  }
}
