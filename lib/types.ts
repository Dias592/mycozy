export type Product = {
  id: string; // MLB ID
  title: string;
  image: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  // Paráfrase própria de avaliações reais 5 estrelas — nunca o texto original do
  // comprador, por direito autoral. Preenchido só quando há dado real.
  depoimentos?: string[];
  affiliateUrl: string;
  pros: string[];
  cons: string[];
  specs?: Record<string, string>;
  lastUpdated: string; // YYYY-MM-DD
};

// Sentinelas usadas enquanto o produto ainda não tem dados reais/link
// gerado manualmente — nunca podem chegar num build publicado.
export const PENDING_AFFILIATE_URL = 'PENDENTE_LINK_AFILIADO';
export const PENDING_IMAGE = 'PENDENTE_IMAGEM_ANUNCIO';

export type FAQ = { question: string; answer: string };

export type PostSection = {
  h2: string;
  content?: string;
  productIds?: string[];
};

export type Categoria = 'decoracao' | 'organizacao' | 'cozinha' | 'cama-mesa-banho';

export type Post = {
  slug: string;
  categoria: Categoria;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  image: string;
  faq: FAQ[];
  productIds: string[];
  sections?: PostSection[];
};
