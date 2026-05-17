import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Camera,
  Check,
  Shield,
  Star,
  Video,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Italy Aerials",
  description:
    "Professional aerial drone photography and video services across Italy. From DJI Mavic commercial shoots to FPV cinematography and cinema-grade drone productions. ENAC licensed.",
  alternates: { canonical: "/services" },
};

const cormorant = { fontFamily: "var(--font-cormorant)" };

const SERVICE_CARDS = [
  {
    icon: Camera,
    title: "Aerial Photography",
    description:
      "High-resolution stills for editorial, advertising and institutional clients. RAW and print-ready delivery.",
    price: "From €800/day",
  },
  {
    icon: Video,
    title: "Aerial Video",
    description:
      "Cinematic 4K to 8K footage with smooth controlled camera movements for commercials and brand films.",
    price: "From €800/day",
  },
  {
    icon: Zap,
    title: "FPV Cinematography",
    description:
      "High-speed creative drone shots for dynamic campaigns. Specialist pilots, backup equipment included.",
    price: "On request",
  },
  {
    icon: Building2,
    title: "Real Estate & Architecture",
    description:
      "Premium aerial reveals for villas, vineyards, resorts and architectural projects targeting international audiences.",
    price: "From €800/day",
  },
  {
    icon: Star,
    title: "Fashion & Luxury Campaigns",
    description:
      "Aerial perspective for high-end fashion and luxury brand campaigns shooting in Italy.",
    price: "On request",
  },
  {
    icon: Shield,
    title: "Fully Compliant Operations",
    description:
      "Every shoot comes with ENAC licensed pilots, commercial insurance min. €1.3M RC, and full permit management for your specific location.",
    price: "Always included",
  },
];

type DetailedService = {
  id: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
};

const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "aerial-photography",
    label: "01 — Aerial Photography",
    title: "Stills that stop the scroll.",
    body: "Our aerial photography service delivers high-resolution imagery for editorial, hospitality, institutional and advertising use. Every shot is composed with the same attention to light, framing and geometry that defines great photography — just from a perspective most photographers never reach. We shoot in RAW format for maximum post-production flexibility and deliver color-graded files ready for print or digital use. From intimate villa gardens to sprawling coastal landscapes, we find the angle that makes your location unforgettable.",
    bullets: [
      "RAW and JPEG delivery",
      "Color grading included",
      "4K to 8K resolution sensors",
      "Same-day preview available",
      "Print and digital ready",
    ],
  },
  {
    id: "aerial-video",
    label: "02 — Aerial Video",
    title: "Movement that tells your story.",
    body: "From smooth reveal shots over Tuscan vineyards to dynamic tracking sequences through Roman architecture, our aerial video service covers the full range of cinematic movement. We work with DJI Mavic and Inspire platforms delivering footage from 4K up to 8K in LOG profiles for color grading. Our operators understand production workflows and deliver footage that integrates seamlessly with your edit — correctly exposed, stabilized and framed for your cut.",
    bullets: [
      "4K minimum, up to 8K",
      "LOG/RAW profiles available",
      "Gimbal-stabilized footage",
      "Production-ready delivery",
      "ProRes and H.265 formats",
    ],
  },
  {
    id: "fpv-cinematography",
    label: "03 — FPV Cinematography",
    title: "Where speed meets precision.",
    body: "FPV drone filming is a discipline of its own. The ability to fly through tight spaces, chase subjects at high speed or execute complex one-take sequences requires years of dedicated practice — not improvisation. Our FPV pilots are specialist freelancers who do this exclusively, with passion and technical mastery. We offer FPV rigs from compact action camera setups to larger platforms capable of carrying a Blackmagic or other cinema cameras. Every FPV production includes backup drones and at least two operators — because precision at this level leaves no margin for error.",
    bullets: [
      "Dedicated FPV specialists only",
      "Action cam to cinema camera rigs",
      "Backup equipment always on set",
      "Minimum 2 operators per shoot",
      "Indoor and outdoor capable",
    ],
  },
  {
    id: "real-estate",
    label: "04 — Real Estate & Architecture",
    title: "The view that sells.",
    body: "Luxury properties, boutique hotels, historic estates and architectural landmarks deserve to be seen from above. Our real estate aerial service is tailored for properties targeting international buyers and guests — where the first impression happens online and the aerial view is what closes the deal. We work with hospitality groups, real estate agencies and architects across Italy, delivering imagery that communicates scale, context and desirability in a single frame.",
    bullets: [
      "Luxury residential and commercial",
      "Hospitality and resort photography",
      "Architectural documentation",
      "Twilight and golden hour shoots",
      "International licensing available",
    ],
  },
  {
    id: "fashion-luxury",
    label: "05 — Fashion & Luxury Campaigns",
    title: "Italy from above, for the world's best brands.",
    body: "Italy is one of the most sought-after backdrops for luxury and fashion campaigns — and an aerial perspective adds a dimension that ground-level photography simply cannot. We work with fashion houses, luxury brands and advertising agencies that come to Italy for location shoots and want to incorporate aerial footage into their campaigns. Our operators understand the aesthetic demands of the fashion world: precise timing, sensitivity to light, and the ability to complement — not compete with — the creative direction of the project.",
    bullets: [
      "Fashion and editorial experience",
      "Creative direction collaboration",
      "Restricted location permits",
      "Fast turnaround delivery",
      "International crew integration",
    ],
  },
  {
    id: "compliance",
    label: "06 — Fully Compliant Operations",
    title: "Every shoot. Fully legal. Fully covered.",
    body: "When you book a shoot with Italy Aerials, compliance is never your problem. Every pilot in our network holds a valid ENAC license and commercial-use insurance with a minimum third-party liability coverage of €1,300,000. Permit management is handled directly by the assigned pilot — who activates the authorization process with ENAC, ENAV and the relevant local authorities for your specific location. We have pilots authorized to operate in restricted zones including Italian historic city centers, airport proximity areas and other controlled airspace. Italian regulations require permit applications at least 35 days in advance, though in practice we often secure clearance within 15 days for standard locations. You focus on your creative vision. We handle everything in the air.",
    bullets: [
      "ENAC licensed pilots only",
      "Min. €1,300,000 RC insurance per pilot",
      "Historic center authorizations available",
      "Airport and restricted zone clearance",
      "Permits managed by the pilot directly",
      "15-day standard clearance turnaround",
    ],
  },
];

