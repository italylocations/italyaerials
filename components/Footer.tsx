import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a1828] py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link
            href="/"
            aria-label="Italy Aerials — home"
            className="inline-flex items-center gap-3 text-[var(--color-text-primary)]"
          >
            <LogoIcon className="h-8 w-8 shrink-0" />
            <span className="hidden font-[family-name:var(--font-cormorant)] text-xl tracking-[0.18em] sm:inline">
              ITALY AERIALS
            </span>
          </Link>
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
      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-3 border-t border-white/5 px-6 pt-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/30">
          <Link
            href="/privacy-policy"
            className="hover:text-[#4a9eff]"
          >
            Privacy Policy
          </Link>
          <span aria-hidden>·</span>
          <Link
            href="/cookie-policy"
            className="hover:text-[#4a9eff]"
          >
            Cookie Policy
          </Link>
        </div>
        <p className="text-xs text-white/30">
          Part of the italylocations.com ecosystem.
        </p>
      </div>
      <div className="mx-auto mt-3 w-full max-w-7xl px-6 lg:px-10">
        <p className="text-xs text-white/30">
          © 2026 Italy Aerials · VAT IT14296561005 · Rome, Italy ·{" "}
          <a
            href="mailto:fly@italyaerials.com"
            className="hover:text-[#4a9eff]"
          >
            fly@italyaerials.com
          </a>
        </p>
      </div>
    </footer>
  );
}
