import { FaCheck } from 'react-icons/fa'
import { aboutChecks } from '../data/content'

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-media">
          <img
            src="/images/about-company.jpg"
            alt="Construction workers reviewing plans on a job site"
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <span className="ghost-label">ABOUT</span>
          <span className="kicker">ABOUT OUR COMPANY</span>
          <h2 className="section-title">
            Always dedicated and devoted
          </h2>
          <p>
            Slogan creation for your construction company is crucial for the overall branding.
            And branding in today&apos;s world can&apos;t be ignored. We combine excellent
            engineering, grade #1 materials, and structures built for a long life. Don&apos;t
            forget to share it on social media and related building communities.
          </p>
          <ul className="check-grid">
            {aboutChecks.map((item) => (
              <li key={item}>
                <span className="check-icon" aria-hidden="true">
                  <FaCheck />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
