import Link from 'next/link'

const STEPS = [
  {
    number: '01',
    title: 'Spot a live item',
    body: 'See a current post on Instagram and note its SGD reference ID.',
  },
  {
    number: '02',
    title: 'Confirm with a human',
    body: 'Send the post or reference to SGD. Our team confirms availability and the fixed price.',
  },
  {
    number: '03',
    title: 'Pay SGD first',
    body: 'Payment goes to SGD before seller details, inspection arrangements, or delivery.',
  },
  {
    number: '04',
    title: 'Choose your route',
    body: 'Use Point & Kill for SGD-led coordination or Self Inspection for a buyer-led visit.',
  },
]

export default function HowItWorksPreview() {
  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="site-shell process-section__layout">
        <div className="process-section__intro">
          <p className="eyebrow"><span /> From post to pickup</p>
          <h2 id="process-heading">A marketplace<br />with a <em>method.</em></h2>
          <p>
            The experience is intentionally structured. Current inventory lives on Instagram; confirmation and transaction steps stay human-led.
          </p>
          <Link className="text-link" href="/how-it-works">Read the full buying process <span aria-hidden="true">→</span></Link>
        </div>

        <ol className="process-list">
          {STEPS.map((step) => (
            <li key={step.number}>
              <span className="process-list__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <span className="process-list__mark" aria-hidden="true">●</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
