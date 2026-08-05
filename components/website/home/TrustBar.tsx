const PROMISES = [
  {
    number: '01',
    title: 'Fixed prices',
    body: 'The price shared with an item is the price—no negotiation loop.',
  },
  {
    number: '02',
    title: 'Human confirmation',
    body: 'The SGD team confirms availability and payment directly.',
  },
  {
    number: '03',
    title: 'Two buying routes',
    body: 'Choose SGD-led Point & Kill or buyer-led Self Inspection.',
  },
  {
    number: '04',
    title: 'Lagos operations',
    body: 'A local process built around moving real household items.',
  },
]

export default function TrustBar() {
  return (
    <section className="promise-rail" aria-labelledby="promise-heading">
      <div className="site-shell promise-rail__inner">
        <div className="promise-rail__heading">
          <p className="eyebrow"><span /> The SGD standard</p>
          <h2 id="promise-heading">Less guesswork.<br /><em>More structure.</em></h2>
        </div>
        <div className="promise-rail__grid">
          {PROMISES.map((promise) => (
            <article key={promise.number} className="promise-card">
              <span>{promise.number}</span>
              <h3>{promise.title}</h3>
              <p>{promise.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
