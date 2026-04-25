import Link from "next/link";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0d1f35]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-[var(--color-text-primary)]"
        >
          Italy Aerials
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full border border-[var(--color-accent)]/40 px-5 py-2 text-sm font-medium text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-[#0d1f35] md:inline-block"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
