import PropTypes from "prop-types"
import { Navbar, Footer } from "../../components"

import { PageStyle } from "./style"

export function Page({ children }) {
  return (
    <PageStyle>
      <Navbar />
        {children}
      <Footer />
    </PageStyle>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired
}
