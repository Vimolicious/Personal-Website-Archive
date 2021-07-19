import React from 'react';
import Img from 'gatsby-image';

// Custom components
import { GridItem } from './Grid';

// Styling
import './css/project.css';

export function Project({ img, title, link }) {
  return (
    <GridItem>
      <a className="project-wrapper" href={link}>
        <div className="project" data-title={title}>
          <Img fluid={img} />
        </div>
      </a>
    </GridItem>
  );
}
