import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { hexToRgb } from "../../../styles";
import { SecondaryButton } from "../secondary-button";


export const MenuButtonStyle = styled(SecondaryButton)`
  ${props => props.$isActive && activeButton}
`

const activeButton = css`
  color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.blue};
  box-shadow: 
    inset 0px 0px 8px 2px rgba(${props => hexToRgb(props.theme.colors.blue)}),
    inset -0px -0px 8px 2px rgba(${props => hexToRgb(props.theme.colors.blue)});
`

export const LinkButtonStyle = styled(NavLink)`
  text-decoration: none;
`
