import PropTypes from 'prop-types';

import { ButtonStyle } from './style';

export function PrimaryButton({ children, ...props }) {
  return (
    <ButtonStyle {...props}>{children}</ButtonStyle>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired
}