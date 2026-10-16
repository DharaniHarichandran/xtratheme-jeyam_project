import { features } from '../data/content'

export default function FeatureSection() {
  return (
    <section
      className="features"
      id="features"
    >
      <div className="container">
        <div className="features-header">
          <img className="helmet" src="/images/safety-icon.png" alt="" aria-hidden="true" />
          <span className="kicker is-light">FEATURES AT A GLANCE</span>
          <h2 className="section-title is-light">We know what your needs are</h2>
        </div>
        <div className="feature-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title} tabIndex={0} aria-label={item.title}>
              <div className="feature-card-inner">
                <div className="feature-card-front">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="feature-card-label">
                    <h3>{item.title}</h3>
                    <span aria-hidden="true">⌃</span>
                  </div>
                </div>
                <div
                  className="feature-card-back"
                  style={{
                    backgroundImage: `linear-gradient(rgba(244, 192, 59, 0.91), rgba(244, 192, 59, 0.91)), url(${item.image})`,
                  }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="/services">Learn More ...</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
