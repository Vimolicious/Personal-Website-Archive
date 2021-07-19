import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

export default function NotFoundPagefunction() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section
        class="panel"
        style={{ height: 'calc(90vh - 64px)', justifyContent: 'center' }}
      >
        <h1>404</h1>
        <h3>NOT FOUND</h3>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

        <Link to="/" className="btn" style={{ marginTop: '2rem' }}>
          Home
        </Link>
      </section>
    </Layout>
  );
}
