import { useState } from "react"
import { Page, PrimaryButton, SecondaryButton, Input, PageContent } from "../../components"
import { ButtonContainer, NewVideoStyle, SuccessMessage } from "./style"
import { LocalStorage } from "../../client"

export function NewVideo() {
  const defaultForm = {
    title: '',
    category: 'FRONT_END',
    imageLink: '',
    videoLink: '',
    description: ''
  }
  
  const [form, setForm] = useState(defaultForm)

  const [successMessage, setSuccessMessage ] = useState(false)

  const handleTitleChange = (title) => {
    setForm({ ...form, title })
  }
  const handleCategoryChange = (category) => {
    setForm({ ...form, category })
  }
  const handleImageLinkChange = (imageLink) => {
    setForm({ ...form, imageLink })
  }
  const handleVideoLinkChange = (videoLink) => {
    setForm({ ...form, videoLink })
  }
  const handleDescriptionChange = (description) => {
    setForm({ ...form, description })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    LocalStorage.addVideo({
      id: window.crypto.randomUUID(),
      ...form
    });

    setSuccessMessage(true);

    setForm(defaultForm)

    setTimeout( () => {
      setSuccessMessage(false);
    }, 2000);
  }

  return (
    <Page>
      <PageContent>
        <NewVideoStyle>
          <h1>Novo Vídeo</h1>
          <p>Complete o formulário para criar um novo card de vídeo</p>
          <h2>Criar Card</h2>
          
          
          <form onSubmit={handleSubmit}>
            <fieldset>
              <Input
                label="Título"
                name="title"
                placeholder="Título do vídeo"
                type="text"
                onChange={handleTitleChange}
                value={form.title}
              />
              <Input
                label="Categoria"
                name="category"
                type="select"
                onChange={handleCategoryChange}
                value={form.category}
              >
                <option value="FRONT_END">Front-End</option>
                <option value="BACK_END">Back-End</option>
                <option value="MOBILE">Mobile</option>
              </Input>
              <Input
                label="Imagem"
                name="imageLink"
                placeholder="Link da imagem"
                type="url"
                onChange={handleImageLinkChange}
                value={form.imageLink}
              />
              <Input
                label="Vídeo"
                name="videoLink"
                placeholder="Link do vídeo"
                type="url"
                onChange={handleVideoLinkChange}
                value={form.videoLink}
              />
              <Input
                label="Descrição"
                name="description"
                placeholder="Sobre o que é esse vídeo?"
                type="textarea"
                onChange={handleDescriptionChange}
                value={form.description}
              />
            </fieldset>
            <ButtonContainer>
              <PrimaryButton type="submit">Enviar</PrimaryButton>
              <SecondaryButton type="reset">Cancelar</SecondaryButton>
            </ButtonContainer>

            {successMessage && <SuccessMessage>Vídeo enviado com sucesso!</SuccessMessage>}
          </form>
        </NewVideoStyle>
      </PageContent>
    </Page>
  )
}