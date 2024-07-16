import styled from "styled-components";
import SelectArrowIcon from '../../assets/select-arrow-icon.svg'
import { hexToRgb } from "../../styles";

export const InputGroupStyle = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  input, textarea, select {
    border: 3px solid ${props => props.theme.colors.gray};
    border-radius: 10px;
    background-color: transparent;
    padding: 1rem 0.5rem;
    color: ${props => props.theme.colors.white};

    &::placeholder {
      color: ${props => props.theme.colors.lightGray};
    }

    &:focus:invalid {
      border-color: ${props => props.theme.colors.red};
    }
  }

  textarea {
    resize: none;
  }

  select {
    appearance: none;
    background-image: url(${SelectArrowIcon});
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;

    &:hover {
      background-color: rgba(${props => hexToRgb(props.theme.colors.gray)} / 1);
    }

    option {
      background-color: ${props => props.theme.colors.gray};
    }
  }
`