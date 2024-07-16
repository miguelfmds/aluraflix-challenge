import { BannerStyle, BackgroundImage, TextContainerStyle, VideoContainerStyle } from './style'

export function Banner() {
    return (
        <BannerStyle>
          <BackgroundImage />
          <div>
            <TextContainerStyle>
              <h1>Bem-Vindo ao Aluraflix!</h1>
              <h3>Seu portal para vídeos educativos sobre tecnologia e programação. Explore, aprenda e inove com os melhores conteúdos da Alura!</h3>
            </TextContainerStyle>
            <VideoContainerStyle>
              <iframe
                src="https://www.youtube.com/embed/UatufikhZR8"
                title="Especial de 10 anos  | #ComunidadeAlura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              >
              </iframe>
            </VideoContainerStyle>
          </div>
        </BannerStyle>
    )
  }