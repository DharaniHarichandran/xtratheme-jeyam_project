import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import { slides } from '../data/content'

export default function HeroSlider({ onPlayVideo }) {
  const [index, setIndex] = useState(0)
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReduced) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [prefersReduced])

  const slide = slides[index]

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured projects">
      <div className="hero-slide">
        {slide.type === 'split' ? (
          <div className="hero-split">
            {/* Left: text copy */}
            <div className="hero-copy">
              <h1 className="hero-title">
                {slide.titleLines.map((line) => (
                  <span
                    key={line.text}
                    style={{ display: 'block', color: line.accent ? 'var(--gold)' : undefined }}
                  >
                    {line.text}
                  </span>
                ))}
              </h1>
              <p className="hero-sub">{slide.subtitle}</p>
              <div className="hero-video-prompt">
                <button
                  type="button"
                  className="play-btn"
                  aria-label="Play introduction video"
                  onClick={() => onPlayVideo(slide.videoUrl)}
                >
                  <FaPlay />
                </button>
                <span className="hero-video-label">
                  <span>Watch video</span>
                  <strong>Why choose us?</strong>
                </span>
              </div>
            </div>

            {/* Right: decorative shapes + man image */}
            <div className="hero-visual">
              <div className="hero-shapes" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <img src={slide.image} alt={slide.imageAlt} />
            </div>
          </div>
        ) : (
          /* Photo slide with dark navy overlay */
          <div
            className="hero-photo"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.imageAlt}
          >
            <div className="hero-photo-copy">
              <h2>{slide.headline}</h2>
              <p>{slide.subhead}</p>
            </div>
          </div>
        )}
      </div>

      {/* Prev/Next arrows */}
      <div className="hero-nav">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="hero-dots" role="tablist" aria-label="Slide indicators">
        {slides.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={i === index ? 'is-active' : ''}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
