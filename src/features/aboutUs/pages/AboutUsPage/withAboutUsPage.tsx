import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { EyeIcon } from '@/components/icons/EyeIcon'
import { CheckCircle2Icon } from '@/components/icons/CheckCircle2Icon'
import { PeopleIcon } from '@/components/icons/PeopleIcon'
import { TreeStructureIcon } from '@/components/icons/TreeStructureIcon'
import { AboutPageProps } from './interface'

export function withAboutUsPage(Component: React.FC<AboutPageProps>) {
  function WithAboutUsPage() {
    const t = useTranslations('AboutUsPage.Tabs')

    const tabs = useMemo(
      () => [
        {
          title: t('visionMission'),
          icon: <EyeIcon width='20' height='20' />,
        },
        {
          title: t('ourCommitmentSuccess'),
          icon: <CheckCircle2Icon width='20' height='20' />,
        },
        {
          title: t('boardDirectorsExecutiveCommittee'),
          icon: <PeopleIcon width='20' height='20' />,
        },
        {
          title: t('corporateGroupStructureOrganizationalStructure'),
          icon: <TreeStructureIcon width='20' height='20' />,
        },
      ],
      [t]
    )

    const [active, setActive] = useState(tabs[0].title)

    const componentProps = {
      tabs,
      active,
      setActive,
    }

    return <Component {...componentProps} />
  }

  return WithAboutUsPage
}
