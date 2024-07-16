import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 180px;
  height: 54px;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase
`
