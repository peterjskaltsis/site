import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const serifFont = localFont({
  src: [
    {
      path: './fonts/ConcretteTRIALVF.woff2',
    },
    {
      path: './fonts/ConcretteTRIALVF.woff',
    },
  ],
  variable: '--font-serif',
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
        className={`${interFont.variable} ${serifFont.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
