import { FooterStyled } from './style'
import Logo from '/logo.svg'

export function Footer() {
  return (
    <FooterStyled>
      <img src={Logo} alt="Aluraflix Logo" />
    </FooterStyled>
  )
}