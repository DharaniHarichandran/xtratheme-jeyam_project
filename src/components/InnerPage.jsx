import { innerPages, projects, services } from '../data/content'
import QuoteForm from './QuoteForm'

export default function InnerPage({ path }) {
  if (path.startsWith('/projects/')) {
    const slug = path.replace('/projects/', '')
    const project = projects.find((item) => item.slug === slug)
    if (!project) return <NotFound />
    return (
      <main id="main">
        <div className="page-hero">
          <div className="container">
            <span className="kicker">{project.categories}</span>
            <h1>{project.title}</h1>
          </div>
        </div>
        <div className="container page-body">
          <img src={project.image} alt={project.title} />
          <p style={{ marginTop: 24 }}>
            This project page stands in for the original portfolio destination. The photograph and labels
            match the Construction 2 demo gallery.
          </p>
          <a className="btn btn-navy" href="/#projects" style={{ marginTop: 24 }}>
            Back to projects
          </a>
        </div>
      </main>
    )
  }

  if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '')
    const service = services.find((item) => item.slug === slug)
    if (!service) return <NotFound />
    return (
      <main id="main">
        <div className="page-hero">
          <div className="container">
            <span className="kicker">SERVICE</span>
            <h1>{service.title}</h1>
          </div>
        </div>
        <div className="container page-body">
          <img src={service.image} alt={service.title} />
          <p style={{ marginTop: 24 }}>{service.text}</p>
          <a className="btn btn-navy" href="/contact" style={{ marginTop: 24 }}>
            Request a quote
          </a>
        </div>
      </main>
    )
  }

  const key = path.replace('/', '') || 'about'
  const page = innerPages[key]
  if (!page) return <NotFound />

  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <span className="kicker">{page.kicker}</span>
          <h1>{page.title}</h1>
        </div>
      </div>
      <div className="container page-body">
        <p>{page.body}</p>
        {key === 'services' ? (
          <div className="inner-list">
            {services.map((item) => (
              <a key={item.slug} href={`/services/${item.slug}`}>
                {item.title}
              </a>
            ))}
          </div>
        ) : null}
        {key === 'about' ? (
          <a className="btn btn-navy" href="/contact" style={{ marginTop: 28 }}>
            Free Consultation
          </a>
        ) : null}
      </div>
      {key === 'contact' ? <QuoteForm /> : null}
    </main>
  )
}

function NotFound() {
  return (
    <main id="main">
      <div className="page-hero">
        <div className="container">
          <h1>Page not found</h1>
        </div>
      </div>
      <div className="container page-body">
        <p>The requested page is not part of this reconstruction.</p>
        <a className="btn btn-navy" href="/">
          Return home
        </a>
      </div>
    </main>
  )
}
