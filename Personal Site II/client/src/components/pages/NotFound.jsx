import React from 'react';

import ButtonLink from '../pieces/ButtonLink';

const NotFound = () => (
    <div className="responsive centered">
        <h1>Oops...</h1>
        <h3>This page doesn't exist!</h3>
        <p>
            <ButtonLink to="/">There's no place like home</ButtonLink>
        </p>
    </div>
);

export default NotFound;
