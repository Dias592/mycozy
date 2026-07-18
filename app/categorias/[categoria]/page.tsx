import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategoria } from '@/lib/posts';
import { getRankingBySlug, getRankingsByCategoria } from '@/lib/melhores';
import { getProdutosPorCategoria } from '@/lib/catalogo-produtos';
import { CATEGORIA_DESCRIPTIONS, CATEGORIA_LABELS } from '@/lib/seo-keywords';
import { SITE_URL } from '@/lib/site-config';
import { buildGraph, generateBreadcrumbSchema } from '@/lib/schema';
import type { Categoria } from '@/lib/types';

const CATEGORIAS = Object.keys(CATEGORIA_LABELS) as Categoria[];

export function generateStaticParams() {
  return CATEGORIAS.map((categoria) => ({ categoria }));
}

export function generateMetadata({ params }: { params: { categoria: string } }): Metadata {
  const categoria = params.categoria as Categoria;
  const label = CATEGORIA_LABELS[categoria];
  if (!label) return {};

  const description = `Guias e comparativos de produtos de ${label.toLowerCase()} para deixar sua casa mais aconchegante.`;
  const image = { url: '/images/hero/my-cozy-home-og.webp', width: 1200, height: 630, alt: label };
  const title = `${label} para Casa: Guias e Comparativos 2026`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/categorias/${categoria}/` },
    openGraph: {
      url: `/categorias/${categoria}/`,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const categoria = params.categoria as Categoria;
  const label = CATEGORIA_LABELS[categoria];
  if (!label) notFound();

  const posts = getPostsByCategoria(categoria);
  const rankingsPublicados = getRankingsByCategoria(categoria).length;
  const produtosPlanejados = getProdutosPorCategoria(categoria);

  const schema = buildGraph(
    generateBreadcrumbSchema([
      { name: 'Início', url: '/' },
      { name: label, url: `/categorias/${categoria}/` },
    ])
  );

  return (
    <div className="mx-auto max-w-[1100px] px-8 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h1 className="font-serif text-3xl text-ink">{label}</h1>
      <p className="mt-3 max-w-2xl text-sand">{CATEGORIA_DESCRIPTIONS[categoria]}</p>

      <p className="mt-2 text-xs text-sand">
        {rankingsPublicados} de {produtosPlanejados.length} guias publicados
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {produtosPlanejados.map((produto) => {
          const ranking = getRankingBySlug(produto.slug);

          if (!ranking) {
            return (
              <div
                key={produto.slug}
                className="flex min-h-[120px] flex-col justify-between border border-dashed border-line p-5 text-sand"
              >
                <span className="text-sm capitalize">{produto.termoBusca}</span>
                <span className="text-xs">Em breve</span>
              </div>
            );
          }

          return (
            <Link
              key={produto.slug}
              href={`/melhores/${produto.slug}/`}
              className="flex min-h-[120px] flex-col justify-between border border-line bg-linen p-5"
            >
              <span className="font-serif text-lg text-ink">{ranking.title}</span>
              <span className="text-xs text-sienna">Ver comparativo →</span>
            </Link>
          );
        })}
      </div>

      {posts.length > 0 && (
        <div className="mt-16 border-t border-line pt-10">
          <h2 className="font-serif text-2xl text-ink">Artigos sobre {label.toLowerCase()}</h2>
          <ul className="mt-6 space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}/`} className="font-serif text-xl text-sienna">
                  {post.title}
                </Link>
                <p className="mt-1 text-sand">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
