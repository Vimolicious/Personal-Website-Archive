import React from 'react';

import './css/GridItem.css';

const GridItem = ({ title, subtitle, body, children, imgSrc }) => (
    <li className="grid-cell">
        {imgSrc && (
            <div
                className="grid-cell__img"
                style={{ backgroundImage: `url(${imgSrc})` }}
                alt={title}
            />
        )}
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        {body && <div className="grid-cell__body">{body}</div>}
        {children}
    </li>
);

export default GridItem;
