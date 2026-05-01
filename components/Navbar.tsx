"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0d1f35]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Italy Aerials — home"
          className="flex items-center gap-3 text-[#e8f4ff]"
        >
          <LogoIcon className="h-8 w-8 shrink-0" />
          <span className="hidden font-[family-name:var(--font-cormorant)] text-xl tracking-[0.18em] sm:inline">
            ITALY AERIALS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/45 transition-colors hover:text-[#4a9eff]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-[#4a9eff]/40 px-5 py-2 text-sm font-medium text-[#4a9eff] transition-all hover:bg-[#4a9eff] hover:text-[#0d1f35] lg:inline-block"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#e8f4ff] transition-colors hover:text-[#4a9eff] lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 top-16 z-40 bg-[#0d1f35]/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-6 pb-24">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff] transition-colors hover:text-[#4a9eff]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-[#4a9eff] px-7 py-3 text-sm font-medium text-[#0d1f35] transition-colors hover:bg-[#7ab8ff]"
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
