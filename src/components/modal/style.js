import styled from 'styled-components'

import { hexToRgb } from '../../styles'

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(${props => hexToRgb(props.theme.colors.blue)} / 0.1);
`

export const ModalStyle = styled.div`
  padding: 1rem 0;
  position: fixed;
  max-width: 900px;
  width: 80vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.colors.darkBlue};
  border: 5px solid ${props => props.theme.colors.blueSecondary};
  border-radius: 1rem;
  overflow-y: auto;
`

export const IconButtonStyle = styled.button`
  margin: 0 0.75rem 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  width: max-content;
  height: max-content;
  border: none;

  img {
    width: 42px;
    height: 42px;
  }
`

export const ModalBodyStyle = styled.div`
  margin: 0 auto;
  max-width: 575px;
  padding: 0 1rem 1rem;

  h2 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
    color: ${props => props.theme.colors.blue};
    margin-bottom: 1.5rem;

    @media screen and (min-width: 1024px) {
      text-align: left;
    }
  }

  form { 
    input, textarea, select {
      border-color: ${props => props.theme.colors.blue};
    }
  }
`

export const ButtonContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: max-content;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 100%;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

