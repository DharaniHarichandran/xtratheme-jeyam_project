import { useState } from 'react'
import { departments } from '../data/content'

const initial = {
  name: '',
  email: '',
  subject: '',
  department: departments[0],
  message: '',
}

export default function QuoteForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = 'Please enter a valid email address.'
    if (!values.message.trim()) next.message = 'Please enter a message.'
    return next
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus('invalid')
      return
    }
    setStatus('loading')
    window.setTimeout(() => {
      setStatus('success')
      setValues(initial)
    }, 700)
  }

  return (
    <section className="quote" id="quote">
        <div className="quote-layout">
          {/* Left — text column */}
          <div className="quote-text">
            <span className="ghost-label">QUOTE</span>
            <span className="kicker">INTERESTED IN CONSTRUCTION?</span>
            <h2 className="section-title">
              Request a free and<br />fair quote
            </h2>
            <p>
              Slogan creation for your construction company is crucial for the overall branding.
              And branding in today&apos;s world can&apos;t be ignored, We hope that the above
              Construction Slogans. Don&apos;t forget to share it on social media.
            </p>
          </div>

          {/* Right — gold card with form */}
          <div className="quote-form-wrap">
            <form className="quote-form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Your Name (required)</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={onChange}
                  autoComplete="name"
                />
                {errors.name ? <span className="error">{errors.name}</span> : null}
              </div>

              <div className="field">
                <label htmlFor="email">Your Email (required)</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  autoComplete="email"
                />
                {errors.email ? <span className="error">{errors.email}</span> : null}
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={onChange}
                />
              </div>

              <div className="field">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  name="department"
                  value={values.department}
                  onChange={onChange}
                >
                  {departments.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field field-full">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={onChange}
                />
                {errors.message ? <span className="error">{errors.message}</span> : null}
              </div>

              <div className="form-submit-row">
                <button className="btn" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send'}
                </button>
              </div>

              {status === 'success' ? (
                <p className="form-status" role="status">
                  Your request was received. This demo has no email backend — nothing was
                  transmitted externally.
                </p>
              ) : null}
              {status === 'invalid' ? (
                <p className="form-status is-error" role="alert">
                  Please correct the highlighted fields before submitting.
                </p>
              ) : null}
            </form>
          </div>
        </div>
    </section>
  )
}
