// Imports
import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Footer component
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Vimolicious">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