const EQUIPMENT = [
  {
    title: "DJI Mavic Series",
    description:
      "Our workhorse for commercial shoots. Compact, reliable, exceptional 4K+ quality at accessible day rates.",
  },
  {
    title: "DJI Inspire & Cinema",
    description:
      "For productions requiring maximum image quality. Two-operator setup, up to 8K RAW, cinema glass compatible.",
  },
  {
    title: "FPV & Sub-250g",
    description:
      "Specialist rigs for creative and sensitive environments. From action cam to Blackmagic. Mini drones for restricted zones.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="pb-24 pt-40">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
              What We Do
            </p>
            <h1
              className="mt-6 max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl leading-[1.02] text-[#e8f4ff] sm:text-[64px]"
              style={cormorant}
            >
              Aerial services for every production.
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
              From compact commercial shoots to complex cinematic productions —
              we have the right solution for your project and budget.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/50">
              <span>6 service areas</span>
              <span className="text-white/30">·</span>
              <span>All Italy coverage</span>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_CARDS.map(({ icon: Icon, title, description, price }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[rgba(74,158,255,0.3)]"
                >
                  <Icon
                    className="text-[#4a9eff]"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3
                    className="mt-6 font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white"
                    style={cormorant}
                  >
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {description}
                  </p>
                  <p className="mt-6 text-sm text-[#4a9eff]">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24 pt-8">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
            {DETAILED_SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={
                  index === 0
                    ? "scroll-mt-32 pb-20"
                    : "scroll-mt-32 border-t border-white/10 py-20"
                }
              >
                <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
                  {service.label}
                </p>
                <h2
                  className="mt-6 max-w-3xl font-[family-name:var(--font-cormorant)] text-4xl leading-[1.05] text-[#e8f4ff] sm:text-[40px]"
                  style={cormorant}
                >
                  {service.title}
                </h2>
                <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <p className="text-base leading-relaxed text-white/60">
                    {service.body}
                  </p>
                  <ul className="flex flex-col gap-4">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-base text-white/70"
                      >
                        <Check
                          className="mt-1 shrink-0 text-[#4a9eff]"
                          size={18}
                          strokeWidth={2}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
            <h2
              className="text-center font-[family-name:var(--font-cormorant)] text-[36px] leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              The right tool for every job.
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {EQUIPMENT.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white"
                    style={cormorant}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {item.description}
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
              Not sure which service fits your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Send us a brief — we&apos;ll recommend the right solution and
              provide a transparent quote within 24 hours.
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
