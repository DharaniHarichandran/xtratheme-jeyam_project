import { services } from '../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container services-head">
        <span className="ghost-label">SERVICES</span>
        <span className="kicker">WHAT WE CAN DO FOR YOU</span>
        <h2 className="section-title">Our construction services</h2>
      </div>
      <div className="service-wrap">
        <div className="container service-grid">
          {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-card-icon" aria-hidden="true">
                  <img src={service.icon} alt="" />
                </div>
                <h3>{service.title}</h3>
                <span className="service-card-rule" aria-hidden="true" />
                <p>{service.text}</p>
                <a className="service-card-link" href={`/services/${service.slug}`}>
                  Read More
                </a>
              </article>
          ))}
        </div>
      </div>
    </section>
  )
}
