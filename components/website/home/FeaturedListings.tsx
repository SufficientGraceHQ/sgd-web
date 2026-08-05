import Link from 'next/link'

export default function FeaturedListings() {
  return (
    <section className="live-channel" aria-labelledby="live-channel-heading">
      <div className="site-shell live-channel__grid">
        <div className="live-channel__proof">
          <p className="eyebrow"><span /> Built in the real market</p>
          <strong>8,000+</strong>
          <h2 id="live-channel-heading">successful transactions<br />across <em>4+ years.</em></h2>
          <p>
            SGD has grown through WhatsApp and Instagram by keeping item references, prices, and transaction steps clear.
          </p>
        </div>

        <div className="live-channel__panel">
          <div className="live-channel__topline">
            <span>Official live channel</span>
            <span aria-hidden="true">● Live</span>
          </div>
          <div className="live-channel__handle">
            <span>@</span>
            <p>sufficientgrace<br />declutter</p>
          </div>
          <p className="live-channel__description">
            New items, fixed prices, reference IDs, locations, conditions, and availability updates are published here first.
          </p>
          <div className="live-channel__actions">
            <a className="button" href="https://instagram.com/sufficientgracedeclutter" target="_blank" rel="noopener noreferrer">
              Open live inventory <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href="/listings">Why inventory lives there <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
