import styled from "styled-components";

export const TitleStyle = styled.div`
  background-color: ${props => props.$bgColor};
  margin-bottom: 40px;
  width: 17rem;
  height: 4.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  h2 {
    color: ${props => props.theme.colors.textWhite};
    font-weight: 900;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    width: 27rem;
    margin: 0 auto 40px;
  }
`

export const CardStyle = styled.div`
  flex: 0 0 auto;
  width: 370px;
  height: 320px;
  border: 4px solid ${props => props.$color};
  border-radius: 1rem;

  & > div {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  
  a {
    display: block;
    position: relative;
    width: 100%;
    
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      box-shadow: inset 0px 0px 17px 8px ${props => props.$color};
      border-radius: 0.25rem;
    }
    
    img {
      border-radius: 1rem;
      width: 100%;
      height: 260px;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 430px;
  }
`

export const IconButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  cursor: pointer;
  width: max-content;
  height: max-content;
  border: none;

  img {
    width: 28px;
    height: 28px;
  }
  
  span {
    color: ${props => props.theme.colors.textWhite};
    font-weight: 900;
    font-size: 1rem;
    text-transform: uppercase;
  }
`

export const PlaceholderStyle = styled.div`
  height: 320px;
  border: 4px dashed ${props => props.theme.colors.textWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  color: ${props => props.theme.colors.textWhite};

  p {
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1400px;
    width: 80vw;
    margin: auto;
  }
`
