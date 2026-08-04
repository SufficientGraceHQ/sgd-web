import type { Metadata } from 'next'
import { buildWhatsAppLink } from '@/lib/sgd-listings'

export const metadata: Metadata = {
  title: 'Live SGD Inventory',
  description:
    'Browse the current Sufficient Grace Declutter inventory on Instagram and inquire using the listing reference ID.',
}

const STEPS = [
  {
    number: '01',
    title: 'Browse the Live Post',
    body: 'Current items are published on @sufficientgracedeclutter with their price, condition, location, and status.',
  },
  {
    number: '02',
    title: 'Copy the Reference ID',
    body: 'Use the SGD reference shown in the caption so the team can identify the exact item without guesswork.',
  },
  {
    number: '03',
    title: 'Message SGD',
    body: 'Send the reference or screenshot on WhatsApp or Instagram. The team confirms the current availability before payment.',
  },
]

export default function ListingsPage() {
  return (
    <>
      <section className="bg-bg pt-20 pb-16">
        <div className="max-w-site mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Current Inventory
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-warm font-semibold leading-tight mb-5">
              Live Items.<br />One Official Source.
            </h1>
            <div className="w-9 h-0.5 bg-gold mb-6" />
            <p className="font-ui text-body text-lg leading-relaxed max-w-xl mb-8">
              Instagram is SGD&apos;s live inventory. Each active caption carries the
              current price, reference ID, location, condition, and availability status.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://instagram.com/sufficientgracedeclutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold text-bg font-ui text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors"
                style={{ borderRadius: '2px' }}
              >
                Browse Live Inventory
              </a>
              <a
                href={buildWhatsAppLink('Hi SGD, I want to confirm an item from your Instagram page.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-ui text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:text-gold transition-colors"
                style={{ border: '1px solid #C9924A', color: '#C9924A', borderRadius: '2px' }}
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div
            className="relative p-8 md:p-10"
            style={{
              background: '#1A1A1A',
              border: '1px solid rgba(201,146,74,0.35)',
              borderRadius: '4px',
            }}
          >
            <span
              aria-hidden="true"
              className="absolute -top-px -right-px w-16 h-16"
              style={{ borderTop: '2px solid #C9924A', borderRight: '2px solid #C9924A' }}
            />
            <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-muted mb-3">
              Official channel
            </p>
            <p className="font-display text-3xl md:text-4xl text-warm font-semibold mb-8">
              <span className="block sm:inline">@sufficientgrace</span><span className="block sm:inline">declutter</span>
            </p>
            <div className="space-y-4 font-ui text-sm text-body">
              {['ITEM', 'FIXED PRICE', 'REFERENCE ID', 'LOCATION', 'CONDITION', 'STATUS'].map((field) => (
                <div key={field} className="flex items-center justify-between gap-4 pb-3 border-b border-surface3">
                  <span className="text-muted">Caption field</span>
                  <span className="text-gold tracking-[0.12em] text-xs">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-surface py-20"
        style={{ borderTop: '1.5px solid #C9924A' }}
      >
        <div className="max-w-site mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-ui text-xs tracking-[0.3em] uppercase text-gold mb-4">
              How to Inquire
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-warm font-semibold">
              Reference First. Confirmation Next.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <article
                key={step.number}
                className="p-8"
                style={{
                  background: '#111111',
                  border: '1px solid rgba(201,146,74,0.2)',
                  borderRadius: '4px',
                }}
              >
                <p className="font-ui text-4xl font-bold text-gold opacity-30 mb-8">
                  {step.number}
                </p>
                <h3 className="font-display text-2xl text-warm font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-ui text-sm text-muted leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>

          <p className="font-ui text-xs text-muted text-center mt-10">
            Availability is confirmed at the time of inquiry and is never assumed from an old post or screenshot.
          </p>
        </div>
      </section>
    </>
  )
}
