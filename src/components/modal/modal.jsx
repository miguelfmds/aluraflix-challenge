import { useState } from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/cross.svg';

import { Input } from '../inputs';
import { PrimaryButton, SecondaryButton } from '../buttons';

import { ModalStyle, ButtonContainer, OverlayStyle, IconButtonStyle, ModalBodyStyle } from './style';

export function Modal({ card, handleEditCard, setShowModal }) {
  const [form, setForm] = useState(card)

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
    handleEditCard(form)
  }

  return (
    <div>
      <OverlayStyle />
      <ModalStyle>
        <IconButtonStyle onClick={() => setShowModal(false)}>
          <img src={CloseIcon} alt="Fechar Modal" />
        </IconButtonStyle>
        <ModalBodyStyle>
          <h2>Editar Card:</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <Input
                label="Título"
                name="title"
                placeholder="Título do vídeo"
                type="text"
                value={form.title}
                onChange={handleTitleChange}
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
                value={form.imageLink}
                onChange={handleImageLinkChange}
              />
              <Input
                label="Vídeo"
                name="videoLink"
                placeholder="Link do vídeo"
                type="url"
                value={form.videoLink}
                onChange={handleVideoLinkChange}
              />
              <Input
                label="Descrição"
                name="description"
                placeholder="Sobre o que é esse vídeo?"
                type="textarea"
                value={form.description}
                onChange={handleDescriptionChange}
              />
            </fieldset>
            <ButtonContainer>
              <PrimaryButton type="submit">Enviar</PrimaryButton>
              <SecondaryButton onClick={() => setShowModal(false)}>Cancelar</SecondaryButton>
            </ButtonContainer>
          </form>
        </ModalBodyStyle>
      </ModalStyle>
    </div>
  )
}

Modal.propTypes = {
  card: PropTypes.object.isRequired,
  setShowModal: PropTypes.func.isRequired,
  handleEditCard: PropTypes.func.isRequired,
}
