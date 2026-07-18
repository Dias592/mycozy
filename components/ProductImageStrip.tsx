import Image from 'next/image';
import type { Product } from '@/lib/types';
import { PENDING_IMAGE } from '@/lib/types';
import AffiliateLink from './AffiliateLink';

function ImageOrPlaceholder({
  product,
  sizes,
}: {
  product: Product;
  sizes: string;
}) {
  if (product.image === PENDING_IMAGE) {
    return (
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #EDE7DC, #EDE7DC 10px, #E3DBC9 10px, #E3DBC9 20px)',
        }}
      />
    );
  }

  return (
    <AffiliateLink
      href={product.affiliateUrl}
      ariaLabel={`Ver oferta de ${product.title} no Mercado Livre`}
      className="group relative block h-full w-full cursor-pointer"
    >
      <Image
        src={product.image}
        alt={product.title}
        fill
        priority
        className="object-contain transition-transform duration-200 group-hover:scale-[1.04]"
        sizes={sizes}
      />
    </AffiliateLink>
  );
}

// Imagem em destaque no início do artigo — dá contexto visual imediato antes
// até do parágrafo de resposta direta. Com um único produto (a maioria das
// páginas), mostra uma foto grande em destaque; com vários produtos (páginas
// de ranking), mostra uma tira comparativa.
export default function ProductImageStrip({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  if (products.length === 1) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center border border-line bg-white p-8">
        <ImageOrPlaceholder product={products[0]} sizes="(max-width: 768px) 100vw, 700px" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 divide-x divide-line border border-line bg-white sm:grid-cols-4">
      {products.slice(0, 4).map((product) => (
        <div key={product.id} className="flex aspect-square items-center justify-center p-4">
          <ImageOrPlaceholder product={product} sizes="(max-width: 640px) 25vw, 180px" />
        </div>
      ))}
    </div>
  );
}
