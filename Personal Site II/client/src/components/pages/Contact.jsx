import React from 'react';

import useResetScroll from '../../hooks/useResetScroll.js';

import { Card } from '../pieces';

const Contact = props => {
    useResetScroll();
    return (
        <main>
            <div className="responsive">
                <h1>HMU</h1>
                <h3>(sorry)</h3>
            </div>
            <Card
                heading="Email"
                subheading="I'll will commit myself to answering any questions or inquiries in a timely matter."
            >
                <h5>(Working on a form... sorry)</h5>
            </Card>
            <Card
                heading="Github"
                subheading="Leave an issue in any of my repositories, and I'll get on it!"
            >
                <h3>github.com/Vimolicious</h3>
            </Card>
        </main>
    );
};

export default Contact;
