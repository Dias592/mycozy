// Fonte única do domínio do site — nunca hardcode a URL em outro lugar.
// Configurar NEXT_PUBLIC_SITE_URL no .env.local quando o domínio mudar.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mycozyhome.site';
