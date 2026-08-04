import type { Metadata } from 'next'
import Link from 'next/link'
import { buildWhatsAppLink } from '@/lib/sgd-listings'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'A clear guide to buying clean secondhand items through the structured Sufficient Grace Declutter process.',
}

const STEPS = [
  {
    step: 1,
    title: 'Find an Item',
    detail:
      'Browse the live posts on Instagram @sufficientgracedeclutter. Screenshot the item and its SGD reference ID.',
  },
  {
    step: 2,
    title: 'Reach Out',
    detail:
      "Send the screenshot to our WhatsApp or Instagram DM. We confirm if the item is still available and confirm the fixed caption price.",
  },
  {
    step: 3,
    title: 'Pay SGD First',
    detail:
      "Payment is made to SGD — not the seller. Seller details are released only after SGD confirms the payment through its authorized process.",
  },
  {
    step: 4,
    title: 'Choose Your Route',
    detail:
      'Point & Kill: we inspect and coordinate delivery. Self Inspection: we release seller contact and you arrange your inspection and pickup.',
  },
  {
    step: 5,
    title: 'Item Moves',
    detail:
      'SGD accepts clean or near-new items. Condition is checked according to the selected buying route before completion.',
  },
]

const FAQS = [
  {
    q: 'Why do I pay before seeing the seller?',
    a: 'Payment to SGD keeps payment and seller-detail release inside one accountable transaction path. Seller settlement follows the authorized SGD process.',
  },
  {
    q: "What if the item isn't as described?",
    a: 'Our listings are clean or near-new only. Point & Kill adds an inspection step so the item condition can be checked before delivery.',
  },
  {
    q: 'Can I negotiate the price?',
    a: 'No. Prices are fixed and non-negotiable. The price you see is the price you pay.',
  },
  {
    q: 'How do I contact SGD?',
    a: 'Message us on WhatsApp or Instagram DM @sufficientgracedeclutter with the item reference or a screenshot.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We operate across Lagos. Delivery coverage depends on item size and route selected.',
  },
  {
    q: "What happens if a deal falls through?",
    a: "We pause fulfilment and escalate the case to the authorized SGD team. Any refund or alternative requires human review and confirmation.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-bg pt-20 pb-16">
        <div className="max-w-site mx-auto px-6">
          <p className="font-ui text-xs tracking-[0.3em] uppercase text-gold mb-4">The Process</p>
          <h1 className="font-display text-5xl md:text-6xl text-warm font-semibold mb-4">
            How SGD Works
          </h1>
          <div className="w-9 h-0.5 bg-gold mb-6" />
          <p className="font-ui text-body text-lg max-w-xl leading-relaxed">
            A structured process with clear payment, inspection, and fulfilment handoffs.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="bg-surface py-20"
        style={{ borderTop: '1.5px solid #C9924A' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <div key={step.step} className="flex gap-8">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                    style={{ border: '1.5px solid #C9924A', background: '#0C0C0C' }}
                  >
                    <span className="font-mono text-gold font-bold text-sm">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className="w-px flex-1 my-2"
                      style={{ background: 'rgba(201,146,74,0.2)', minHeight: '40px' }}
                    />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-display text-2xl text-warm font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="font-ui text-sm text-body leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes comparison */}
      <section className="bg-bg py-20">
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl text-warm font-semibold">Two Routes. One Standard.</h2>
            <div className="w-9 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: 'Point & Kill',
                badge: 'SGD-Led',
                desc: 'Pay SGD. We visit the seller, add a condition-check step, and coordinate delivery to you.',
                steps: ['You pay SGD', 'We visit the source', 'Condition is checked', 'Delivery is coordinated'],
              },
              {
                title: 'Self Inspection',
                badge: 'Buyer-Led',
                desc: "Pay SGD. We release the seller's contact details. You arrange your own visit, inspection, and pickup logistics.",
                steps: ['You pay SGD', 'We share seller details', 'You visit & inspect', 'You arrange pickup'],
              },
            ].map((route) => (
              <div
                key={route.title}
                className="p-8"
                style={{
                  background: '#111111',
                  border: '1px solid rgba(201,146,74,0.2)',
                  borderRadius: '4px',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="font-display text-2xl text-warm font-semibold">{route.title}</h3>
                  <span
                    className="font-ui text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 text-bg"
                    style={{ background: '#C9924A', borderRadius: '2px' }}
                  >
                    {route.badge}
                  </span>
                </div>
                <p className="font-ui text-sm text-body leading-relaxed mb-6">{route.desc}</p>
                <ul className="space-y-2">
                  {route.steps.map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="font-mono text-gold text-xs">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-ui text-xs text-muted">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="text-center py-5 px-6"
            style={{
              background: 'rgba(201,146,74,0.05)',
              border: '1px solid rgba(201,146,74,0.3)',
              borderRadius: '4px',
            }}
          >
            <p className="font-ui text-sm text-gold font-semibold">
              Payment to SGD always comes first — in both routes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-surface py-20"
        style={{ borderTop: '1px solid rgba(201,146,74,0.3)' }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl text-warm font-semibold">Common Questions</h2>
            <div className="w-9 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="space-y-0">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: '1px solid rgba(201,146,74,0.15)' }}
              >
                <h3 className="font-display text-xl text-warm font-semibold mb-3">{faq.q}</h3>
                <p className="font-ui text-sm text-body leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg py-16 text-center">
        <div className="max-w-site mx-auto px-6">
          <p className="font-display text-3xl text-warm font-semibold mb-6">
            Ready to Buy?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/listings"
              className="inline-block bg-gold text-bg font-ui text-sm font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:bg-gold-light transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Browse Listings
            </Link>
            <a
              href={buildWhatsAppLink('Hi SGD, I have a question about buying.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-ui text-sm font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:text-gold transition-colors"
              style={{ border: '1px solid #C9924A', color: '#C9924A', borderRadius: '2px' }}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
