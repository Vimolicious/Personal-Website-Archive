import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Logo from '../images/logo.svg';

import './css/nav.css';

export default function Nav({ siteTitle }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <>
      <nav id="main-nav">
        <Link id="main-nav__logo-container" to="/">
          <img id="main-nav__logo" src={Logo} alt="logo" />
        </Link>
        <section id="main-nav__left">
          <MenuLinks />
        </section>
        <section id="main-nav__right">
          <SocialLinks />
        </section>
      </nav>

      <button className="mobile-menu__open-close-button" onClick={toggleMenu}>
        menu
      </button>
      <nav id="main-nav__sidebar" className={mobileMenuIsOpen ? 'opened' : ''}>
        <button className="mobile-menu__open-close-button" onClick={toggleMenu}>
          close
        </button>
        <section id="main-nav__sidebar-links">
          <MenuLinks showAlt path={`/${siteTitle}`} />
          <SocialLinks showAlt />
        </section>
      </nav>
      <Cover onClick={toggleMenu} show={mobileMenuIsOpen} />
    </>
  );
}

Nav.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

function MenuLinks({ showAlt, path }) {
  const links = [
    {
      address: '/',
      icon: 'home',
      alt: 'Home',
    },
    {
      address: '/projects',
      icon: 'book',
      alt: 'Projects',
    },
    {
      address: '/about',
      icon: 'info',
      alt: 'About',
    },
  ];

  return (
    <>
      {links.map(({ address, icon, alt }) => (
        <NavLink
          key={alt + address}
          className={address === path ? 'active' : ''}
          to={address}
          toolTip={alt}
        >
          <span className="icon main-nav__icon">{icon}</span>
          {showAlt && alt}
        </NavLink>
      ))}
    </>
  );
}

function SocialLinks({ showAlt }) {
  return (
    <>
      <NavLink toolTip="Github" external to="https://github.com/Vimolicious">
        <span className="icon main-nav__icon">code</span> {showAlt && 'Github'}
      </NavLink>
      <NavLink toolTip="Contact" to="/contact">
        <span className="icon main-nav__icon">mail</span> {showAlt && 'Contact'}
      </NavLink>
    </>
  );
}

function NavLink({ className, to, children, external, toolTip }) {
  if (!external) {
    return (
      <Link
        className={`main-nav__link ${className ? className : ''}`}
        to={to}
        data-tooltip={toolTip}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={to}
        className={`main-nav__link ${className ? className : ''}`}
        data-tooltip={toolTip}
      >
        {children}
      </a>
    );
  }
}

function Cover({ onClick, show }) {
  return (
    <button
      onClick={onClick}
      className={`page-mask ${show ? 'page-mask--shown' : ''}`}
    ></button>
  );
}
