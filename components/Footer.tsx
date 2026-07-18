import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 py-10 text-sm text-sand">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="flex items-start justify-between border-b border-line pb-6">
          <span className="font-serif text-lg font-semibold text-moss-dark">
            my cozy <span className="text-sienna">home</span>
          </span>

          <nav className="flex gap-6">
            <Link href="/blog/">Blog</Link>
            <Link href="/sobre/">Sobre</Link>
            <Link href="/contato/">Contato</Link>
          </nav>
        </div>

        <p className="mt-5 max-w-xl text-xs leading-relaxed text-sand">
          Este site pode receber comissão por compras realizadas através de alguns
          links, sem custo adicional para você.
        </p>

        <p className="mt-3 text-sand">
          © {new Date().getFullYear()} My Cozy Home. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
