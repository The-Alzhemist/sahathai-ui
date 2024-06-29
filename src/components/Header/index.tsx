import { MenuTop } from './components/MenuTop'
import { Menu } from './components/Menu'
import { HeaderProps } from './interface'

export function Header({ locale }: HeaderProps) {
  return (
    <nav>
      <MenuTop locale={locale} />
      <Menu />
    </nav>
  )
}
