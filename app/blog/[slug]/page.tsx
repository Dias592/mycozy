import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, POSTS } from '@/lib/posts';
import { getItem } from '@/lib/mercadolivre';
import { buildGraph, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/site-config';
import SatellitePost from '@/components/SatellitePost';
import type { Product } from '@/lib/types';

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const image = { url: post.image, width: 1200, height: 630, alt: post.title };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    openGraph: {
      url: `/blog/${post.slug}/`,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [image.url] },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const productEntries = await Promise.all(
    post.productIds.map(async (id) => {
      const product = await getItem(id);
      return [id, { ...product, pros: [], cons: [] } as Product] as const;
    })
  );
  const products = new Map(productEntries);

  const schema = buildGraph(
    generateFAQSchema(post.faq),
    generateBreadcrumbSchema([
      { name: 'Início', url: '/' },
      { name: 'Blog', url: '/blog/' },
      { name: post.title, url: `/blog/${post.slug}/` },
    ])
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SatellitePost post={post} products={products} />
    </>
  );
}
