import Image from 'next/image';
import type { Product } from '@/lib/types';
import { PENDING_IMAGE } from '@/lib/types';
import AffiliateLink from './AffiliateLink';

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <caption className="sr-only">Comparativo dos produtos analisados</caption>
          <thead>
            <tr className="bg-moss-dark text-linen">
              <th scope="col" className="py-3 pl-4 pr-2 font-medium">
                #
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Produto
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Preço
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Avaliação
              </th>
              <th scope="col" className="py-3 pr-4 font-medium">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`border-b border-line last:border-0 ${index === 0 ? 'bg-linen' : 'bg-white'}`}
              >
                <td className="py-3 pl-4 pr-2 align-middle">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full font-serif text-xs font-semibold ${
                      index === 0 ? 'bg-moss text-linen' : 'bg-plaster text-ink'
                    }`}
                  >
                    {index + 1}
                  </span>
                </td>
                <td className="py-3 pr-4 align-middle">
                  <a href={`#produto-${product.id}`} className="flex items-center gap-3 hover:text-sienna">
                    {product.image !== PENDING_IMAGE && (
                      <span className="relative hidden h-10 w-10 flex-shrink-0 sm:block">
                        <Image src={product.image} alt="" fill className="rounded-sm object-contain" sizes="40px" />
                      </span>
                    )}
                    <span className="font-medium">
                      {product.title}
                      {index === 0 && (
                        <span className="ml-2 inline-block whitespace-nowrap rounded-sm bg-moss px-1.5 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-linen">
                          Melhor escolha
                        </span>
                      )}
                    </span>
                  </a>
                </td>
                <td className="py-3 pr-4 align-middle">
                  {product.price !== undefined
                    ? product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    : '—'}
                </td>
                <td className="py-3 pr-4 align-middle">
                  {product.rating ? `${product.rating.toFixed(1)} / 5` : '—'}
                </td>
                <td className="py-3 pr-4 align-middle">
                  <AffiliateLink href={product.affiliateUrl} className="font-semibold text-sienna underline">
                    Ver oferta
                  </AffiliateLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
