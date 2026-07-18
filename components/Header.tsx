import Link from 'next/link';
import { CATEGORIA_LABELS } from '@/lib/seo-keywords';
import type { Categoria } from '@/lib/types';

const CATEGORIAS = Object.keys(CATEGORIA_LABELS) as Categoria[];

export default function Header() {
  return (
    <header className="border-b border-line py-7">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8">
        <Link href="/" className="font-serif text-xl font-semibold text-moss-dark">
          my cozy <span className="text-sienna">home</span>
        </Link>

        <nav className="flex gap-8 text-sm text-ink">
          {CATEGORIAS.map((categoria) => (
            <Link key={categoria} href={`/categorias/${categoria}/`}>
              {CATEGORIA_LABELS[categoria]}
            </Link>
          ))}
          <Link href="/sobre/">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
