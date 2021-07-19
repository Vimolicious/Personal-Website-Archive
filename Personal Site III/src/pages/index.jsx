// Module components
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// Custom components
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ContactPanel } from '../components/contactPanel';
import {
  ProjectPanel,
  Grid,
  GridItem,
  List,
  ListItem,
} from '../components/pieces';

// Hooks
import useResetScroll from '../hooks/useResetScroll';

// Styling and assets
import './css/landing.css';
import dockerImg from '../images/software/docker.svg';
import gitImg from '../images/software/git.svg';
import pythonImg from '../images/software/python.svg';
import javascriptImg from '../images/software/javascript.svg';
import reactImg from '../images/software/react.svg';
import webImg from '../images/software/web.svg';

export default function IndexPage({ data }) {
  useResetScroll();

  const software = [
    { name: 'docker', desc: 'Docker', img: dockerImg },
    { name: 'git', desc: 'Git', img: gitImg },
    { name: 'python', desc: 'Python', img: pythonImg },
    { name: 'javascript', desc: 'ES5 & ES6', img: javascriptImg },
    { name: 'web', desc: 'HTML5 & CSS3', img: webImg },
    { name: 'react', desc: 'React', img: reactImg },
  ];

  const goals = [
    'Arcade 😱',
    'Understand machine learning',
    'Learn Kubernetes',
    'Integrate with continuous deployment',
    'Develop with a Python backend',
  ];

  return (
    <Layout mainId="landing">
      <SEO title="Vimolicious" />
      <section id="profile">
        <div id="profile__container">
          <Img
            fixed={data.headshot.childImageSharp.fixed}
            alt="Headshot"
            className="profile__image"
          />
          <h1 id="profile__title">Hello World, I'm Tim.</h1>
          <p id="profile__desc">
            I occasionally enjoy dabbling with software development and making
            cool things.
          </p>
          <div id="profile__button-container">
            <Link className="btn" to="/about">
              More About Me
            </Link>
            <Link className="btn" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
      <section id="projects-preview" className="panel panel--lighter">
        <h2>Portfolio</h2>
        <h3>Stuff I've Built</h3>
        <ProjectPanel id="projects-preview__container" top={3} />
        <Link className="btn" to="/projects">
          View More
        </Link>
      </section>
      <section id="software" className="panel">
        <h2>Software</h2>
        <h3>Tools I Use</h3>
        <Grid dark>
          {software.map(({ name, desc, img }, i) => (
            <GridItem key={i} subtitle={desc}>
              <img src={img} alt={name} />
            </GridItem>
          ))}
        </Grid>
      </section>
      <section className="panel panel--lighter">
        <h2>Goals</h2>
        <h3>What I'm Working On</h3>
        <List>
          {goals.map(goal => (
            <ListItem key={goal}>{goal}</ListItem>
          ))}
        </List>
      </section>
      <ContactPanel />
    </Layout>
  );
}

export const query = graphql`
  query IndexQuery {
    headshot: file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
