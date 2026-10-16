import { useState, useEffect, useCallback } from 'react'
import { testimonials } from '../data/content'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback((next) => {
    if (isAnimating) return
    setIsAnimating(true)
    setIndex(next)
    setTimeout(() => setIsAnimating(false), 400)
  }, [isAnimating])

  const next = () => goTo((index + 1) % testimonials.length)

  // Auto-advance
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined
    const id = window.setInterval(next, 7000)
    return () => window.clearInterval(id)
  }, [index]) // eslint-disable-line react-hooks/exhaustive-deps

  const item = testimonials[index]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="t-head">
          <div className="t-head-text" style={{ position: 'relative' }}>
            <span className="ghost-label">TESTIMONIALS</span>
            <span className="kicker">SEE WHAT SAYS OUR HAPPY CLIENTS</span>
            <h2 className="section-title">Our happy customers</h2>
          </div>
        </div>

        {/* Single card slider */}
        <div
          className="t-slider"
          style={{
            marginLeft: 80,
            opacity: isAnimating ? 0.6 : 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          <div className="t-preview-next" aria-hidden="true">
            <img
              src={testimonials[(index + 1) % testimonials.length].photo}
              alt=""
              loading="lazy"
            />
          </div>
          <article className="t-card" key={item.name}>
            {/* Avatar overlapping left */}
            <img
              className="t-avatar"
              src={item.photo}
              alt={item.name}
              loading="lazy"
            />

            {/* Quote */}
            <p className="t-card-quote">
              &ldquo;{item.quote}&rdquo;
            </p>

            {/* Name */}
            <div className="t-person">
              <span className="t-person-name">— {item.name}</span>
            </div>
          </article>
        </div>

        {/* Dot indicators */}
        <div className="t-dots" role="tablist" aria-label="Testimonial indicators">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={i === index ? 'is-active' : ''}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
