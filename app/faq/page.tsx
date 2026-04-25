import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "FAQ — Drone Permits, Restricted Airspace, Pricing",
  description:
    "Answers on ENAC permits, restricted airspace in Italy, weather windows, deliverable formats and aerial production pricing.",
  alternates: { canonical: "/faq" },
};

const FAQ = [
  {
    q: "Can you fly in restricted areas like central Rome or Florence?",
    a: "Yes. We hold ENAC authorisation for critical scenarios and routinely operate in restricted urban airspace. Permits typically require 15 to 30 working days of lead time depending on the area.",
  },
  {
    q: "How early should we book?",
    a: "For unrestricted locations, two to three weeks is comfortable. For restricted airspace and protected sites, plan four to six weeks ahead so permits, NOTAMs and on-site coordination are confirmed before the shoot date.",
  },
  {
    q: "What happens if the weather is wrong on the shoot day?",
    a: "We monitor wind, visibility and precipitation in the 72 hours leading up to the shoot. If conditions are unsafe or compromise image quality, we reschedule to a backup window agreed at booking — at no additional fee.",
  },
  {
    q: "Which delivery formats do you provide?",
    a: "Video: ProRes 422 HQ or H.265 in 4K, 6K or 8K, Rec.709 or Log. Photo: RAW (DNG) plus graded TIFF or JPEG. Custom delivery specs are available for broadcast and OTT pipelines.",
  },
  {
    q: "How is pricing structured?",
    a: "Half-day, full-day or multi-day rates that include pilot, camera operator, equipment and insurance. Permits, travel and post-production are quoted per project.",
  },
  {
    q: "Do you carry insurance?",
    a: "Yes. Full third-party liability cover that meets the requirements of major Italian and international productions. Certificates are provided on request.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0d1f35] pt-40 pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
              FAQ
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-[var(--color-text-primary)] sm:text-6xl">
              Production-ready answers
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)]">
              The questions producers, agencies and DOPs ask us most often
              before a shoot in Italy.
            </p>
          </div>
        </section>
        <section className="bg-[#0d1f35] pb-32">
          <div className="mx-auto w-full max-w-3xl divide-y divide-white/5 border-y border-white/5 px-6 lg:px-0">
            {FAQ.map((item) => (
              <div key={item.q} className="py-8">
                <h2 className="font-serif text-2xl text-[var(--color-text-primary)]">
                  {item.q}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-text-muted)]">
                  {item.a}
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
