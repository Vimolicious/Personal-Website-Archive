// Imports
import React, { useState } from 'react'
import { Link } from 'gatsby'

// App Imports
import Layout from '../components/layout'
import SEO from '../components/seo'

import Projects from '../components/projects'
import Goals from '../components/goals'
import ContactForm from '../components/contactForm'

import tim from '../../content/images/tim.jpg'

import projects from '../data/projects'
import goals from '../data/goals'
import timelineEvents from '../data/timelineEvents'
import technologies from '../data/technologies'
import interests from '../data/interests'

// Section component
function Section({ title, id, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// Index page
export default function IndexPage(props) {
  const [displayMoreAbout, setDisplayMoreAbout] = useState(false)

  const handleMoreAbout = () => {
    setDisplayMoreAbout(!displayMoreAbout)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <section className="lead">
        <div className="container">
          <img src={tim} alt="Tim" />
          <div className="lead-blurb">
            <h1>Hi there! I'm Tim and I write software.</h1>
            <p>
              Welcome to my website! Here you can find such excitements as my
              favorite projects and my handy dandy{' '}
              <Link to="/#contact">contact</Link> section for all your
              contacting needs.
            </p>
            <div>
              <a
                href="https://github.com/Vimolicious"
                className="btn btn-primary"
              >
                Github
              </a>
              <Link to="/#contact" className="btn btn-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Section title="Projects" id="projects">
          <Projects projects={projects} />
        </Section>
        <Section title="About" id="about">
          <p>
            Hi there, I'm Tim! I've had an affinity for technology for a long
            time and was introduced to programming almost 3 years ago... it's
            captivated me ever since. Currently, I'm trying to expand my skills
            into the web development space {'(hence this website)'}. My hope is
            to make this website a platform where I can put my projects{' '}
            {'(or weird flappy bird knock-offs)'} and share them with the world.
            I hope you find at least one of them as interesting as I do. Enjoy!
          </p>
          <p>
            I would be remiss not to mention that this website was heavily
            inspired by <a href="https://tania.dev">Tania Rascia's</a>. I highly
            respect her work and think you should check out her site too.
          </p>
          <br />
          <button className="btn btn-secondary" onClick={handleMoreAbout}>
            {displayMoreAbout ? 'Less' : 'More'} about me
          </button>
          <div
            id="about-continued"
            className={displayMoreAbout ? '' : 'hidden'}
          >
            <h3>Timeline</h3>
            <List items={timelineEvents} />
            <h3>Interests</h3>
            <List items={interests} />
            <h3>Favorite Technologies</h3>
            <List items={technologies} />
          </div>
        </Section>
        <Section title="2020 Goals" id="goals">
          <Goals goals={goals} />
        </Section>
        <Section title="Contact Me" id="contact">
          <ContactForm />
        </Section>
      </div>
    </Layout>
  )
}

// List component
function List({ items }) {
  return (
    <ul>
      {items.map(({ emoji, title, description }) => (
        <li key={title}>
          {emoji && (
            <span className="emoji" role="img" aria-label="Music note emoji">
              {emoji}
            </span>
          )}
          <b>{` ${title}`}</b>
          {description && `: ${description}`}
        </li>
      ))}
    </ul>
  )
}
