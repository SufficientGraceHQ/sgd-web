import Link from 'next/link'

export default function SellCTABanner() {
  return (
    <section className="sell-statement" aria-labelledby="sell-heading">
      <div className="site-shell sell-statement__inner">
        <div>
          <p className="eyebrow"><span /> Ready to declutter?</p>
          <h2 id="sell-heading">Let the right item<br />find its <em>next home.</em></h2>
        </div>
        <div className="sell-statement__action">
          <p>Share the item details with SGD. Our team reviews the submission and follows up on WhatsApp.</p>
          <Link className="button button--dark" href="/sell-with-us">Sell with SGD <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <p className="sell-statement__signature">Structure First. Scale Second.</p>
    </section>
  )
}
