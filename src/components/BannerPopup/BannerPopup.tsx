import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { REVALIDATE_TIME } from '@/config/environtment'
import Image from 'next/image'
import BannerPopupContent from '@/components/BannerPopup/component/BannerPopupContent'
import { useLocale } from 'next-intl'

export const BannerPopup = async ({ locale }: { locale: string }) => {
  const response = await fetchStoryblokStory(
    'banner/bannerpopup',
    locale,
    'published',
    REVALIDATE_TIME,
    'e-service'
  )

  return <BannerPopupContent data={response} />
}
