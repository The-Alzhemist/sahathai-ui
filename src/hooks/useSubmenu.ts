import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

export function useSubmenu() {
  const t = useTranslations('Menu')

  const menus = useMemo(() => {
    return [
      { title: t('aboutUs'), pathname: '/about-us' },
      { title: t('service'), pathname: '/services' },
      {
        title: t('infrastructureContainers'),
        pathname: '/infrastructure-containers',
      },
      { title: t('news'), pathname: '/news' },
      { title: t('eService'), pathname: '#' },
      { title: t('investorRelations'), pathname: '/investor-information' },
    ]
  }, [t])

  return {
    menus,
  }
}
