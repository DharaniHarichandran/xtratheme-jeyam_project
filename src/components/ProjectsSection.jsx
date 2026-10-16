import { projects } from '../data/content'

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="ghost-label">PROJECTS</span>
          <span className="kicker">WE ARE PROFESSIONAL</span>
          <h2 className="section-title">Our latest projects</h2>

        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
              aria-label={project.title}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.categories}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
