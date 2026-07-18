import type { FAQ, Product } from './types';
import { SITE_URL } from './site-config';

export function generateItemListSchema(products: Product[], listName: string) {
  return {
    '@type': 'ItemList',
    name: listName,
    itemListElement: products.map((product, index) => ({
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
        ...(product.rating
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: product.rating,
                ...(product.reviewCount !== undefined ? { reviewCount: product.reviewCount } : {}),
              },
            }
          : {}),
      },
    })),
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
