import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Peter Skaltsis',
  description:
    'Co-Founder. Creative Architect. Designer and Engineer. Crafting early-stage products. Based in Melbourne, Australia.',
  // viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: 'Peter Skaltsis',
    description:
      'Co-Founder. Creative Architect. Designer and Engineer. Crafting early-stage products. Based in Melbourne, Australia.',
    type: 'website',
    siteName: 'Peter Skaltsis',
    images: [
      {
        url: 'https://skalts.is/JDb8eLPt_400x400.jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Peter Skaltsis',
    site: '@peterjskaltsis',
    creator: '@individual_account',
    description:
      'Co-Founder. Creative Architect. Designer and Engineer. Crafting early-stage products. Based in Melbourne, Australia.',
    images: ['https://skalts.is/JDb8eLPt_400x400.jpeg'],
  },
  authors: [{ name: 'Peter Skaltsis' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
