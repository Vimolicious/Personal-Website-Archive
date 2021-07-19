import React from 'react';

// Custom components
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <main>
        <div
          style={{
            minHeight: 'calc(100vh - 128px)',
            justifyContent: 'center',
          }}
          id="contact"
          className="panel panel--lighter"
        >
          <h2>Contact Me</h2>
          <p>
            If you're looking for to get my attention, an email to
            is the best way for it. I try to answer as many messages as
            possible, but I can't guarantee a reply.
          </p>

          <h3 className="mt-4">Alternatively,</h3>
          <p>
            You could also leave an issue on any pertinent repository over on my{' '}
            <a href="https://github.com/Vimolicious">Github</a>.
          </p>
          <a href="https://github.com/Vimolicious" className="btn">
            View my Github
          </a>
        </div>
      </main>
    </Layout>
  );
}
