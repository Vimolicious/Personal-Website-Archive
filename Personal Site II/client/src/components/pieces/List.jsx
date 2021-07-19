import React from 'react';

import './css/List.css';

const List = ({ children, heading, className, light }) => (
    <ul className={`ui-list${className ? ` ${className}` : ''}`}>
        {heading && <h4 className={light ? 'light' : ''}>{heading}</h4>}
        {children}
    </ul>
);

export default List;
