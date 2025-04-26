import "./globals.css";
import type { Metadata } from "next";
import Dock from '@/components/dock';
import Toppie from '@/components/toppie';
import Footer from "@/components/footer";
import LocalFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Crimson_Pro, JetBrains_Mono } from "next/font/google";

const ui = LocalFont({
  variable: "--font-ui-sans",
  src: [
    {
      path: '../font/InterDisplay-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../font/InterDisplay-Medium.woff2',
      weight: '500',
    },
    {
      path: '../font/InterDisplay-Regular.woff2',
      weight: '400',
    },
  ]
})

const sans = LocalFont({
  variable: "--font-sans",
  src: "../font/ss0.ttf",
})

const serif = Crimson_Pro({
  weight: ['400', '500', '600', '700'],
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
        className={`${sans.variable} ${ui.variable} ${mono.variable} ${serif.variable} font-sans`}
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
