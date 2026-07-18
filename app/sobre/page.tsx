import type { Metadata } from 'next';

const OG_IMAGE = {
  url: '/images/hero/my-cozy-home-og.webp',
  width: 1200,
  height: 630,
  alt: 'My Cozy Home - Guia de casa e decoração',
};

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça o My Cozy Home e como testamos e comparamos produtos de casa e decoração.',
  alternates: { canonical: 'https://mycozyhome.com.br/sobre/' },
  openGraph: { url: '/sobre/', images: [OG_IMAGE] },
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-3xl text-ink">Sobre o My Cozy Home</h1>
      <p className="mt-6 text-lg text-sand">
        O My Cozy Home nasceu para ajudar quem quer deixar a casa mais aconchegante sem
        perder tempo comparando dezenas de produtos parecidos. Analisamos e comparamos
        itens de decoração, organização, cozinha e cama, mesa e banho para indicar as
        melhores opções em cada faixa de preço.
      </p>
    </div>
  );
}
