import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site-config';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const OG_IMAGE = {
  url: '/images/hero/my-cozy-home-og.webp',
  width: 1200,
  height: 630,
  alt: 'My Cozy Home - Guia de casa e decoração',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'My Cozy Home | Guia de Casa e Decoração',
    template: '%s | My Cozy Home',
  },
  description:
    'Guias e comparativos de produtos de decoração, organização, cozinha e cama, mesa e banho para deixar sua casa mais aconchegante.',
  openGraph: {
    siteName: 'My Cozy Home',
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Cozy Home | Guia de Casa e Decoração',
    description:
      'Guias e comparativos de produtos de decoração, organização, cozinha e cama, mesa e banho para deixar sua casa mais aconchegante.',
    images: [OG_IMAGE.url],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-plaster font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
