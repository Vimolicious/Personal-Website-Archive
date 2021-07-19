import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Custom components
import { Project, Grid } from './';

// Data
import api from '../../helper/api';

export function ProjectPanel({ top }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      if (loading) {
        const apiData = await api(`
          query {
            projects${top ? `(top: ${top})` : ''} {
              _id
              title
              url
            }
          }
        `);

        if (apiData) {
          setProjects(apiData.data.projects);
          setLoading(false);
        }
      }
    })();
  }, [setLoading, setProjects, top, loading]);

  const data = useStaticQuery(graphql`
    query ProjectPanelQuery {
      projects: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
            relativePath
          }
        }
      }
      defaultProject: file(relativePath: { eq: "defaultProject.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const defaultImg = data.defaultProject.childImageSharp.fluid;

  projects.forEach(project => {
    for (let edge of data.projects.edges) {
      const nodeImage = edge.node.relativePath.slice(
        edge.node.relativePath.indexOf('/') + 1
      );

      const projectImage =
        project.img ||
        project.title
          .replace(/\s/g, '-')
          .toLowerCase()
          .concat('.jpg');

      if (nodeImage === projectImage) {
        project['img_fluid'] = edge.node.childImageSharp.fluid;
        break;
      }
    }
  });

  return (
    <>
      {projects.length > 0 ? (
        <Grid id="projects-container">
          {projects.map(({ _id, title, img_fluid, url: link }) => (
            <Project
              key={_id}
              img={img_fluid || defaultImg}
              title={capitalize(title)}
              link={link}
            />
          ))}
        </Grid>
      ) : (
        <p id="projects__err-message">
          {!loading && 'There should be stuff here... oops'}
        </p>
      )}
    </>
  );
}

function capitalize(str) {
  const words = str.split(' ');
  return words.reduce(
    (cap, word, i) =>
      cap.concat(
        `${word[0].toUpperCase()}${word.slice(1)}${
          i < words.length - 1 ? ' ' : ''
        }`
      ),
    ''
  );
}
