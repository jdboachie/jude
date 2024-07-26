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
      className={cx(sans.className, 'cursor-crosshair')}
    >
      <body className="grid grid-cols-4 md:grid-cols-6 antialiased max-w-5xl mx-auto text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900 bg-white">
        <main
          className={cx(
            "flex flex-col col-span-4 md:col-start-2 pt-8 w-full min-w-0 px-6 md:px-8",
            'after:z-50 after:-top-1 after:fixed after:inset-0 after:h-16 after:bg-gradient-to-b after:backdrop-blur-[5px] after:backdrop-opacity-40 after:from-white/95 after:via-white/90 dark:after:from-neutral-900 dark:after:via-neutral-900/80 after:to-transparent'
          )}
        >
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
