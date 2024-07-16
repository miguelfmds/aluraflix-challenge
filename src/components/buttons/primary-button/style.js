import styled from "styled-components";
import { hexToRgb } from "../../../styles";

export const ButtonStyle = styled.button`
  width: 180px;
  height: 54px;
  background-color: transparent;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.colors.blue};
  border: 2px solid ${props => props.theme.colors.blue};
  box-shadow: 
    inset 0px 0px 8px 2px rgba(${props => hexToRgb(props.theme.colors.blue)}),
    inset -0px -0px 8px 2px rgba(${props => hexToRgb(props.theme.colors.blue)});
`
