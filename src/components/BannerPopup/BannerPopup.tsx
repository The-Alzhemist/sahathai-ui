import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/libs/intl/navigation'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { REVALIDATE_TIME } from '@/config/environtment'
import Image from 'next/image'
import BannerPopupContent from '@/components/BannerPopup/component/BannerPopupContent'

export const BannerPopup = async () => {
  const locale = useLocale()

  const response = await fetchStoryblokStory(
    'banner/bannerpopup',
    locale,
    'published',
    REVALIDATE_TIME,
    'e-service'
  )

  return <BannerPopupContent data={response} />
}
