import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ButtonLink, Mask } from '../pieces';

import './css/Header.css';

import { Logo, NavTab } from './supplementary';

const Header = ({ location: { pathname: path } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const color = (() => {
        switch (path) {
            case '/':
                return 'red';
            case '/projects':
                return 'blue';
            case '/me':
                return 'red';
            default:
                return '';
        }
    })();

    const toggleMobileMenu = () => {
        document.getElementById('main-nav__sidebar-wrapper').classList.toggle('opened');
        setIsOpen(!isOpen);
    };

    const links = (
        <Fragment>
            <NavTab to="/" active={path === '/'}>
                Home
            </NavTab>
            <NavTab to="/projects" active={path === '/projects'}>
                Projects
            </NavTab>
            <NavTab to="/me" active={path === '/me'}>
                About
            </NavTab>
            <NavTab>
                <span className="material-icons" style={{ margin: '8px' }}>
                    videogame_asset
                </span>
                (Soon)
            </NavTab>
        </Fragment>
    );

    return (
        <Fragment>
            <header>
                <nav id="main-nav-wrapper" className={color}>
                    <div id="main-nav__container">
                        <button
                            id="mobile-menu-button__open"
                            className="material-icons mobile-menu-button"
                            onClick={toggleMobileMenu}
                        />
                        <div id="main-nav__name-container">
                            <Logo title="Vimolicious" />
                        </div>
                        <div id="main-nav__tabs">{links}</div>
                        <div id="main-nav__contact">
                            <ButtonLink to="/contact">Contact</ButtonLink>
                        </div>
                    </div>
                </nav>
                <div id="main-nav__sidebar-wrapper">
                    <div id="main-nav__sidebar-header">
                        <button
                            id="mobile-menu-button__close"
                            className="mobile-menu-button material-icons"
                            onClick={toggleMobileMenu}
                        />
                    </div>
                    <div id="main-nav__sidebar-container">
                        {links}
                        <NavTab to="/contact" active={path === '/contact'}>
                            Contact
                        </NavTab>
                    </div>
                </div>
            </header>
            <Mask onClickHandler={toggleMobileMenu} show={isOpen} />
        </Fragment>
    );
};

export default withRouter(Header);
