import styled, { css } from "styled-components";
import { hexToRgb } from "../../../styles";
import { NavLink } from "react-router-dom";

const inactiveButton = css`
  height: 40px;
  cursor: pointer;
  
  img {
    width: 40px;
    height: 40px;
  }
`

const activeButton = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 24px;
  gap: 16px;

  background-color: rgba(${props => hexToRgb(props.theme.colors.blue)} / 0.25);
  border: 2px solid ${props => props.theme.colors.blue};
  border-radius: 48px;
  color: ${props => props.theme.colors.blue};
  text-decoration: none;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 1.25rem;
    font-weight: 900;
    text-transform: uppercase;
  } 
`

export const CollapseButtonStyle = styled.div`
  ${props => props.$isActive ? activeButton : inactiveButton}
`

export const LinkButtonStyle = styled(NavLink)`
  text-decoration: none;
`




