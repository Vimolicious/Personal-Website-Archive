import React from 'react';
import GridItem from './GridItem';

import './css/Project.css';
import ButtonLink from './ButtonLink';

const Project = ({ projectId, title, description, language, stars, forks, image, link }) => (
    <GridItem id={projectId} title={title} imgSrc={image} body={description}>
        <div className="project-data">
            <p className="project-data__language">{language}</p>
            <p className="project-data__stars">{stars}</p>
            <p className="project-data__forks">{forks}</p>
        </div>
        <ButtonLink to={link}>Github</ButtonLink>
    </GridItem>
);

export default Project;
