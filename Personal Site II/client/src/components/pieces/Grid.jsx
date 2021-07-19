import React from 'react';
import './css/Grid.css';

const Grid = props => (
    <section className="grid-container">
        <ul className="grid-content">{props.children}</ul>
    </section>
);

export default Grid;
