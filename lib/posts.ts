import type { Post } from './types';

// Posts como objetos tipados — nunca MDX. Cada post referencia productIds
// que são resolvidos via lib/mercadolivre.ts nas páginas.
export const POSTS: Post[] = [];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getPostsByCategoria(categoria: Post['categoria']): Post[] {
  return POSTS.filter((post) => post.categoria === categoria);
}

export function getLatestPosts(limit = 3): Post[] {
  return [...POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}
