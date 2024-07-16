import styled from 'styled-components'
import BannerImage from '../../../../assets/banner.png'


export const BannerStyle = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        position: relative;
        padding: 0 1.75rem;
        display: flex;
        align-items: center;

        min-height: 36.5rem;
        max-width: 100%;
        margin: 0;

        &>div {
            display: flex;
            gap: 1.5rem;
            margin: auto;

            @media screen and (min-width: 1440px) {
                gap: 2.5rem;
            }
        }

        @media screen and (min-width: 1440px) {
            padding: 0 5rem;
        }
    }
`

export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BannerImage});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
`

export const TextContainerStyle = styled.div`
    text-align: left;
    align-self: flex-end;

    h1 {
        font-size: 3rem;
        font-weight: 900;
        margin-bottom: 0.5rem;
        line-height: 3.5rem;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 2rem;
    }

    h1, h3 {
        color: ${props => props.theme.colors.white};
    }
`

export const VideoContainerStyle = styled.div`
    width: max-content;
    border: 4px solid ${props => props.theme.colors.blue};
    border-radius: 1rem;
    pointer-events: none;

    display: block;
    position: relative;
    
    &::after {
      pointer-events: none;
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      box-shadow: inset 0px 0px 15px 8px ${props => props.theme.colors.blue};
      border-radius: 0.25rem;
    }

    iframe {
        pointer-events: auto;
        width: 450px;
        height: 330px;
        border-radius: 1rem;

        @media screen and (min-width: 1440px) {
            width: 640px;
            height: 410px;
        }
    }
`
