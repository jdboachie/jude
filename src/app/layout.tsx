import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Dock from '@/components/dock';
import type { Metadata } from "next";
import LocalFont from "next/font/local"
import { Crimson_Pro, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import Toppie from '@/components/toppie';

const sans = LocalFont({
  variable: "--font-sans",
  src: '../font/InterDisplay-Regular.woff2'
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
          <TooltipProvider delayDuration={150}>
            <Toppie />
            {children}
            <Dock />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
