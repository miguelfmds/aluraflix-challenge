import Logo from '/logo.svg'
import HomeIcon from '../../assets/home.svg'
import HomeActiveIcon from '../../assets/home-active.svg'
import PlusIcon from '../../assets/plus.svg'
import ActivePlusIcon from '../../assets/plus-active.svg'

import { CollapseButton, MenuButton } from "../buttons"
import { NavbarStyle, NavbarDesktopStyle, NavbarMobileStyle } from "./style"

export function Navbar() {
  return (
    <NavbarStyle>
      <NavbarDesktopStyle>
        <img src={Logo} alt="Alurafix Logo" />
        <div>
          <MenuButton to={'/'}>Home</MenuButton>
          <MenuButton to={'/new-video'}>Novo Vídeo</MenuButton>
        </div>
      </NavbarDesktopStyle>
      <NavbarMobileStyle>
        <CollapseButton
          to={'/'}
          icon={HomeIcon}
          activeIcon={HomeActiveIcon}
          alt="Início"
        >
          Home
        </CollapseButton>
        <CollapseButton
          to={'/new-video'}
          icon={PlusIcon}
          activeIcon={ActivePlusIcon}
          alt="Novo Vídeo"
        >
          Novo Vídeo
        </CollapseButton>
      </NavbarMobileStyle>
    </NavbarStyle>
  )
}
