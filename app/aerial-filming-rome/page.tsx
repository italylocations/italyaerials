import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RomeVideoGallery from "./RomeVideoGallery";

export const metadata: Metadata = {
  title: "Aerial Filming in Rome | Drone Cinematography Service | Italy Aerials",
  description:
    "Professional aerial drone filming in Rome, Italy. ENAC licensed pilots authorized for historic center, restricted zones and iconic landmarks. Commercial productions, fashion and institutional clients.",
  alternates: { canonical: "/aerial-filming-rome" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aerial Filming Rome",
  provider: {
    "@type": "LocalBusiness",
    name: "Italy Aerials",
    url: "https://italyaerials.com",
    email: "fly@italyaerials.com",
    areaServed: "Rome, Italy",
  },
  description:
    "Professional aerial drone filming and photography in Rome Italy for commercial productions, fashion campaigns and institutional clients. ENAC licensed pilots authorized for restricted airspace.",
  areaServed: "Rome, Italy",
  url: "https://italyaerials.com/aerial-filming-rome",
};

const cormorant = { fontFamily: "var(--font-cormorant)" };

const USE_CASES = [
  {
    title: "Fashion & Luxury Campaigns",
    description:
      "Rome's architecture as backdrop for international brands. Aerial perspective over piazzas, rooftops and historic facades that defines the look of a Roman campaign.",
  },
  {
    title: "Institutional & Cultural",
    description:
      "Embassies, academies, cultural institutions — we understand the protocol, the access requirements and the discretion these productions demand.",
  },
  {
    title: "Commercial Production",
    description:
      "Advertising campaigns requiring Rome's iconic skyline and streets. Integrated with your production crew, on schedule, in compliance with municipal filming permits.",
  },
  {
    title: "Real Estate & Hospitality",
    description:
      "Historic palazzi, luxury hotels and exclusive properties. Aerial reveals that communicate scale, context and the relationship with the surrounding city.",
  },
];

const REFERENCES = [
  {
    title: "Villa Medici — Académie de France à Rome",
    description:
      "Repeated aerial coverage of Villa Medici on the Pincian Hill — one of Rome's most restricted and prestigious locations. Institutional events, garden documentation and cultural programming for the French Academy in Rome.",
  },
  {
    title: "Sony Pictures — Equalizer 3",
    description:
      "Aerial footage contribution to the Sony Pictures production filmed in Italy. Coastal and urban aerial sequences for international cinema distribution.",
  },
];

const FAQS = [
  {
    question: "Can you film the Colosseum or Pantheon from the air?",
    answer:
      "These locations fall within Rome's most restricted airspace. Aerial filming near archaeological sites requires coordination with the Soprintendenza dei Beni Culturali in addition to standard ENAC authorization. We have experience navigating these processes — contact us with your specific location and we will assess feasibility.",
  },
  {
    question: "How far in advance should we book for Rome?",
    answer:
      "For standard locations in Rome, 15 days is often sufficient. For the historic center or sites near government buildings, we recommend 4-6 weeks minimum.",
  },
  {
    question: "Do you cover the full Rome metropolitan area?",
    answer:
      "Yes — from the historic center to EUR, Ostia, the Castelli Romani and surrounding Lazio region.",
  },
];

export default function AerialFilmingRomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="relative flex min-h-[500px] items-end overflow-hidden pb-16 pt-40">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/hero.jpg"
            alt="Aerial view of Rome at night — Italy Aerials"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ zIndex: 0 }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(8,14,28,0.85) 0%, rgba(8,14,28,0.4) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent 70%, rgba(13,31,53,1) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 lg:px-10">
            <nav
              aria-label="Breadcrumb"
              className="text-xs text-white/30"
            >
              <Link href="/" className="hover:text-white/60">
                Italy Aerials
              </Link>
              <span className="mx-2">/</span>
              <span>Aerial Filming Rome</span>
            </nav>
            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
              Rome · Italy
            </p>
            <h1
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.02] text-[#e8f4ff] sm:text-[64px]"
              style={cormorant}
            >
              Aerial Filming in Rome
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
              Professional drone cinematography in one of the world&apos;s most
              filmed cities. ENAC licensed pilots authorized for Rome&apos;s
              historic center, restricted zones and iconic landmarks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#4a9eff] px-7 py-3 text-sm font-medium text-[#0d1f35] transition-all hover:bg-[#7ab8ff]"
              >
                Request a Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(74,158,255,0.45)] px-7 py-3 text-sm font-medium text-[#4a9eff] transition-all hover:border-[#4a9eff] hover:bg-[rgba(74,158,255,0.08)]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Aerial filming in Rome requires specialist operators
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/60">
              <p>
                Rome is one of the most regulated airspace environments in
                Italy. The historic center is classified as a restricted zone
                that requires specific ENAC authorization — and that
                authorization is not granted to every operator. The control
                zones around Ciampino and Fiumicino airports extend far over
                the metropolitan area, overlapping much of the city and
                imposing additional clearance requirements on any commercial
                drone operation.
              </p>
              <p>
                On top of the airspace layer, Rome is a UNESCO heritage city.
                Filming over or near monuments, archaeological sites and
                protected architecture requires coordination with the
                Soprintendenza dei Beni Culturali in addition to the standard
                ENAC and ENAV processes. Government buildings, embassies and
                diplomatic compounds carry their own no-fly perimeters and
                require institutional clearance handled case by case.
              </p>
              <p>
                Our pilots are specifically authorized for Rome historic center
                operations. We have filmed at Villa Medici (Académie de France
                à Rome), iconic landmarks and institutional venues across the
                city, working with international clients who expect both
                technical precision and procedural discipline. We are used to
                time-sensitive productions and to the protocol that diplomatic
                and institutional clients require — discretion, punctuality and
                a paper trail that holds up to scrutiny.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              What we film in Rome
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {USE_CASES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white"
                    style={cormorant}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Proven experience in Rome
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              {REFERENCES.map((ref) => (
                <div
                  key={ref.title}
                  className="border-l-2 border-[#4a9eff] py-2 pl-6"
                >
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white"
                    style={cormorant}
                  >
                    {ref.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    {ref.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RomeVideoGallery />

        <section className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Drone permits in Rome: what you need to know
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/60">
              <p>
                Rome is divided into multiple airspace zones, each with its
                own rules. Some areas can be flown after a standard ENAC
                notification; the historic center, on the other hand, requires
                specific ENAC authorization that not every commercial operator
                is cleared to obtain. Standard turnaround is 15 to 35 days
                depending on the sensitivity of the location and the airspace
                class involved.
              </p>
              <p>
                We handle all permit coordination directly. The pilot assigned
                to your shoot activates the authorization process with ENAC,
                ENAV and the relevant local authorities — Comune di Roma for
                municipal filming permits, Soprintendenza for protected sites,
                and case-by-case clearance for institutional perimeters.
                Insurance is a minimum of €1,300,000 third-party liability per
                pilot, which is the threshold required for our operations and
                aligns with what institutional clients in Rome typically
                request.
              </p>
              <p>
                Filming near government buildings, embassies and diplomatic
                residences requires additional clearance and longer lead
                times. If your project involves any of these contexts, share
                the location with us early — we will tell you immediately
                whether the shoot is feasible, what the realistic timeline
                looks like, and what documentation we will need from your
                side.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {FAQS.map((faq) => (
                <div key={faq.question}>
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-[#e8f4ff]"
                    style={cormorant}
                  >
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-32 pt-16">
          <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[48px] leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Planning an aerial shoot in Rome?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Send us your brief — location, dates and what you need.
              We&apos;ll respond within 24 hours with a permit feasibility
              assessment and quote.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#4a9eff] px-8 py-4 text-sm font-medium text-[#0d1f35] transition-all hover:bg-[#7ab8ff]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
