import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | Italy Aerials",
  description:
    "Italy Aerials is a professional aerial cinematography service operating across Italy. ENAC licensed drone operators with a passion for photography and filmmaking.",
  alternates: { canonical: "/about" },
};

const STATS = [
  { number: "2020", label: "Operating since" },
  { number: "50+", label: "Productions completed" },
  { number: "All Italy", label: "Coverage" },
];

const APPROACH_PARAGRAPHS = [
  "Our team is made of people who were photographers and filmmakers before they were drone pilots. We understand framing, light, movement — and we understand what a director needs.",
  "Whether you need a single operator for a commercial shoot or a full aerial unit for a feature production, we scale to your project. We coordinate with your crew, adapt to your schedule, and deliver footage that integrates seamlessly with your production.",
  "Every project comes with full permit management — ENAC authorization, ENAV coordination, Prefecture permits for restricted zones and historic sites. You focus on your creative vision. We handle the airspace.",
];

const COVERAGE_PILLS = ["Rome & Lazio", "Tuscany", "All Regions"];

const CLIENTS = [
  { name: "Villa Medici", detail: "Académie de France · Rome" },
  { name: "Fattoria Le Pupille", detail: "Maremma, Tuscany" },
  { name: "Sony Pictures", detail: "Equalizer 3 · Amalfi Coast" },
];

const cormorant = {
  fontFamily: "var(--font-cormorant)",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="pb-24 pt-40">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
              Who We Are
            </p>
            <h1
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.02] text-[#e8f4ff] sm:text-[64px]"
              style={cormorant}
            >
              Not just drone operators.
            </h1>
            <p
              className="mt-8 font-[family-name:var(--font-cormorant)] text-2xl italic leading-snug text-white/70 sm:text-[28px]"
              style={cormorant}
            >
              We are cinematographers who happen to fly drones.
            </p>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/60">
              Italy Aerials was born from a genuine passion for photography
              and filmmaking. Every flight is approached with the same eye for
              composition, light and storytelling that defines great cinema.
              We don&apos;t just cover locations — we frame them.
            </p>
          </div>

          <div className="relative w-full h-[500px] mt-16 mb-16 rounded-2xl overflow-hidden">
            <img
              src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/thumbnails/cabanes-villa-medici.jpg"
              alt="Aerial view of Festival Cabanes installation at Villa Medici, Rome — Italy Aerials"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="text-xs tracking-[0.2em] text-white/50 uppercase">Festival Cabanes · Villa Medici, Rome</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <p
                    className="font-[family-name:var(--font-cormorant)] text-[48px] leading-none text-[#e8f4ff]"
                    style={cormorant}
                  >
                    {stat.number}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <h2
                className="font-[family-name:var(--font-cormorant)] text-[36px] leading-tight text-[#e8f4ff]"
                style={cormorant}
              >
                A cinematographer&apos;s eye, from above.
              </h2>
              <div className="flex flex-col gap-6">
                {APPROACH_PARAGRAPHS.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-white/60"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[36px] leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Based in Rome. Operating across Italy.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60">
              From the Dolomites to Sicily, from the Amalfi Coast to Tuscany —
              we cover every region of Italy for aerial photography and
              cinematography.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {COVERAGE_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[rgba(74,158,255,0.3)] px-6 py-2 text-sm text-[#4a9eff]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-10">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
              Trusted By
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <p
                    className="font-[family-name:var(--font-cormorant)] text-[20px] leading-tight text-white"
                    style={cormorant}
                  >
                    {client.name}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
                    {client.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center my-16">
          <div className="relative max-w-[45%] rounded-2xl overflow-hidden"
               style={{ border: '1px solid rgba(201,168,76,0.4)', padding: '6px', background: 'rgba(201,168,76,0.05)' }}>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/thumbnails/villa-medici-hero.jpg"
                alt="Aerial view of Villa Medici at sunset with Rome skyline — Italy Aerials"
                className="w-full h-auto block"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-6 py-3"
                 style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
              <p className="text-xs tracking-[0.2em] text-white/50 uppercase">Villa Medici · Rome, Italy</p>
            </div>
          </div>
        </div>

        <section className="pb-32 pt-16">
          <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[48px] leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Ready to fly?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Tell us about your project. We&apos;ll get back within 24 hours
              with a permit feasibility check and a quote.
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
