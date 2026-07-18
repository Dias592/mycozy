import type { Product } from '@/lib/types';
import AffiliateLink from './AffiliateLink';

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">Comparativo dos produtos analisados</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="py-2 pr-4">
              #
            </th>
            <th scope="col" className="py-2 pr-4">
              Produto
            </th>
            <th scope="col" className="py-2 pr-4">
              Preço
            </th>
            <th scope="col" className="py-2 pr-4">
              Avaliação
            </th>
            <th scope="col" className="py-2">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-b border-line">
              <td className="py-2 pr-4 font-semibold">{index + 1}</td>
              <td className="py-2 pr-4">{product.title}</td>
              <td className="py-2 pr-4">
                {product.price !== undefined
                  ? product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                  : '—'}
              </td>
              <td className="py-2 pr-4">
                {product.rating ? `${product.rating.toFixed(1)} / 5` : '—'}
              </td>
              <td className="py-2">
                <AffiliateLink href={product.affiliateUrl} className="font-semibold text-sienna underline">
                  Ver oferta
                </AffiliateLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
