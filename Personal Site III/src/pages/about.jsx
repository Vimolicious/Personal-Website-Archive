import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// Custom components
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ContactPanel } from '../components/contactPanel';
import { Grid, GridItem } from '../components/pieces';

// Hooks
import useResetScroll from '../hooks/useResetScroll';

// Styling and assets
import './css/about.css';

export default function About({ data }) {
  useResetScroll();

  const activities = [
    { title: 'Music', alt: 'music', img: 'music.jpg' },
    {
      title: 'Design (very much an amateur)',
      alt: 'design',
      img: 'design.jpg',
    },
    { title: 'Philosophy', alt: 'philosophy', img: 'philosophy.jpg' },
    { title: <i>'acking</i>, alt: 'programming', img: 'programming.jpg' },
  ];

  activities.forEach(activity => {
    for (let edge of data.activities.edges) {
      const nodeImage = edge.node.relativePath.slice(
        edge.node.relativePath.indexOf('/') + 1
      );

      if (activity.img === nodeImage) {
        activity['img_fluid'] = edge.node.childImageSharp.fluid;
        break;
      }
    }
  });

  return (
    <Layout mainId="about">
      <SEO title="About" />
      <main>
        <section id="about-me" className="panel">
          <h2>About Me</h2>
          <h3>Who?</h3>
          <div id="about-me__body">
            <Img
              fluid={data.selfie.childImageSharp.fluid}
              alt="Me"
            />
            <p>
              Hello, my name is Tim. Ever since my first
              introduction with programming a few years ago, I have been
              captivated by the freedom and creative expression that it
              presents. Ever since I can remember, I have always loved being
              able to create cool things from nothing. Starting with the oh so
              fantastic Lego, and eventually turning towards software
              development. Although I do not have too much experience currently,
              I hope to persue a career in software development. As I go on my
              journey to teach myself all about software development, my
              progression will be documented here.
            </p>
          </div>
        </section>
        <section id="passions" className="panel panel--lighter">
          <h2>Passions</h2>
          <h3>What I Like To Do</h3>
          <Grid id="activities-grid">
            {activities.map(({ title, img_fluid }) => (
              <GridItem key={title}>
                <Activity title={title} img={img_fluid} />
              </GridItem>
            ))}
          </Grid>
        </section>
        <ContactPanel />
      </main>
    </Layout>
  );
}

function Activity({ title, alt, img }) {
  return (
    <div className="activity">
      <Img className="activity__image" fluid={img} alt={alt} />
      <h4>{title}</h4>
    </div>
  );
}

export const query = graphql`
  query AboutQuery {
    activities: allFile(filter: { relativeDirectory: { eq: "activities" } }) {
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
    selfie: file(relativePath: { eq: "selfie.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
