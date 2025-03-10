import "./globals.css";
import type { Metadata } from "next";
import LocalFont from "next/font/local";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Crimson_Pro, JetBrains_Mono } from "next/font/google";
import Dock from '@/components/dock';
import Toppie from '@/components/toppie';
import Footer from "@/components/footer";

const sans = LocalFont({
  variable: "--font-sans",
  src: [
    {
      path: '../font/X-Medium.woff2',
      weight: '500',
    },
    {
      path: '../font/X-Regular.woff2',
      weight: '400',
    },
  ]
})

const serif = Crimson_Pro({
  weight: ['400', '700'],
  variable: "--font-serif",
  subsets: ['latin'],
  style: ['normal', 'italic']
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jude Boachie",
  description: "Building systems and code for people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
      </head> */}
      <body
        className={`${sans.variable} ${mono.variable} ${serif.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={200}>
            <Toppie />
            {children}
            <Analytics />
            <SpeedInsights />
            <Dock />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
