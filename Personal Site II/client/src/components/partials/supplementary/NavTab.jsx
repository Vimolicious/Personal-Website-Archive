import React from 'react';
import { Link } from 'react-router-dom';

import './css/NavTab.css';

const NavTab = ({ to, children, active }) => (
    <div className={`main-nav__tab ${active ? 'active' : ''}`}>
        {(to && <Link to={to}>{children}</Link>) || children}
    </div>
);

export default NavTab;
