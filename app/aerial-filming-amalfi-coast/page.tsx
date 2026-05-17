import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmalfiVideoGallery from "./AmalfiVideoGallery";

export const metadata: Metadata = {
  title:
    "Aerial Filming Amalfi Coast | Drone Cinematography Italy | Italy Aerials",
  description:
    "Professional aerial drone filming on the Amalfi Coast, Italy. Featured in Sony Pictures' Equalizer 3. ENAC licensed pilots for Atrani, Positano, Ravello and the full coastline.",
  alternates: { canonical: "/aerial-filming-amalfi-coast" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Aerial Filming Amalfi Coast",
  provider: {
    "@type": "LocalBusiness",
    name: "Italy Aerials",
    url: "https://italyaerials.com",
    email: "fly@italyaerials.com",
    areaServed: "Amalfi Coast, Italy",
  },
  description:
    "Professional aerial drone filming and photography on the Amalfi Coast Italy. Featured in Sony Pictures Equalizer 3. ENAC licensed pilots.",
  url: "https://italyaerials.com/aerial-filming-amalfi-coast",
};

const cormorant = { fontFamily: "var(--font-cormorant)" };

const USE_CASES = [
  {
    title: "Cinema & Commercial Production",
    description:
      "The Amalfi Coast is a sought-after location for international productions. We provide the aerial unit with full permit management and local coordination.",
  },
  {
    title: "Luxury Travel & Hospitality",
    description:
      "Hotels, resorts and travel brands use our aerial footage to showcase the coastline's extraordinary landscape to international audiences.",
  },
  {
    title: "Fashion & Lifestyle Campaigns",
    description:
      "The dramatic scenery and Mediterranean light make the Amalfi Coast a natural backdrop for premium fashion and lifestyle campaigns.",
  },
];

const LOCATIONS = [
  "Atrani",
  "Positano",
  "Amalfi",
  "Ravello",
  "Praiano",
  "Cetara",
  "Vietri sul Mare",
  "Salerno",
];

export default function AerialFilmingAmalfiCoastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section
          className="relative overflow-hidden pb-20 pt-40"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #0a0e1a 0%, #0d1f35 100%)",
          }}
        >
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="text-xs text-white/30">
              <Link href="/" className="hover:text-white/60">
                Italy Aerials
              </Link>
              <span className="mx-2">/</span>
              <span>Aerial Filming Amalfi Coast</span>
            </nav>
            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
              Amalfi Coast · Campania, Italy
            </p>
            <h1
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.02] text-[#e8f4ff] sm:text-[64px]"
              style={cormorant}
            >
              Aerial Filming on the Amalfi Coast
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
              One of Italy&apos;s most breathtaking and technically demanding
              aerial environments. ENAC licensed drone operators with proven
              experience on the Amalfi Coast — including aerial footage
              featured in Sony Pictures&apos; Equalizer 3.
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
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,158,255,0.6)] bg-[rgba(74,158,255,0.08)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#4a9eff]">
                <span>Featured in</span>
                <span aria-hidden className="text-white/30">·</span>
                <span>Equalizer 3</span>
                <span aria-hidden className="text-white/30">·</span>
                <span className="text-white/70">Sony Pictures 2023</span>
              </span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Aerial filming on the Amalfi Coast: what makes it different
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/60">
              <p>
                The Amalfi Coast is a UNESCO World Heritage Site — and one of
                Italy&apos;s most visually spectacular and operationally
                complex aerial environments. Dramatic cliff faces, narrow
                coastal roads carved into the rock, dense village architecture
                stacked on impossible inclines and constant maritime traffic
                below create logistical challenges that very few stretches of
                Italian coastline can match. Every shot here has to account
                for terrain, wind, light and the people moving through a place
                that was never designed to be flown over.
              </p>
              <p>
                Airspace coordination on the coast involves both the Naples
                and Salerno aviation authorities, with controlled corridors
                running along the coastline and varying restrictions depending
                on season and traffic. The UNESCO designation adds a second
                layer of process: cultural heritage coordination with local
                municipalities and the Soprintendenza, which protects the
                visual integrity of the historic villages and the protected
                landscape itself. Wind conditions along the coast — the
                interplay of thermals rising from the cliffs and gusts off the
                Tyrrhenian Sea — demand pilots who know this specific terrain,
                not generalists.
              </p>
              <p>
                We have operated on the Amalfi Coast for international
                productions including cinema-level work for Sony Pictures. Our
                footage of Atrani — the smallest town on the Amalfi Coast —
                was featured in the special features of Equalizer 3&apos;s DVD
                release under the chapter &quot;Postcards from Amalfi&quot;.
                That is the standard we bring to every brief on this
                coastline: footage that can hold its own in international
                cinema distribution.
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
              As seen in Equalizer 3 — Sony Pictures
            </h2>
            <div className="mt-10 rounded-2xl border border-[rgba(74,158,255,0.3)] p-8">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/thumbnails/equalizer3-dvd.jpg"
                  alt="Equalizer 3 DVD cover — Sony Pictures, 2023"
                  className="w-32 shrink-0 rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
                    Sony Pictures · 2023
                  </span>
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-white sm:text-[36px]"
                    style={cormorant}
                  >
                    Equalizer 3
                  </h3>
                  <p className="text-base leading-relaxed text-white/60">
                    Our aerial drone footage of Atrani on the Amalfi Coast was
                    selected for Sony Pictures&apos; Equalizer 3, starring
                    Denzel Washington. The footage appears in the special DVD
                    features chapter &quot;Postcards from Amalfi&quot; — a
                    testament to the cinematic quality of our aerial work on
                    this extraordinary stretch of coastline.
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    <a
                      href="https://www.youtube.com/watch?v=spxgdYrtqUI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#4a9eff] transition-colors hover:text-[#7ab8ff]"
                    >
                      Watch: Postcards from Amalfi →
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=tFzhXyG9Mp0&t=1453s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#4a9eff] transition-colors hover:text-[#7ab8ff]"
                    >
                      Watch: Full making of →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AmalfiVideoGallery />

        <section className="py-20">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              What we film on the Amalfi Coast
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
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
              Locations we cover on the Amalfi Coast
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {LOCATIONS.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-[rgba(74,158,255,0.3)] px-4 py-2 text-sm text-[#4a9eff]"
                >
                  {location}
                </span>
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
              Drone permits on the Amalfi Coast
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/60">
              <p>
                The Amalfi Coast&apos;s UNESCO designation adds a layer of
                process on top of the standard ENAC and ENAV requirements.
                Every commune along the coast — Atrani, Positano, Amalfi,
                Ravello, Praiano and the others — has its own filming office,
                its own administrative timeline and its own expectations
                around how aerial work integrates with local life. Maritime
                airspace coordination, particularly during the high season
                when ferries and private vessels are constant, adds another
                operational variable that has to be planned, not improvised.
              </p>
              <p>
                In practice, we recommend a minimum of 3 to 4 weeks of advance
                notice for any production on the Amalfi Coast. Iconic
                viewpoints, peak-season dates and any shoot involving
                controlled airspace push that window further. Our pilots
                handle all coordination directly — ENAC authorization, ENAV
                clearance, communal filming permits and Soprintendenza
                signoff where the location requires it — so your production
                team sees a single point of contact instead of an
                administrative maze.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-32 pt-16">
          <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[48px] leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Planning an aerial shoot on the Amalfi Coast?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Send us your brief — location, dates and deliverables.
              We&apos;ll respond within 24 hours with a feasibility check and
              quote.
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
