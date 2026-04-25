import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Aerial Services — Drone Filming & Photography in Italy",
  description:
    "Aerial photography, cinematic drone video, real estate and event coverage across Italy. ENAC certified for restricted airspace.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    title: "Aerial Photography",
    summary:
      "High-resolution stills for editorial, hospitality and advertising.",
    body: "Calibrated colour workflow, RAW capture and print-ready delivery. Suitable for magazine spreads, hotel collateral, real-estate marketing and advertising campaigns where image quality is the deciding factor.",
  },
  {
    title: "Aerial Video",
    summary:
      "6K and 8K cinematic footage for broadcast, brand films and commercials.",
    body: "Cinema-grade aerial cameras paired with controlled, repeatable camera moves. Pre-visualised shotlists, on-set monitoring and Log delivery so footage drops cleanly into your edit and grade.",
  },
  {
    title: "Cinematic Production",
    summary:
      "End-to-end aerial direction — concept to graded master.",
    body: "We handle storyboards, location scouting, ENAC permitting and on-set execution. Ideal for productions that want a single accountable partner for the aerial unit.",
  },
  {
    title: "Real Estate & Hospitality",
    summary:
      "Architectural reveals for villas, vineyards, resorts and historic estates.",
    body: "Sequences that show scale, context and the relationship between a property and its landscape. Distributed packages: hero film, social cutdowns, stills library.",
  },
  {
    title: "Events & Live Coverage",
    summary:
      "Discreet aerial coverage of weddings, festivals, fashion shows and institutional events.",
    body: "Compact, low-noise aerial setups for sensitive contexts. Same-day proxies available for time-critical PR and press releases.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0d1f35] pt-40 pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
              Services
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[var(--color-text-primary)] sm:text-6xl">
              Aerial production, end to end
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              From a single hero shot to a fully directed aerial unit. Every
              project is operated by ENAC-certified pilots cleared for
              restricted airspace across Italy.
            </p>
          </div>
        </section>
        <section className="bg-[#0d1f35] pb-32">
          <div className="mx-auto grid w-full max-w-7xl gap-px overflow-hidden rounded-2xl bg-white/5 px-0 sm:px-6 lg:grid-cols-2 lg:px-10">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="bg-[#0d1f35] p-10 transition-colors hover:bg-[#10243d]"
              >
                <h2 className="font-serif text-3xl text-[var(--color-text-primary)]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-widest text-[var(--color-accent)]">
                  {service.summary}
                </p>
                <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)]">
                  {service.body}
                </p>
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
