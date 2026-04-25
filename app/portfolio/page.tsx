import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Portfolio — Aerial Films & Photography Across Italy",
  description:
    "Selected aerial productions: Villa Medici Rome, Le Pupille Tuscany, hospitality and brand films across Italy.",
  alternates: { canonical: "/portfolio" },
};

const REELS = [
  {
    title: "Showreel 2025",
    description:
      "A two-minute cross-section of recent commissions — institutional, hospitality and brand work.",
  },
  {
    title: "Villa Medici — Académie de France",
    description:
      "Aerial study of the gardens and façade for the Académie de France in Rome.",
  },
  {
    title: "Le Pupille — Maremma",
    description:
      "Cinematic vineyard portrait shot across one harvest cycle in southern Tuscany.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0d1f35] pt-40 pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Portfolio
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[var(--color-text-primary)] sm:text-6xl">
              Selected productions
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              A small, curated set. Full case studies and unreleased reels are
              available on request for qualified producers and agencies.
            </p>
          </div>
        </section>
        <section className="bg-[#0d1f35] pb-32">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-10">
            {REELS.map((reel) => (
              <article
                key={reel.title}
                className="overflow-hidden rounded-2xl border border-white/5 bg-[#0a1828]"
              >
                <div className="flex aspect-video items-center justify-center bg-[#10243d] text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
                  Vimeo embed
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl text-[var(--color-text-primary)]">
                    {reel.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {reel.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
