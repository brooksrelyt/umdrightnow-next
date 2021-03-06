import React from 'react'
import Header from "./header"
import Footer from "./footer"

import '../sass/styles.scss'

function Layout(props) {
  return(
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default Layout
