'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { buildWhatsAppLink } from '@/lib/sgd-listings'

const NAV_LINKS = [
  { label: 'Browse', href: '/listings' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Sell an item', href: '/sell-with-us' },
  { label: 'Our story', href: '/about' },
]

export default function Navbar() {
  const [openPathname, setOpenPathname] = useState<string | null>(null)
  const pathname = usePathname()
  const open = openPathname === pathname

  return (
    <header className="site-header">
      <div data-marketplace-utility className="marketplace-utility">
        <div className="site-shell marketplace-utility__inner">
          <p><span>8,000+ transactions</span><span aria-hidden="true">·</span><span>4+ years in Lagos</span></p>
          <a href="https://instagram.com/sufficientgracedeclutter" target="_blank" rel="noopener noreferrer">
            Live inventory on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <nav className="site-shell primary-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-lockup" aria-label="Sufficient Grace Declutter home" onClick={() => setOpenPathname(null)}>
          <span className="brand-monogram">SGD</span>
          <span className="brand-name">Sufficient Grace<br />Declutter</span>
        </Link>

        <ul className="primary-nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a className="button button--compact primary-nav__cta" href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          Talk to SGD <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="menu-trigger"
          onClick={() => setOpenPathname((current) => current === pathname ? null : pathname)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-navigation">
          <div className="site-shell mobile-navigation__inner">
            {NAV_LINKS.map((link, index) => (
              <Link key={link.href} href={link.href} onClick={() => setOpenPathname(null)}>
                <span>{String(index + 1).padStart(2, '0')}</span>{link.label}
              </Link>
            ))}
            <a className="button" href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Talk to SGD <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
