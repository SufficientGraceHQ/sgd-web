import Link from 'next/link'

export default function FeaturedListings() {
  return (
    <section
      className="bg-surface py-20"
      style={{ borderTop: '1px solid rgba(201,146,74,0.25)' }}
    >
      <div className="max-w-site mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">
          <div className="flex flex-col justify-center">
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Live Inventory
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-warm font-semibold leading-tight mb-5">
              Instagram Is Where New Items Drop.
            </h2>
            <div className="w-9 h-0.5 bg-gold mb-6" />
            <p className="font-ui text-body leading-relaxed max-w-xl">
              Follow our live posts for the current item, fixed price, reference ID,
              location, condition, and availability status.
            </p>
          </div>

          <div
            className="relative overflow-hidden p-8 md:p-10 flex flex-col justify-between min-h-80"
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #111111 100%)',
              border: '1px solid rgba(201,146,74,0.35)',
              borderRadius: '4px',
            }}
          >
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 w-20 h-20"
              style={{ borderTop: '2px solid #C9924A', borderRight: '2px solid #C9924A' }}
            />

            <div>
              <p className="font-ui text-xs tracking-[0.2em] uppercase text-muted mb-4">
                Official inventory channel
              </p>
              <p className="font-display text-3xl md:text-4xl text-warm font-semibold">
                <span className="block sm:inline">@sufficientgrace</span><span className="block sm:inline">declutter</span>
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://instagram.com/sufficientgracedeclutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold text-bg font-ui text-xs font-semibold tracking-[0.15em] uppercase px-7 py-4 hover:bg-gold-light transition-colors"
                style={{ borderRadius: '2px' }}
              >
                Browse Live Items
              </a>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center font-ui text-xs font-semibold tracking-[0.15em] uppercase px-7 py-4 hover:text-gold transition-colors"
                style={{ border: '1px solid #C9924A', color: '#C9924A', borderRadius: '2px' }}
              >
                Buying Process
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
