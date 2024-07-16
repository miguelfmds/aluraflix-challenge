import styled from "styled-components";
import { hexToRgb } from "../../styles";

export const PageStyle = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: rgba(${props => hexToRgb(props.theme.colors.black)} / 0.9);
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column-reverse;
  min-height: 100vh;

  footer {
    display: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;

    footer {
      display: block;
    }
  }
`