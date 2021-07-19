// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

// Goals component
export default function Goals({ goals }) {
  return (
    <div className="grid goals">
      {goals.map(({ title, description, complete, url }) => (
        <div key={title} className="row">
          <div className="cell">
            <FontAwesomeIcon
              icon={complete ? faCheckSquare : faSquare}
              color="var(--text-secondary)"
            />
          </div>
          <div className="cell">
            {(url && <a href={url}>{title}</a>) || <>{title}</>}
          </div>
          <div className="cell description">{description}</div>
        </div>
      ))}
    </div>
  )
}
