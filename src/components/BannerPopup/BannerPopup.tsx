import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { REVALIDATE_TIME } from '@/config/environtment'
import BannerPopupContent from '@/components/BannerPopup/component/BannerPopupContent'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { RevalidateTag } from '@/enums/CacheEnum'

export const BannerPopup = async ({ locale }: { locale: string }) => {
  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'banner/bannerpopup',
    locale,
    'published',
    REVALIDATE_TIME,
    RevalidateTag.BANNER_POPUP
  )

  return <BannerPopupContent data={response} />
}
