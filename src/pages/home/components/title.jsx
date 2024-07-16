import PropTypes from 'prop-types';

import { TitleStyle } from './style';

export function Title({ text, bgColor }) {
  return (
    <TitleStyle $bgColor={bgColor}>
        <h2>{text}</h2>
    </TitleStyle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
}
