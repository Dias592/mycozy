import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRankingBySlug, RANKING_PAGES } from '@/lib/melhores';
import { buildGraph, generateBreadcrumbSchema, generateFAQSchema, generateItemListSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/site-config';
import { CATEGORIA_LABELS } from '@/lib/seo-keywords';
import ComparisonTable from '@/components/ComparisonTable';
import ProductCard from '@/components/ProductCard';
import ProductImageStrip from '@/components/ProductImageStrip';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import AuthorBlock from '@/components/AuthorBlock';
import { PENDING_IMAGE } from '@/lib/types';

export function generateStaticParams() {
  return RANKING_PAGES.map((page) => ({ 'produto-slug': page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { 'produto-slug': string };
}): Metadata {
  const page = getRankingBySlug(params['produto-slug']);
  if (!page) return {};

  const featuredProduct = page.entries.find((entry) => entry.product.image !== PENDING_IMAGE)?.product;
  const ogImage = featuredProduct
    ? { url: featuredProduct.image, alt: featuredProduct.title }
    : {
        url: '/images/hero/my-cozy-home-og.webp',
        width: 1200,
        height: 630,
        alt: page.title,
      };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${SITE_URL}/melhores/${page.slug}/` },
    openGraph: {
      url: `/melhores/${page.slug}/`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage.url],
    },
  };
}

export default function MelhoresPage({
  params,
}: {
  params: { 'produto-slug': string };
}) {
  const page = getRankingBySlug(params['produto-slug']);
  if (!page) notFound();

  const products = page.entries.map((entry) => entry.product);
  const categoriaLabel = CATEGORIA_LABELS[page.categoria];

  const schema = buildGraph(
    ...(products.length > 0 ? [generateItemListSchema(products, page.title)] : []),
    generateFAQSchema(page.faq),
    generateBreadcrumbSchema([
      { name: 'Início', url: '/' },
      { name: categoriaLabel, url: `/categorias/${page.categoria}/` },
      { name: page.title, url: `/melhores/${page.slug}/` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-3xl px-4 py-16">
        <AffiliateDisclosure />

        <nav
          aria-label="Breadcrumb"
          className="mt-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-sand"
        >
          <Link href="/" className="hover:text-sienna">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={`/categorias/${page.categoria}/`} className="hover:text-sienna">
            {categoriaLabel}
          </Link>
        </nav>

        <h1 className="mt-3 font-serif text-3xl text-ink md:text-4xl">{page.title}</h1>

        {products.length > 0 && (
          <div className="mt-7">
            <ProductImageStrip products={products} />
          </div>
        )}

        <p className="mt-7 text-lg leading-relaxed text-ink/90">{page.respostaDireta}</p>

        {page.metodologia && (
          <section className="mt-8 rounded-sm border-l-2 border-moss bg-linen/60 p-5">
            <h2 className="font-serif text-lg text-ink">Por que confiar neste guia</h2>
            <p className="mt-2 text-sm text-sand">{page.metodologia}</p>
          </section>
        )}

        {page.entries.length > 1 && (
          <nav aria-label="Produtos comparados nesta página" className="mt-8 flex flex-wrap gap-2">
            {page.entries.map(({ product }, index) => (
              <a
                key={product.id}
                href={`#produto-${product.id}`}
                className="rounded-sm border border-line bg-linen px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-moss hover:text-moss"
              >
                {index + 1}. {product.title}
              </a>
            ))}
          </nav>
        )}

        {products.length > 0 && (
          <div className="mt-8">
            <ComparisonTable products={products} />
          </div>
        )}

        {page.entries.map(({ product, highlight, blurb, paraQuemEIndicado }, index) => (
          <section
            key={product.id}
            id={`produto-${product.id}`}
            className="mt-8 scroll-mt-8 rounded-sm border border-line bg-linen/40 p-6 sm:p-8"
          >
            <ProductCard product={product} position={index + 1} highlight={highlight} />

            {blurb && <p className="mt-5 text-sand">{blurb}</p>}

            {(product.pros.length > 0 || product.cons.length > 0) && (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {product.pros.length > 0 && (
                  <div>
                    <h3 className="font-serif text-lg text-ink">Prós</h3>
                    <ul className="mt-2 space-y-2">
                      {product.pros.map((pro) => (
                        <li key={pro} className="flex gap-2 text-sm text-sand">
                          <span aria-hidden="true" className="mt-0.5 flex-shrink-0 text-moss">
                            ✓
                          </span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.cons.length > 0 && (
                  <div>
                    <h3 className="font-serif text-lg text-ink">Contras</h3>
                    <ul className="mt-2 space-y-2">
                      {product.cons.map((con) => (
                        <li key={con} className="flex gap-2 text-sm text-sand">
                          <span aria-hidden="true" className="mt-0.5 flex-shrink-0 text-sienna">
                            ✕
                          </span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {product.specs && (
              <div className="mt-6 rounded-sm bg-white px-4 py-1">
                <h3 className="mt-3 font-serif text-lg text-ink">Ficha técnica</h3>
                <dl className="mt-1 divide-y divide-line text-sm">
                  {Object.entries(product.specs).map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4 py-1.5">
                      <dt className="text-sand">{label}</dt>
                      <dd className="text-right text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {paraQuemEIndicado && (
              <>
                <h3 className="mt-6 font-serif text-lg text-ink">Para quem é indicado</h3>
                <p className="mt-1 text-sand">{paraQuemEIndicado}</p>
              </>
            )}
          </section>
        ))}

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="font-serif text-2xl text-ink">{page.comoEscolherTitulo}</h2>
          {page.comoEscolherIntro && <p className="mt-3 text-sand">{page.comoEscolherIntro}</p>}

          {page.comoEscolherSecoes.map((secao) => (
            <div key={secao.h3} className="mt-6">
              <h3 className="font-serif text-lg text-ink">{secao.h3}</h3>
              {secao.content && <p className="mt-2 text-sand">{secao.content}</p>}
              {secao.lista && (
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sand marker:text-moss">
                  {secao.lista.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {page.faq.length > 0 && (
          <section className="mt-12 border-t border-line pt-10">
            <h2 className="font-serif text-2xl text-ink">Perguntas frequentes</h2>
            <div className="mt-4 divide-y divide-line">
              {page.faq.map((item, index) => (
                <details key={item.question} className="group py-4" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-serif text-lg text-ink">{item.question}</h3>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 text-xl leading-none text-sand transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-sand">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <AuthorBlock
          name="My Cozy Home"
          bio="Equipe de curadoria do My Cozy Home, dedicada a comparar produtos de casa e decoração pra ajudar você a escolher melhor."
          updatedDate={page.updatedDate}
        />
      </article>
    </>
  );
}
