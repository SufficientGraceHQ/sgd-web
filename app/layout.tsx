import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sufficientgrace.ng'),
  title: 'Sufficient Grace Declutter',
  description:
    'A structured Lagos marketplace for clean secondhand furniture, appliances, and electronics.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg min-h-screen font-ui">
        {children}
      </body>
    </html>
  )
}
