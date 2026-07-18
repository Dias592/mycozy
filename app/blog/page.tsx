import type { Metadata } from 'next';
import Link from 'next/link';
import { POSTS } from '@/lib/posts';
import { SITE_URL } from '@/lib/site-config';

const OG_IMAGE = {
  url: '/images/hero/my-cozy-home-og.webp',
  width: 1200,
  height: 630,
  alt: 'My Cozy Home - Guia de casa e decoração',
};

const TITLE = 'Blog';
const DESCRIPTION = 'Guias, comparativos e dicas sobre decoração, organização, cozinha e cama, mesa e banho.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: { url: '/blog/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-3xl text-ink">Blog</h1>

      {POSTS.length === 0 ? (
        <p className="mt-6 text-sand">Nenhum post publicado ainda.</p>
      ) : (
        <ul className="mt-8 space-y-6">
          {POSTS.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}/`} className="text-xl font-semibold text-sienna">
                {post.title}
              </Link>
              <p className="mt-1 text-sand">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
