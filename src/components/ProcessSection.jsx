import { processSteps } from '../data/content'

export default function ProcessSection() {
  const tiltImageToPointer = (event) => {
    if (event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = (event.clientX - bounds.left) / bounds.width
    const pointerY = (event.clientY - bounds.top) / bounds.height
    const image = event.currentTarget.querySelector('img')

    image?.style.setProperty('--tilt-x', `${(pointerY - 0.5) * 14}deg`)
    image?.style.setProperty('--tilt-y', `${(0.5 - pointerX) * 14}deg`)
  }

  const resetImageTilt = (event) => {
    const image = event.currentTarget.querySelector('img')
    image?.style.setProperty('--tilt-x', '0deg')
    image?.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <section className="process" id="process">
      <div className="process-layout">
        <div className="process-left">
          <div className="process-copy">
            <span className="ghost-label">HOW?</span>
            <span className="kicker">PROCESS OF CONSTRUCTION</span>
            <h2 className="section-title">
              How it works<br />in construction?
            </h2>
            <p>
              Slogan creation for your construction company is crucial for the overall branding.
              And branding in today&apos;s world can&apos;t be ignored.
            </p>
          </div>
          <div
            className="process-media"
            onPointerMove={tiltImageToPointer}
            onPointerLeave={resetImageTilt}
          >
            <img
              src="/images/process.jpg"
              alt="Construction crew working on a structural frame"
              loading="lazy"
            />
          </div>
        </div>
        <div className="process-right">
          <div className="process-steps">
            {processSteps.map((step) => (
            <article className="step" key={step.number} tabIndex={0}>
              <div className="step-num">{step.number}</div>
              <div className="step-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
