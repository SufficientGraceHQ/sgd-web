import Link from 'next/link'

const ROUTES = [
  {
    number: 'A',
    title: 'Point & Kill',
    badge: 'SGD-led route',
    description: 'After payment, SGD goes to the seller, adds a condition-check step, and coordinates delivery.',
    fit: 'For buyers who want SGD to coordinate the movement.',
  },
  {
    number: 'B',
    title: 'Self Inspection',
    badge: 'Buyer-led route',
    description: 'After payment, SGD shares the seller details so you can arrange your own visit and pickup.',
    fit: 'For buyers who want to inspect and collect personally.',
  },
]

export default function BuyingRoutes() {
  return (
    <section className="buying-routes" aria-labelledby="routes-heading">
      <div className="site-shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow"><span /> Choose your buying route</p>
            <h2 id="routes-heading">One marketplace.<br /><em>Two clear paths.</em></h2>
          </div>
          <p>Both routes begin the same way: SGD confirms the item, then payment is made to SGD first.</p>
        </div>

        <div className="buying-routes__grid">
          {ROUTES.map((route) => (
            <article key={route.title} className="buying-route-card">
              <div className="buying-route-card__head">
                <span className="buying-route-card__number">{route.number}</span>
                <span className="buying-route-card__badge">{route.badge}</span>
              </div>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
              <div className="buying-route-card__fit"><span>Route fit</span>{route.fit}</div>
            </article>
          ))}
        </div>

        <div className="route-principle">
          <span>01</span>
          <p><strong>The non-negotiable:</strong> payment to SGD comes before seller details or fulfilment.</p>
          <Link href="/faq">Read buyer FAQs <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  )
}
