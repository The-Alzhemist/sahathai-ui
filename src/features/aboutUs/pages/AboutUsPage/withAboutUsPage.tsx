import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { EyeIcon } from '@/components/icons/EyeIcon'
import { CheckCircle2Icon } from '@/components/icons/CheckCircle2Icon'
import { PeopleIcon } from '@/components/icons/PeopleIcon'
import { TreeStructureIcon } from '@/components/icons/TreeStructureIcon'
import { AboutPageProps, AboutUsTabEnum } from './interface'
import { useSearchParams } from 'next/navigation'
import { useRouter } from '@/libs/intl/navigation'

export function withAboutUsPage(Component: React.FC<AboutPageProps>) {
  function WithAboutUsPage() {
    const t = useTranslations('AboutUsPage.Tabs')
    const searchParams = useSearchParams()
    const searchParamTab = searchParams.get('tab')
    const router = useRouter()

    const tabs = useMemo(
      () => [
        {
          key: AboutUsTabEnum.VISION_MISSION,
          title: t('visionMission'),
          icon: <EyeIcon width='20' height='20' />,
        },
        {
          key: AboutUsTabEnum.OUT_COMMITMENT_SUCCESS,
          title: t('ourCommitmentSuccess'),
          icon: <CheckCircle2Icon width='20' height='20' />,
        },
        {
          key: AboutUsTabEnum.BOARD_DIRECTORS_EXE,
          title: t('boardDirectorsExecutiveCommittee'),
          icon: <PeopleIcon width='20' height='20' />,
        },
        {
          key: AboutUsTabEnum.CORPORATE_GROUP_STRUCTURE,
          title: t('corporateGroupStructureOrganizationalStructure'),
          icon: <TreeStructureIcon width='20' height='20' />,
        },
      ],
      [t]
    )

    const active = useMemo(() => {
      const matchedTab = tabs.find(tab => tab.key === searchParamTab)
      return matchedTab ? matchedTab.key : tabs[0].key
    }, [searchParamTab, tabs])

    const handleOnActiveTabChange = (activeTab: AboutUsTabEnum) => {
      router.push(`/about-us?tab=${activeTab}`)
    }

    const componentProps = {
      tabs,
      active,
      handleOnActiveTabChange,
    }

    return <Component {...componentProps} />
  }

  return WithAboutUsPage
}
