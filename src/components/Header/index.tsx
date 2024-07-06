import { MenuTop } from './components/MenuTop'
import { Menu } from './components/Menu'

export function Header() {
  return (
    <nav className='bg-blue-400'>
      <MenuTop />
      <Menu />
    </nav>
  )
}
