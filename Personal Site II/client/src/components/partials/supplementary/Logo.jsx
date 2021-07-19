import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../../img/Logo.svg';

import './css/Logo.css';

const Logo = props => (
    <Link to="/">
        <div id="main-logo-container">
            <object id="main-logo" data={logoImg} aria-label="Vimolicious" />
        </div>
    </Link>
);

export default Logo;
