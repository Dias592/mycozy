import Link from 'next/link';

type AuthorBlockProps = {
  name: string;
  bio: string;
  updatedDate: string;
};

export default function AuthorBlock({ name, bio, updatedDate }: AuthorBlockProps) {
  return (
    <div className="mt-12 flex items-start gap-4 border-t border-line pt-6">
      <div className="flex-1 text-sm text-sand">
        <p className="font-semibold text-ink">
          Escrito por{' '}
          <Link href="/sobre/" className="text-sienna underline">
            {name}
          </Link>
        </p>
        <p className="mt-1">{bio}</p>
        <p className="mt-2 text-xs text-sand">Atualizado em {updatedDate}</p>
      </div>
    </div>
  );
}
