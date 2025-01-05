import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jude Boachie",
  description: "Crafting systems and code for people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
