import { styled } from "styled-components";
import { hexToRgb } from "../../styles";

export const NavbarStyle = styled.nav`
  padding: 1.5rem 4rem;
  background-color: ${props => props.theme.colors.black};
  box-shadow: 0 5px 29px rgba(${props => hexToRgb(props.theme.colors.blue)} / 0.7);
  border-top: 4px solid ${props => props.theme.colors.blue};

  @media screen and (min-width: 768px) {
    border: none;
  }
`

export const NavbarMobileStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavbarDesktopStyle = styled.div`
  display: none;
  
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 160px;
    }

    div {
      display: flex;
      gap: 1.5rem;
    }
  }
`
