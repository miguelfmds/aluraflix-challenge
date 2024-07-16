import styled from "styled-components";
import { hexToRgb } from "../../styles";

export const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.black};
  padding: 42px 0;
  text-align: center;
  border-top: 4px solid ${props => props.theme.colors.blue};
  box-shadow: 0 5px 29px rgba(${props => hexToRgb(props.theme.colors.blue)} / 0.7);

  img {
    width: 168px;
  }
`;