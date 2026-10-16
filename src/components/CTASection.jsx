import { LuHardHat } from 'react-icons/lu'

export default function CTASection() {
  return (
    <section className="cta" id="cta" aria-label="Call to action">
      <div className="cta-split">
        {/* Construction helmet mark */}
        <div className="cta-icon-block">
          <LuHardHat aria-hidden="true" />
        </div>

        {/* Consultation prompt */}
        <div className="cta-text-block">
          <h2><span>Building a dream</span> shouldn&apos;t be a nightmare!</h2>
          <p>
            We have transforming the ideas and visions into winning projects.
          </p>
        </div>

        {/* Consultation action */}
        <div className="cta-action-block">
          <a
            className="btn btn-white cta-consultation"
            href="/contact"
            aria-label="Free consultation"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
