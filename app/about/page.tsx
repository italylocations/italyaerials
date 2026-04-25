import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About — Italy Aerials, ENAC Certified Drone Operators",
  description:
    "Italy Aerials is an ENAC-certified aerial cinematography service operating across Italy for international productions.",
  alternates: { canonical: "/about" },
};

const FACTS = [
  {
    label: "Certification",
    value: "ENAC-registered operator with critical-scenarios authorisation.",
  },
  {
    label: "Coverage",
    value: "Operating across all Italian regions, with a base in Rome.",
  },
  {
    label: "Equipment",
    value:
      "Cinema-grade aerial systems for 6K and 8K capture, plus compact rigs for sensitive interiors and historic sites.",
  },
  {
    label: "Insurance",
    value: "Full third-party liability cover that meets producer requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0d1f35] pt-40 pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
              About
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[var(--color-text-primary)] sm:text-6xl">
              An aerial unit built for premium productions
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              Italy Aerials is an aerial cinematography service operating
              across Italy for international advertising agencies, film
              productions and institutional clients. We handle the parts of
              aerial work that usually slow productions down — permits in
              restricted airspace, weather windows, on-set safety — so the
              creative team can focus on the shot.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              We are part of the same ecosystem as italylocations.com and
              italycreatives.com, which means productions arriving in Italy
              can source aerial, locations and crew through one trusted
              network.
            </p>
          </div>
        </section>
        <section className="bg-[#0a1828] py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:px-10">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="border-l border-[var(--color-accent)]/30 pl-6"
              >
                <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
                  {fact.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-text-primary)]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
