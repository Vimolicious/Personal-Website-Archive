// Imports
import React, { useState } from 'react'
import ReCaptcha from 'react-google-recaptcha'

// App Imports
import useInput from '../hooks/useInput'

// Creates reference to the ReCaptcha element
const recaptchaRef = React.createRef()

// Contact form component
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [gotResponse, setGotResponse] = useState(false)
  const [sent, setSent] = useState(false)

  const [name, handleChangeName, setName] = useInput('')
  const [email, handleChangeEmail, setEmail] = useInput('')
  const [message, handleChangeMessage, setMessage] = useInput('')

  const handleSubmit = async e => {
    e.preventDefault()

    setSubmitted(true)
    setGotResponse(false)

    // Get the token from ReCaptcha
    const token = await recaptchaRef.current.executeAsync()

    // Send the token and message data to API (Firebase function)
    const res = await fetch(process.env.GATSBY_API_URL, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
        recaptchaValue: token,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()

    setGotResponse(true)

    if (res.ok && data.success) {
      // Message was sent successfully, so clear the input fields
      setName('')
      setEmail('')
      setMessage('')
      setSent(true)
    } else {
      // Message was not sent successfully, so set sent to false
      setSent(false)
    }
  }

  return (
    <>
      <SentStatusMessage
        submitted={submitted}
        gotResponse={gotResponse}
        sentSuccessfully={sent}
      />
      <form className="contact" onSubmit={handleSubmit}>
        <div className="contact-identifiers">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
            required
          />
        </div>
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleChangeMessage}
          aria-label="Message"
          required
        />
        <button className="btn btn-secondary">Submit</button>
        <ReCaptcha
          ref={recaptchaRef}
          sitekey="6LeoRb0ZAAAAAO3ricU_93TqcHAw4JeAb9g3Ei2M"
          size="invisible"
          theme="dark"
          badge="inline"
          style={{ margin: '0 auto' }}
        />
      </form>
    </>
  )
}

function SentStatusMessage({ submitted, gotResponse, sentSuccessfully }) {
  // Default message
  if (!submitted) {
    return (
      <p>
        <b>Send your message.</b>
      </p>
    )
  }

  // Sending message
  if (!gotResponse) {
    return (
      <p>
        <b>Sending...</b>
      </p>
    )
  }

  // Success message
  if (sentSuccessfully) {
    return (
      <p>
        <b className="success">Your message was sent.</b>
      </p>
    )
  }

  // Fail message
  return (
    <p>
      <b className="error">Your message failed to send. Please try again.</b>
    </p>
  )
}
