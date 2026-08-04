const STATS = [
  { stat: '8,000+', label: 'Successful Transactions' },
  { stat: '4+ Years', label: 'Serving Customers' },
  { stat: 'Fixed', label: 'Transparent Prices' },
  { stat: 'Lagos', label: 'Based & Operational' },
]

export default function TrustBar() {
  return (
    <section
      className="bg-surface"
      style={{ borderTop: '1.5px solid #C9924A' }}
    >
      <div className="max-w-site mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div key={i} className="text-center">
            <p
              className="font-mono text-2xl md:text-3xl text-gold font-bold mb-1"
            >
              {s.stat}
            </p>
            <p className="font-ui text-xs tracking-[0.15em] uppercase text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
