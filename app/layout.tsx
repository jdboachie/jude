import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { sans, serif } from './fonts'
import { cx } from 'lib/utils'


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jude Boachie',
    template: '%s | Jude Boachie',
  },
  description: 'All manner of craft.',
  openGraph: {
    title: 'Jude Boachie',
    description: 'All manner of craft.',
    url: baseUrl,
    siteName: 'Jude Boachie',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(sans.className)}
    >
      <body className="grid grid-cols-4 md:grid-cols-6 antialiased max-w-5xl mx-auto text-neutral-700 dark:text-neutral-300">
        <main className="flex flex-col col-span-4 col-start-2 pt-8 w-full min-w-0 lg:px-8">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  )
}
