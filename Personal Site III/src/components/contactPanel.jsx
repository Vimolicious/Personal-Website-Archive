import React from 'react';
import { Link } from 'gatsby';

import './css/contactPanel.css';

export function ContactPanel() {
  return (
    <section id="contact-panel" className="panel">
      <h2>Contact</h2>
      <h3>Drop Me A Line</h3>
      <Link to="/contact" className="btn">
        Visit my contact page
      </Link>
    </section>
  );
}
