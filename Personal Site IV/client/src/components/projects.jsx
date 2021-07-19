// Imports
import React from 'react'

// Projects component
export default function Projects({ projects }) {
  return (
    <div className="grid projects">
      {projects.map(({ link, emoji, title, description }) => (
        <a key={title} href={link} target="blank" className="row">
          <div className="cell">{emoji}</div>
          <div className="cell">{title}</div>
          <div className="cell description">{description}</div>
        </a>
      ))}
    </div>
  )
}
