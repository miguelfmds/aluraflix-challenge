import PropTypes from 'prop-types';

import { IconButtonStyle } from './style';

export function IconButton({ children, text, onClick, ...rest }) {
  return (
    <IconButtonStyle onClick={onClick} {...rest}>
      {children}
      <span>{text}</span>
    </IconButtonStyle>
  )
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
