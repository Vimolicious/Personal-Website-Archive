import React from 'react';

import useResetScroll from '../../hooks/useResetScroll';

import { ProjectGrid, Card, ButtonLink } from '../pieces';

const Projects = props => {
    useResetScroll();
    return (
        <main>
            <div className="responsive">
                <h1>My Projects</h1>
                <h3>(on github)</h3>
            </div>
            <ProjectGrid />
            <Card heading="Contact" subheading="Want to get in touch?">
                <ButtonLink to="/contact">Contact Me</ButtonLink>
            </Card>
        </main>
    );
};

export default Projects;
