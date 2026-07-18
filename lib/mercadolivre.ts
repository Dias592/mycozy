import type { Product } from './types';

const ML_BASE = 'https://api.mercadolibre.com';

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) return cachedToken.value;

  const res = await fetch(`${ML_BASE}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.ML_CLIENT_ID!,
      client_secret: process.env.ML_CLIENT_SECRET!,
    }),
  });

  if (!res.ok) {
    throw new Error(`Falha ao autenticar na API do Mercado Livre: ${res.status}`);
  }

  const data = await res.json();
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000 - 60_000,
  };
  return cachedToken.value;
}

function getHighResImage(thumbnailUrl: string): string {
  // sufixo -O = tamanho grande/original; -I = thumbnail de listagem (baixa resolução)
  return thumbnailUrl.replace('-I.jpg', '-O.jpg').replace('http://', 'https://');
}

function mapToProduct(item: any): Omit<Product, 'pros' | 'cons'> {
  return {
    id: item.id,
    title: item.title,
    image: getHighResImage(item.thumbnail),
    price: item.price,
    affiliateUrl: 'PENDENTE_LINK_AFILIADO',
    lastUpdated: new Date().toISOString().slice(0, 10),
  };
}

export async function searchProducts(query: string, limit = 10) {
  const token = await getAccessToken();
  const res = await fetch(
    `${ML_BASE}/sites/MLB/search?q=${encodeURIComponent(query)}&limit=${limit}`,
    { headers: { Authorization: `Bearer ${token}` }, next: { revalidate: 86400 } }
  );

  if (!res.ok) {
    throw new Error(`Falha ao buscar produtos no Mercado Livre: ${res.status}`);
  }

  const data = await res.json();
  return data.results.map(mapToProduct);
}

export async function getItem(itemId: string) {
  const token = await getAccessToken();
  const res = await fetch(`${ML_BASE}/items/${itemId}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Falha ao buscar item ${itemId} no Mercado Livre: ${res.status}`);
  }

  const item = await res.json();
  return mapToProduct(item);
}
