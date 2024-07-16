import styled from "styled-components";
import { hexToRgb } from "../../styles";

export const CategorySectionStyle = styled.section`
  max-width: 1400px;
  margin: 2rem 0 3rem;
  height: 470px;

  ::-webkit-scrollbar {
    height: 20px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(${props => hexToRgb(props.theme.colors.blue)} / 0.2);
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    border: 5px solid transparent;
    background-color: ${props => props.theme.colors.blue};
    background-clip: content-box;
  }
`

export const CarouselCategoryStyle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 1.5rem;

  padding-bottom: 1.5rem;
`
