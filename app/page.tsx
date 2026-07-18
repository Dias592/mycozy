import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIA_DESCRIPTIONS, CATEGORIA_LABELS } from '@/lib/seo-keywords';
import { getLatestPosts } from '@/lib/posts';
import { getRankingsByCategoria } from '@/lib/melhores';
import { SITE_URL } from '@/lib/site-config';
import { buildGraph, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';
import type { Categoria } from '@/lib/types';

const OG_IMAGE = {
  url: '/images/hero/my-cozy-home-og.webp',
  width: 1200,
  height: 630,
  alt: 'My Cozy Home - Guia de casa e decoração',
};

const TITLE = 'My Cozy Home | Guia de Casa e Decoração';
const DESCRIPTION =
  'Comparativos e guias de produtos de decoração, organização, cozinha e cama, mesa e banho para deixar sua casa mais aconchegante.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: { url: '/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

const CATEGORIAS = Object.keys(CATEGORIA_LABELS) as Categoria[];
const CATEGORIA_SWATCH: Record<Categoria, string> = {
  decoracao: 'bg-sienna-light',
  organizacao: 'bg-moss',
  cozinha: 'bg-line',
  'cama-mesa-banho': 'bg-sand',
};

export default function HomePage() {
  const latestPosts = getLatestPosts(3);
  const schema = buildGraph(generateOrganizationSchema(), generateWebSiteSchema());

  return (
    <div className="mx-auto max-w-[1100px] px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="grid grid-cols-1 items-center gap-14 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-moss">
            Guias e comparativos independentes
          </div>
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
            Uma casa mais aconchegante começa pela escolha certa
          </h1>
          <p className="mt-5 max-w-md text-base text-sand">
            Analisamos e comparamos produtos reais de decoração, organização, cozinha e
            cama, mesa e banho — pra você escolher com confiança, sem perder tempo
            pesquisando.
          </p>
          <Link
            href="/categorias/decoracao/"
            className="mt-7 inline-flex items-center gap-2 bg-moss px-6 py-3 text-sm font-medium text-linen"
          >
            Ver guias de decoração →
          </Link>
        </div>

        <div className="relative aspect-[4/5]">
          <div className="absolute inset-0 overflow-hidden rounded-sm">
            <Image
              src="/images/hero/my-cozy-home-hero.webp"
              alt="Casa aconchegante decorada com casinhas de madeira e ramos de pinheiro"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[220px] bg-linen p-5 text-sm text-sand shadow-sm">
            <strong className="mb-1 block font-serif text-base font-medium text-ink">
              Comparativos honestos
            </strong>
            Prós e contras reais de cada produto, sem enrolação
          </div>
        </div>
      </section>

      <div className="stitch" />

      <section className="py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl text-ink">Explore por ambiente</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CATEGORIAS.map((categoria, index) => (
            <Link
              key={categoria}
              href={`/categorias/${categoria}/`}
              className={`relative flex min-h-[180px] flex-col justify-end border border-line bg-linen p-7 ${
                index === 0 ? 'sm:col-span-1 sm:row-span-2' : ''
              } ${index === 3 ? 'sm:col-span-2' : ''}`}
            >
              {index !== 0 && (
                <span className="absolute right-7 top-6 text-xs text-sand">
                  {getRankingsByCategoria(categoria).length} guias
                </span>
              )}
              <div className={`mb-4 h-8 w-8 rounded-full ${CATEGORIA_SWATCH[categoria]}`} />
              <h3 className="font-serif text-xl text-ink">{CATEGORIA_LABELS[categoria]}</h3>
              <p className="mt-1 text-sm text-sand">{CATEGORIA_DESCRIPTIONS[categoria]}</p>
            </Link>
          ))}
        </div>
      </section>

      {latestPosts.length > 0 && (
        <>
          <div className="stitch" />

          <section className="py-16">
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="font-serif text-3xl text-ink">Últimas análises</h2>
              <Link href="/blog/" className="text-sm font-medium text-sienna">
                Ver blog completo →
              </Link>
            </div>

            <div className="flex flex-col">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="grid grid-cols-[180px_1fr_auto] items-center gap-6 border-b border-line py-6 first:pt-0"
                >
                  <div className="aspect-[4/3] rounded-sm bg-linen" />
                  <div>
                    <div className="mb-1.5 text-xs font-medium uppercase tracking-wide text-moss">
                      {CATEGORIA_LABELS[post.categoria]}
                    </div>
                    <h3 className="font-serif text-lg text-ink">{post.title}</h3>
                    <p className="mt-1 text-sm text-sand">{post.excerpt}</p>
                  </div>
                  <div className="whitespace-nowrap text-xs text-sand">
                    Atualizado {post.updatedDate ?? post.date}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      <section className="-mx-8 mt-8 bg-moss-dark px-8 py-11 text-linen">
        <div className="mx-auto flex max-w-[1100px] flex-wrap justify-between gap-8">
          <div className="min-w-[180px] flex-1">
            <div className="mb-1.5 font-serif text-xl">Independente</div>
            <p className="text-sm text-[#C9C2AE]">
              Não somos loja — comparamos produtos de vários vendedores sem favorecer
              nenhum.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-1.5 font-serif text-xl">Fotos reais</div>
            <p className="text-sm text-[#C9C2AE]">
              Todas as imagens vêm dos próprios anúncios dos produtos testados.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="mb-1.5 font-serif text-xl">Sempre atualizado</div>
            <p className="text-sm text-[#C9C2AE]">
              Preços e disponibilidade revisados continuamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
