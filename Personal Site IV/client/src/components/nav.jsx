// Imports
import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

// App Imports
import themeStore from '../store/themeStore'

export default function Nav() {
  const { store, dispatch } = useContext(themeStore)

  return (
    <nav>
      <div className="container">
        <div className="flex">
          <Link to="/" className="brand">
            Vimolicious
          </Link>
          <div>
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
            <button
              className="dark-light-btn"
              aria-label={`Switch to ${
                store?.theme === 'light' ? 'dark' : 'light'
              } mode`}
              onClick={() => dispatch({ type: 'toggle' })}
            >
              {store && (
                <FontAwesomeIcon
                  icon={store.theme === 'light' ? faMoon : faSun}
                  color={store.theme === 'light' ? '#fefcd7' : '#ffcf40'}
                  size="lg"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
