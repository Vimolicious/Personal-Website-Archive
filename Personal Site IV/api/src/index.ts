// Imports
import * as express from 'express'
import * as cors from 'cors'
import * as functions from 'firebase-functions'
import fetch from 'node-fetch'
import * as sgMail from '@sendgrid/mail'

// Sendgrid config
const API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template
const RECAPTCHA_SECRET = functions.config().recaptcha.secret

sgMail.setApiKey(API_KEY)

// Express app
const app = express()

app.use(cors({ origin: true }))

app.post('/', async (req, res) => {
  const data = req.body

  // Verify user's response with Google
  const recaptchaResponse = await (
    await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${data.recaptchaValue}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  ).json()

  // User didn't pass the ReCaptcha test
  if (!recaptchaResponse.success) {
    return res.status(400).send({
      success: false,
      message: 'ReCaptcha response was not verified.',
    })
  }

  const msg = {
    to: 'TO',
    from: { email: 'EMAIL', name: 'Contact Form' },
    replyTo: data.email,
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: `Message from ${data.name}`,
      name: data.name,
      email: data.email,
      body: data.message,
    },
  }

  // Send email
  const response = await sgMail.send(msg)

  const statusCode = response[0].statusCode

  // No errors from SendGrid
  if (Math.floor(statusCode / 100) === 2) {
    return res.status(200).send({
      success: true,
      message: "Uh, everthing's under control. Situation normal.",
    })
  }

  return res.status(500).send({ success: false, message: response[0].body })
})

// Sends email upon contact form submission
export const contactForm = functions.https.onRequest(app)
