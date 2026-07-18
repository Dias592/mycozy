import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-config';

const OG_IMAGE = {
  url: '/images/hero/my-cozy-home-og.webp',
  width: 1200,
  height: 630,
  alt: 'My Cozy Home - Guia de casa e decoração',
};

const TITLE = 'Contato';
const DESCRIPTION = 'Fale com o My Cozy Home.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contato/` },
  openGraph: { url: '/contato/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-3xl text-ink">Contato</h1>
      <p className="mt-6 text-lg text-sand">
        Dúvidas, sugestões de produtos ou parcerias: [EMAIL_CONTATO]
      </p>
    </div>
  );
}
