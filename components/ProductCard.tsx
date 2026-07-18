import Image from 'next/image';
import type { Product } from '@/lib/types';
import { PENDING_IMAGE } from '@/lib/types';
import AffiliateLink from './AffiliateLink';

type ProductCardProps = {
  product: Product;
  position?: number;
  highlight?: string;
};

export default function ProductCard({ product, position, highlight }: ProductCardProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/Product"
      className="overflow-hidden rounded-sm border border-line bg-linen"
    >
      {(position !== undefined || highlight) && (
        <div className="flex items-start gap-3.5 bg-moss-dark px-5 py-4 text-linen">
          {position !== undefined && (
            <span
              aria-hidden="true"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-linen/15 font-serif text-sm font-semibold"
            >
              {String(position).padStart(2, '0')}
            </span>
          )}
          <div>
            {highlight && <div className="mb-1 text-xs text-[#C9C2AE]">{highlight}</div>}
            <h3 itemProp="name" className="font-serif text-lg leading-snug text-linen">
              {product.title}
            </h3>
          </div>
        </div>
      )}

      {product.image === PENDING_IMAGE ? (
        <div className="flex min-h-[200px] items-center justify-center border-b border-line bg-white p-7">
          <div
            className="flex aspect-square w-full max-w-[220px] items-center justify-center p-3 text-center text-xs text-sand"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #EDE7DC, #EDE7DC 10px, #E3DBC9 10px, #E3DBC9 20px)',
            }}
          >
            Foto do anúncio pendente
          </div>
        </div>
      ) : (
        <AffiliateLink
          href={product.affiliateUrl}
          ariaLabel={`Ver oferta de ${product.title} no Mercado Livre`}
          className="group flex min-h-[200px] cursor-pointer items-center justify-center border-b border-line bg-white p-7"
        >
          <div className="relative h-[220px] w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain transition-transform duration-200 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, 480px"
            />
          </div>
        </AffiliateLink>
      )}

      {product.rating !== undefined && (
        <div
          itemProp="aggregateRating"
          itemScope
          itemType="https://schema.org/AggregateRating"
          className="border-b border-line px-5 py-4"
        >
          <meta itemProp="ratingValue" content={String(product.rating)} />
          {product.reviewCount !== undefined && (
            <meta itemProp="reviewCount" content={String(product.reviewCount)} />
          )}
          <div className="flex items-center gap-2 text-sm">
            <span aria-hidden="true" className="text-sienna">
              ★
            </span>
            <span className="font-semibold text-ink">{product.rating.toFixed(1)}</span>
            <span className="text-sand">avaliação no Mercado Livre</span>
          </div>

          {product.depoimentos && product.depoimentos.length > 0 && (
            <div className="mt-3 space-y-3">
              {product.depoimentos.map((depoimento) => (
                <blockquote key={depoimento} className="border-l-2 border-line pl-3 text-sm italic text-sand">
                  “{depoimento}”
                  <cite className="mt-1 block text-xs not-italic text-sand">
                    — avaliação de comprador no Mercado Livre
                  </cite>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
        <div>
          {product.price !== undefined ? (
            <>
              <div className="font-serif text-xl font-semibold text-ink">
                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </div>
              <div className="mt-0.5 text-[11px] text-sand">*Preço pode variar</div>
            </>
          ) : (
            <div className="text-sm text-sand">Confira o preço atual no anúncio</div>
          )}
        </div>

        <AffiliateLink
          href={product.affiliateUrl}
          ariaLabel={`Ver oferta de ${product.title} no Mercado Livre`}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-sm bg-moss px-5 py-3 text-sm font-medium text-linen"
        >
          Ver no Mercado Livre →
        </AffiliateLink>
      </div>
    </div>
  );
}
