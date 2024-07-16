import styled from "styled-components"

export const NewVideoStyle = styled.div`
  margin: 6rem auto;
  min-width: 85vw;

  h1, p {
    text-transform: uppercase;
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    margin: 2rem 0;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 600;
    margin: 3rem 0 2rem;
    border-top: 2px solid ${props => props.theme.colors.gray};
    border-bottom: 2px solid ${props => props.theme.colors.gray};
    padding: 1.5rem 0;
  }

  form fieldset {
    margin-bottom: 2rem;
    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-areas: 'title category' 'image video' 'description description';
      gap: 1rem;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: max-content;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    margin: 0;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`

export const SuccessMessage = styled.div`
  color: ${props => props.theme.colors.green};
  font-size: 1.5rem;
  border: 2px solid ${props => props.theme.colors.green};
  border-radius: 5px;
  margin: 2rem auto;
  width: max-content;
  padding: 0.5rem;
`