import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a1828] py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl text-[var(--color-text-primary)]">
            Italy Aerials
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
            Aerial cinematography across Italy for international productions,
            advertising agencies and institutional clients. ENAC certified
            operations.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-primary)]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <Link href="/services" className="hover:text-[var(--color-accent)]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-[var(--color-accent)]">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--color-accent)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-[var(--color-accent)]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-primary)]">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>
              <a
                href="mailto:fly@italyaerials.com"
                className="hover:text-[var(--color-accent)]"
              >
                fly@italyaerials.com
              </a>
            </li>
            <li>Rome — Operating across Italy</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-start justify-between gap-2 border-t border-white/5 px-6 pt-6 text-xs text-[var(--color-text-muted)] lg:flex-row lg:items-center lg:px-10">
        <p>© {new Date().getFullYear()} Italy Aerials. All rights reserved.</p>
        <p>Part of the italylocations.com ecosystem.</p>
      </div>
    </footer>
  );
}
