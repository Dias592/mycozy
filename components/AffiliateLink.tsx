type AffiliateLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

// Centraliza toda saída de link de afiliado — único lugar que aplica rel/target.
export default function AffiliateLink({ href, children, className, ariaLabel }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
