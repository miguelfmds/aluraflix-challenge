import PropTypes from 'prop-types';

import { LinkButtonStyle, MenuButtonStyle } from './style';

export function MenuButton({ to, children }) {
  return (
    <LinkButtonStyle to={to}>
      {({ isActive }) => (
        <MenuButtonStyle $isActive={!!isActive}>{children}</MenuButtonStyle>
      )}
    </LinkButtonStyle>
  )
}

MenuButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}