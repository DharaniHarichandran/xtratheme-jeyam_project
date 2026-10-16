import AboutSection from './AboutSection'
import ClientLogos from './ClientLogos'
import CTASection from './CTASection'
import FeatureSection from './FeatureSection'
import HeroSlider from './HeroSlider'
import ProcessSection from './ProcessSection'
import ProjectsSection from './ProjectsSection'
import QuoteForm from './QuoteForm'
import ServicesSection from './ServicesSection'
import TestimonialsSection from './TestimonialsSection'

export default function HomePage({ onPlayVideo }) {
  return (
    <main id="main">
      <HeroSlider onPlayVideo={onPlayVideo} />
      <FeatureSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <ProcessSection />
      <ProjectsSection />
      <QuoteForm />
      <TestimonialsSection />
      <ClientLogos />
    </main>
  )
}
