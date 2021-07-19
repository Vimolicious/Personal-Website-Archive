// Imports
import React from 'react'

// App Imports
import Nav from './nav'
import Footer from './footer'

import '../style.css'

// Layout component
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
