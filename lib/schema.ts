import type { FAQ, Product } from './types';
import { SITE_URL } from './site-config';

export function generateItemListSchema(products: Product[], listName: string) {
  return {
    '@type': 'ItemList',
    name: listName,
    itemListElement: products.map((product, index) => {
      // Sem avaliação real, não reivindicar elegibilidade de Product rich result
      // (Google exige offers, review ou aggregateRating — sem nenhum dos três,
      // um @type: Product vira erro no Search Console). Item simples até haver dado real.
      if (!product.rating) {
        return {
          '@type': 'ListItem',
          position: index + 1,
          name: product.title,
          image: `${SITE_URL}${product.image}`,
        };
      }

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          image: `${SITE_URL}${product.image}`,
          ...(product.price !== undefined
            ? {
                offers: {
                  '@type': 'Offer',
                  price: product.price,
                  priceCurrency: 'BRL',
                  url: product.affiliateUrl,
                  availability: 'https://schema.org/InStock',
                },
              }
            : {}),
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating,
            ...(product.reviewCount !== undefined ? { reviewCount: product.reviewCount } : {}),
          },
        },
      };
    }),
  };
}

export function generateFAQSchema(faq: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@type': 'Organization',
    name: 'My Cozy Home',
    url: SITE_URL,
    description:
      'Guias e comparativos independentes de produtos de decoração, organização, cozinha e cama, mesa e banho.',
  };
}

export function generateWebSiteSchema() {
  return {
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'My Cozy Home',
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildGraph(...nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
