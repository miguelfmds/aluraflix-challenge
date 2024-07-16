import PropTypes from 'prop-types';
import { PageContentStyle } from "./style";

export function PageContent({ children }) {
  return (
    <PageContentStyle>
      {children}
    </PageContentStyle>
  )
}

PageContent.propTypes = {
  children: PropTypes.node.isRequired
}
