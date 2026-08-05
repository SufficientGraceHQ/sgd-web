import Image from 'next/image'
import Link from 'next/link'
import ReferenceLookup from './ReferenceLookup'

export default function Hero() {
  return (
    <section className="marketplace-hero">
      <div data-hero-editorial className="marketplace-hero__media" aria-hidden="true">
        <Image
          src="/images/sgd-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="marketplace-hero__image"
        />
      </div>
      <div className="marketplace-hero__veil" aria-hidden="true" />

      <div className="site-shell marketplace-hero__inner">
        <div className="marketplace-hero__copy">
          <p className="eyebrow"><span /> Lagos&apos;s structured secondhand marketplace</p>
          <h1>
            Good pieces.<br />
            <em>A second life.</em><br />
            Clear process.
          </h1>
          <p className="marketplace-hero__lede">
            Clean and near-new furniture, appliances, and electronics—shared at fixed prices through a defined buying process.
          </p>
          <div className="marketplace-hero__actions">
            <a className="button" href="https://instagram.com/sufficientgracedeclutter" target="_blank" rel="noopener noreferrer">
              See live drops <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href="/how-it-works">
              Understand the process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="marketplace-hero__proof" aria-label="Marketplace track record">
          <div><strong>8,000+</strong><span>successful transactions</span></div>
          <div><strong>4+</strong><span>years in operation</span></div>
        </div>

        <p className="marketplace-hero__caption">Editorial scene · live items are posted on Instagram</p>
      </div>

      <div className="site-shell marketplace-hero__search-wrap">
        <ReferenceLookup />
      </div>
    </section>
  )
}
