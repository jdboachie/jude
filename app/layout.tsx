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
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black tracking-tight',
        GeistSans.variable,
        GeistMono.variable,
        sans.className
      )}
    >
      <body className="grid grid-cols-6 antialiased max-w-3xl mx-4 lg:mx-auto">
        <div className={cx(serif.className, "sticky top-0 pt-10 text-neutral-700 h-screen italic flex items-start justify-center")}>
          
        </div>
        <main className="flex-auto mt-8 col-span-4 col-start-2 min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
