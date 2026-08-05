import Link from 'next/link'
import { buildWhatsAppLink } from '@/lib/sgd-listings'

const NAVIGATION = [
  { label: 'Browse inventory', href: '/listings' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Sell an item', href: '/sell-with-us' },
  { label: 'Our story', href: '/about' },
  { label: 'Buyer FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="site-shell premium-footer__top">
        <div className="premium-footer__brand">
          <Link href="/" className="brand-lockup" aria-label="Sufficient Grace Declutter home">
            <span className="brand-monogram">SGD</span>
            <span className="brand-name">Sufficient Grace<br />Declutter</span>
          </Link>
          <p>A Lagos marketplace for clean and near-new furniture, appliances, and electronics—moved through a structured process.</p>
        </div>

        <div className="premium-footer__nav">
          <p className="footer-label">Explore</p>
          <ul>
            {NAVIGATION.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          </ul>
        </div>

        <div className="premium-footer__contact">
          <p className="footer-label">Official channels</p>
          <a href="https://instagram.com/sufficientgracedeclutter" target="_blank" rel="noopener noreferrer">
            Instagram <span aria-hidden="true">↗</span>
          </a>
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <p>Current inventory is verified through official SGD posts and direct human confirmation.</p>
        </div>
      </div>

      <div className="site-shell premium-footer__statement">
        <p>Structure First.<br /><em>Scale Second.</em></p>
      </div>

      <div className="premium-footer__bottom">
        <div className="site-shell">
          <span>© Sufficient Grace Declutter</span>
          <span>Lagos, Nigeria</span>
          <span>Fixed-price secondhand marketplace</span>
        </div>
      </div>
    </footer>
  )
}
