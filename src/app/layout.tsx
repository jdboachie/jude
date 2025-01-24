import Dock from '@/components/dock';
import type { Metadata } from "next";
import { Inter, Crimson_Pro, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@radix-ui/react-tooltip";
import "./globals.css";
import Toppie from '@/components/toppie';

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

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
