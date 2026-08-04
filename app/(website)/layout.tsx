import type { Metadata } from 'next'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import WhatsAppFloat from '@/components/website/WhatsAppFloat'

export const metadata: Metadata = {
  title: {
    default: 'Sufficient Grace Declutter — Structured Secondhand Lagos',
    template: '%s | Sufficient Grace Declutter',
  },
  description:
    'Buy and sell clean secondhand furniture, appliances and electronics in Lagos through a structured, fixed-price process.',
  keywords: [
    'secondhand Lagos',
    'used furniture Lagos',
    'buy appliances Lagos',
    'SGD',
    'Sufficient Grace Declutter',
    'secondhand marketplace Lagos',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Sufficient Grace Declutter',
    locale: 'en_NG',
  },
}

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
