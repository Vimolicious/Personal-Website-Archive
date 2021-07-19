import React from 'react';
import PropTypes from 'prop-types';

import Nav from './nav';
import usePageTitle from '../hooks/usePageTitle';

import './css/layout.css';
import './css/footer.css';
import logo from '../images/logo-mono.svg';

export default function Layout({ mainId, children }) {
  const title = usePageTitle();
  return (
    <>
      <Nav siteTitle={title} />
      <main id={mainId}>{children}</main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <span className="lowlight">
        © {new Date().getFullYear()}, Vimolicious
      </span>
      <img id="footer__logo" src={logo} alt="logo" />
      <a className="footer__link" href="https://github.com/Vimolicious">
        github
      </a>
    </footer>
  );
}

Layout.propTypes = {
  mainId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  mainId: '',
};
