// Imports
import React from 'react'

// App Imports
import { ThemeProvider } from './src/store/themeStore'
import { inBrowser, scrollToHash } from './src/utils'

// Wrap the root element with the theme provider
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

// Tries to scroll to a hash if one is present in the pathname
export const onRouteUpdate = ({ location: { hash } }) => {
  // Browser check
  if (inBrowser) {
    // Hash starts with #, so get rid of it with a substring
    scrollToHash(hash.substring(1))
  }
}
