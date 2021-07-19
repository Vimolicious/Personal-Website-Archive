import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = props => {
    const outgoing = props.to.substring(0, 4) === 'http';
    return (
        <Fragment>
            {!outgoing && (
                <Link className="button-link" to={props.to}>
                    {props.children}
                </Link>
            )}
            {outgoing && (
                <a href={props.to} className="button-link">
                    {props.children}
                </a>
            )}
        </Fragment>
    );
};

export default ButtonLink;
