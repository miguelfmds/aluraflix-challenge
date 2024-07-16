import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'

import { CardStyle } from './style';
import { IconButton } from './icon-button';

export function Card({ data, color, onDelete, onEdit }) {
  const { title, description, imageLink, videoLink, id } = data

  return (
    <CardStyle $color={color}>
      <Link to={videoLink} target='_blank' title={title}>
        <img src={imageLink} alt={title} title={description} />
      </Link>
      <div>
        <IconButton text="Deletar" onClick={() => onDelete(id)}>
          <img src={DeleteIcon} alt='Deletar Vídeo' />
        </IconButton>
        <IconButton text="Editar" onClick={() => onEdit(id)}>
          <img src={EditIcon} alt='Editar Vídeo' />
        </IconButton>
      </div>
    </CardStyle>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func 
}
