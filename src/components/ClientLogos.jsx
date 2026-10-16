import { clientLogos } from '../data/content'

export default function ClientLogos() {
  return (
    <section className="clients" aria-label="Client logos">
      <div className="container clients-row">
        {clientLogos.map((logo) => (
          <img key={logo.src} src={logo.src} alt={logo.alt} loading="lazy" />
        ))}
      </div>
    </section>
  )
}
