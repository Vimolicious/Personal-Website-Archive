import React from 'react';

import './css/ListItem.css';

const ListItem = ({ children, emphasis }) => (
    <li className={`list-item__container${emphasis ? ' emphasis' : ''}`}>{children}</li>
);

export default ListItem;
