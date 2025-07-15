import { Menu } from '@/components/Menu'
import { ComprehensiveCommercialPortServices } from '../../components/ComprehensiveCommercialPortServices'
import { ContainerStorageWarehouseServices } from '../../components/ContainerStorageWarehouseServices'
import { InventoryManagementServices } from '../../components/InventoryManagementServices'
import ContactUs from '@/components/ContactUs/ContactUs'
import { Banner } from '@/components/Banner'
import { useTranslations } from 'next-intl'

export function ServicesPage() {
  const t = useTranslations('Menu')
  return (
    <main>
      <Menu />
      <Banner imagePath="/about-us/banner.png" alt={t('service')} caption={t('service')} />
      <ComprehensiveCommercialPortServices />
      <ContainerStorageWarehouseServices />
      <InventoryManagementServices />
      <ContactUs className="pt-[80px] pb-[114px]" />
      {/* <CookieConsentFloatingBar /> */}
    </main>
  )
}
