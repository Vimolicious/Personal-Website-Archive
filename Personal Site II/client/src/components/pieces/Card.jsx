import React from 'react';

import './css/Card.css';

const Card = props => {
    const heading = props.heading ? (
        <div className="card-heading">
            <h2>{props.heading}</h2>
        </div>
    ) : (
        ''
    );

    const subheading = props.subheading ? (
        <div className="card-subheading">{props.subheading}</div>
    ) : (
        ''
    );

    return (
        <section
            className={`card${props.className ? ` ${props.className}` : ''}`}
        >
            <div className="card-content">
                {heading}
                {subheading}
                {props.children}
            </div>
        </section>
    );
};

export default Card;
