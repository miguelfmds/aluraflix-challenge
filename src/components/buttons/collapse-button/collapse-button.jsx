import { PropTypes } from "prop-types";

import { CollapseButtonStyle, LinkButtonStyle } from "./style";

export function CollapseButton({ to, icon, activeIcon, alt, children, ...props }) {
  return (
    <LinkButtonStyle {...props} to={to}>
      {({ isActive }) => (
        <CollapseButtonStyle $isActive={!!isActive}>
          <img src={isActive ? activeIcon : icon} alt={alt} />
          {!!isActive && <span>{isActive && children}</span>}
        </CollapseButtonStyle>
      )}
    </LinkButtonStyle>
  )
}

CollapseButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}