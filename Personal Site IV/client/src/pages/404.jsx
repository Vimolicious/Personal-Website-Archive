// Imports
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'

// App Imports
import Layout from '../components/layout'
import SEO from '../components/seo'
import { getSadGIF } from '../utils'

import themeStore from '../store/themeStore'

import giphyDark from '../../content/images/giphy-dark.png'
import giphyLight from '../../content/images/giphy-light.png'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container">
        <section id="not-found" className="center-text center-content">
          <h3>The page you're looking for doesn't exist...</h3>
          <SadGIF />
          <Link className="btn btn-primary" to="/">
            Take me home
          </Link>
        </section>
      </div>
    </Layout>
  )
}

export default NotFoundPage

function SadGIF() {
  const [sadGIF, setSadGIF] = useState(null)
  const { store } = useContext(themeStore)

  useEffect(() => {
    if (!sadGIF) {
      getSadGIF().then(gif => setSadGIF(gif))
    }
  }, [sadGIF])

  return (
    <>
      {sadGIF && (
        <a id="sad-gif" href={sadGIF.url}>
          <img src={sadGIF.images.downsized_medium.url} alt="Sad GIF" />
        </a>
      )}
      <a className="powered-by-giphy" href="https://giphy.com">
        {store && (
          <img
            src={store.theme === 'light' ? giphyLight : giphyDark}
            alt="Powered by Giphy"
            width="150"
          />
        )}
      </a>
    </>
  )
}
