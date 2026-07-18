import type { Post, Product } from '@/lib/types';
import ProductCard from './ProductCard';
import AffiliateDisclosure from './AffiliateDisclosure';

type SatellitePostProps = {
  post: Post;
  products: Map<string, Product>;
};

export default function SatellitePost({ post, products }: SatellitePostProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <header>
        {post.productIds.length > 0 && <AffiliateDisclosure />}
        <h1 className="mt-2 font-serif text-3xl text-ink">{post.title}</h1>
        <p className="mt-2 text-sm text-sand">
          Publicado em {post.date}
          {post.updatedDate ? ` · Atualizado em ${post.updatedDate}` : ''}
        </p>
      </header>

      <p className="mt-6 text-lg text-sand">{post.excerpt}</p>

      {post.sections?.map((section) => (
        <section key={section.h2} className="mt-8">
          <h2 className="font-serif text-2xl text-ink">{section.h2}</h2>
          {section.content && <p className="mt-3 text-sand">{section.content}</p>}

          {section.productIds && section.productIds.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.productIds
                .map((id) => products.get(id))
                .filter((product): product is Product => Boolean(product))
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          )}
        </section>
      ))}

      {post.faq.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl text-ink">Perguntas frequentes</h2>
          <div className="mt-4 space-y-4">
            {post.faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-serif text-lg text-ink">{item.question}</h3>
                <p className="mt-1 text-sand">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
