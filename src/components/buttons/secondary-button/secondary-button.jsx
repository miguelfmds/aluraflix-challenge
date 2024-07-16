import PropTypes from 'prop-types';

import { ButtonStyle } from './style';

export function SecondaryButton({ children, ...props }) {
  return (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  )
}

SecondaryButton.propTypes = {
  children: PropTypes.string.isRequired
}