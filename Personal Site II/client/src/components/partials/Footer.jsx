import React from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from '../pieces';

import './css/Footer.css';

const Footer = props => (
    <footer>
        <div id="main-footer-wrapper">
            <div id="main-footer__container">
                <List heading="Navigate" light>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/me">About</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/projects">Projects</Link>
                    </ListItem>
                </List>
                <List heading="My links" light right>
                    <ListItem>
                        <a href="https://github.com/Vimolicious">GitHub</a>
                    </ListItem>
                </List>
            </div>
        </div>
    </footer>
);

export default Footer;
