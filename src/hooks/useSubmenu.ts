import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export function useSubmenu() {
  const t = useTranslations('Menu')

  const menus = useMemo(() => {
    return [
      { title: t('aboutUs'), pathname: '/about-us', isExternalLink: false },
      { title: t('service'), pathname: '/services', isExternalLink: false },
      {
        title: t('infrastructureContainers'),
        pathname: '/infrastructure-containers',
        isExternalLink: false,
      },
      { title: t('news'), pathname: '/news', isExternalLink: false },
      {
        title: t('eService'),
        pathname: 'https://sahathaiterminal.com/th/tracking/',
        isExternalLink: true,
      },
      {
        title: t('investorRelations'),
        pathname: '/investor-information',
        isExternalLink: false,
      },
    ]
  }, [t])

  return {
    menus,
  }
}
