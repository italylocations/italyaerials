"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Item = { q: string; a: string };
type Section = { heading: string; items: Item[] };

const SECTIONS: Section[] = [
  {
    heading: "Who We Are",
    items: [
      {
        q: "Who is Italy Aerials?",
        a: "We are a small but well-structured pool of creative professionals with years of experience in photo and video production. We work with a network of selected Italian freelance pilots and specialists who share our passion for cinematography and visual storytelling. We are not a large agency — we prefer to keep things human, direct and tailored to each project. Based in Rome, we operate across all of Italy.",
      },
      {
        q: "Why do you work in English?",
        a: "Because we love working with international productions. Italy is one of the most sought-after destinations for commercial campaigns, fashion shoots and brand films — and we want to be the natural bridge between international clients and the Italian territory. We are part of a wider ecosystem that includes italylocations.com (location scouting), italycreatives.com and nreal.it, all oriented toward supporting international productions in Italy.",
      },
      {
        q: "Do you handle cinema productions?",
        a: "While our pilots are technically prepared for cinema-level work, our core business is commercial productions — fashion brands, luxury campaigns, advertising and branded content that want an aerial perspective of Italy. We are not a film production company, but we integrate seamlessly into any production workflow.",
      },
    ],
  },
  {
    heading: "Operations & Coverage",
    items: [
      {
        q: "Where do you operate?",
        a: "We are based in Rome but operate across all of Italy. We have collaborators in multiple regions, so there is no location too remote. Travel costs are calculated at €0.40 per kilometer from the nearest available pilot.",
      },
      {
        q: "Can you work with our existing crew?",
        a: "Absolutely. Our pilots are experienced collaborators who adapt with pleasure to the needs of directors and producers. They are used to working within larger productions and follow the creative direction of the client at all times.",
      },
      {
        q: "Can you provide multiple drone units for large productions?",
        a: "Yes. Thanks to our network of freelance pilots across Italy, we can coordinate multiple simultaneous units for larger productions. Each pilot operates independently with their own equipment, insurance and ENAC certification.",
      },
    ],
  },
  {
    heading: "Equipment & Capabilities",
    items: [
      {
        q: "What drones do you use?",
        a: "Our fleet covers every production need. For commercial shoots we primarily use DJI Mavic series drones — reliable, compact and delivering exceptional 4K+ quality at accessible costs. For more demanding projects we deploy DJI Inspire systems requiring two operators. For special requests or safety-sensitive environments we also have sub-250g mini drones that fall outside standard ENAC registration requirements.",
      },
      {
        q: "Do you offer FPV drone filming?",
        a: "Yes — FPV is part of our offering, but we treat it with the respect it deserves. FPV is not something you can improvise. A single mistake can cause serious damage. Our FPV pilots are dedicated freelance specialists who do this exclusively, with passion, technical precision and years of experience. We offer everything from small FPV rigs with action cameras to larger cinema FPV drones capable of carrying a Blackmagic or other cinema cameras. FPV productions typically require at least two operators and backup equipment, which is reflected in the pricing.",
      },
      {
        q: "What resolution and formats do you deliver?",
        a: "All our drones shoot at minimum 4K resolution. Depending on the platform, we can deliver up to 6K or 8K RAW/ProRes footage for maximum post-production flexibility. We adapt to the delivery specifications of your production.",
      },
    ],
  },
  {
    heading: "Permits & Legal",
    items: [
      {
        q: "Are your pilots ENAC licensed and insured?",
        a: "Yes — every pilot in our network holds a valid ENAC license and commercial-use insurance. Our minimum insurance requirement is third-party liability (RC) with a coverage of at least €1,300,000. This is non-negotiable for every project we take on.",
      },
      {
        q: "Can you film in restricted areas, historic city centers and sensitive locations?",
        a: "Yes. We have pilots specifically authorized to operate in restricted zones, including Italian historic city centers and other controlled airspace. These authorizations are pilot-specific and managed directly by each operator.",
      },
      {
        q: "Who handles the permits?",
        a: "Permits are always the responsibility of the pilot assigned to your project. When you commission a shoot, the pilot activates the permit request process directly with ENAC, ENAV and the relevant authorities. We do not manage permits for external pilots or third-party operators — the responsibility always rests with the licensed pilot on the job.",
      },
      {
        q: "How much advance notice do you need for permits?",
        a: "Italian regulations require permit applications at least 35 days in advance for restricted or complex operations. In practice, for standard locations we can often secure authorization with 15 days notice. For sensitive or restricted sites — historic centers, airports, government buildings — we always recommend planning at least 4-6 weeks ahead.",
      },
    ],
  },
  {
    heading: "Pricing & Booking",
    items: [
      {
        q: "How much does an aerial shoot cost?",
        a: "Our day rates start from €800 for a standard aerial shoot with a DJI Mavic-class drone and one operator. Pricing increases based on the complexity of the project: FPV productions require at least two operators and backup equipment; Inspire-class cinema drone setups involve larger crews and more complex logistics. We always provide a detailed, transparent quote based on your specific brief.",
      },
      {
        q: "Do you work with different budget levels?",
        a: "Yes. We believe great aerial imagery should be accessible at different production scales. A DJI Mavic operator delivers outstanding quality at contained costs — perfect for smaller campaigns and brands. As the project scales up in complexity, so does our offering. We always try to find the right solution for your budget without compromising on quality or safety.",
      },
      {
        q: "What information do you need to give us a quote?",
        a: "The more detail you provide, the more accurate our quote will be. Ideally: shooting location(s), approximate dates, type of content needed (photography, video or both), any specific technical requirements (FPV, cinema camera, RAW delivery), and your budget range. Send us a brief via the contact form and we will get back to you within 24 hours with a permit feasibility check and a preliminary quote.",
      },
    ],
  },
];

const cormorant = { fontFamily: "var(--font-cormorant)" };

export default function FaqClient() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="pb-20 pt-40">
          <div className="mx-auto w-full max-w-3xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4a9eff]">
              FAQ
            </p>
            <h1
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.02] text-[#e8f4ff] sm:text-[64px]"
              style={cormorant}
            >
              Everything you need to know.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
              Common questions from producers, agencies and brands shooting
              aerial across Italy.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-3xl px-6 lg:px-10">
            {SECTIONS.map((section) => (
              <div key={section.heading} className="mt-14 first:mt-0">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#4a9eff]">
                  {section.heading}
                </p>
                <div>
                  {section.items.map((item) => {
                    const key = `${section.heading}__${item.q}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className="border-b border-white/10"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-6 py-5 text-left"
                        >
                          <span className="text-base font-medium text-white">
                            {item.q}
                          </span>
                          <ChevronDown
                            size={20}
                            strokeWidth={1.5}
                            className={`shrink-0 text-[#4a9eff] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-[500px]" : "max-h-0"
                          }`}
                        >
                          <p className="pb-6 pr-10 text-[15px] leading-relaxed text-white/60">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-32 pt-8">
          <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[40px] leading-tight text-[#e8f4ff] sm:text-[48px]"
              style={cormorant}
            >
              Still have questions?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Send us a brief and we will get back within 24 hours with a
              permit feasibility check and a quote.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#4a9eff] px-8 py-4 text-sm font-medium text-[#0d1f35] transition-all hover:bg-[#7ab8ff]"
              >
                Send us a brief
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
