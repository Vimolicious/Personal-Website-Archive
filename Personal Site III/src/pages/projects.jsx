import React from 'react';

// Custom components
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ContactPanel } from '../components/contactPanel';
import { ProjectPanel } from '../components/pieces';

// Hooks
import useResetScroll from '../hooks/useResetScroll';

// Styling and assets
import './css/projects.css';

export default function Projects() {
  useResetScroll();

  return (
    <Layout>
      <SEO title="Projects" />
      <main>
        <section id="projects" className="panel panel--lighter">
          <h2>My Projects</h2>
          <h3>Semi Functioing Programs</h3>
          <p>
            Here are all of my projects, the public ones on Github anyway. They
            range from apps to visualizations to even games. Press one to check
            it out on Github!
          </p>
          <ProjectPanel id="projects-container" />
          <a href="https://github.com/Vimolicious" className="btn">
            View On Github
          </a>
        </section>
        <ContactPanel />
      </main>
    </Layout>
  );
}
