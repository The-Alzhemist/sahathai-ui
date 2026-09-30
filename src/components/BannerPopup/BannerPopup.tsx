import { getBannerPopup } from '@/libs/strapi/bannerPopup'
import BannerPopupContent from '@/components/BannerPopup/component/BannerPopupContent'

export const BannerPopup = async ({ locale }: { locale: string }) => {
  const response = await getBannerPopup(locale)

  return <BannerPopupContent data={response.data[0]} />
}
