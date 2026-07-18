import type { Metadata } from 'next';

const OG_IMAGE = {
  url: '/images/hero/my-cozy-home-og.webp',
  width: 1200,
  height: 630,
  alt: 'My Cozy Home - Guia de casa e decoração',
};

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com o My Cozy Home.',
  alternates: { canonical: 'https://mycozyhome.com.br/contato/' },
  openGraph: { url: '/contato/', images: [OG_IMAGE] },
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
