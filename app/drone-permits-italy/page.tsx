import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Drone Permits in Italy: Complete Guide for International Productions | Italy Aerials",
  description:
    "Everything international productions need to know about drone permits in Italy. ENAC regulations, restricted zones, Rome, Amalfi Coast, historic centers. Written by licensed operators.",
  alternates: { canonical: "/drone-permits-italy" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Drone Permits in Italy: Complete Guide for International Productions",
  author: {
    "@type": "Organization",
    name: "Italy Aerials",
    url: "https://italyaerials.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Italy Aerials",
    url: "https://italyaerials.com",
  },
  description:
    "Complete guide to drone permits and regulations in Italy for commercial and film productions. Written by ENAC licensed operators with experience in Rome, Amalfi Coast and restricted zones.",
  url: "https://italyaerials.com/drone-permits-italy",
};

const cormorant = { fontFamily: "var(--font-cormorant)" };

const CATEGORIES = [
  {
    title: "Open Category",
    description:
      "Low-risk operations. Maximum altitude 120m AGL. Direct visual line of sight required at all times. Suitable for open countryside and non-restricted areas. Sub-250g drones have more flexibility.",
  },
  {
    title: "Specific Category",
    description:
      "Higher-risk operations requiring ENAC authorization or a formal operational declaration. Covers urban environments, restricted zones, proximity to people. Most commercial productions fall here.",
  },
  {
    title: "Certified Category",
    description:
      "Reserved for the highest-risk operations including large payload drones. Requires full certification similar to manned aviation. Rarely applicable to standard commercial filming.",
  },
];

const ZONES = [
  {
    title: "Rome — the most regulated city in Italy",
    body: "Rome's historic center is classified as one of Italy's most restricted drone zones. The area encompasses the Colosseum, the Roman Forum, the Vatican, major monuments and the surrounding parks — all subject to a complete flight ban without specific ENAC authorization combined with clearance from security forces. The control zones around Ciampino and Fiumicino airports extend over significant portions of the city, adding an additional layer of airspace restrictions. UNESCO-designated sites within Rome require coordination with the Soprintendenza dei Beni Culturali on top of standard ENAC procedures. Our pilots are specifically authorized to operate in Rome's historic center. We have filmed at Villa Medici — one of Rome's most restricted and prestigious institutional venues — for the Académie de France à Rome.",
  },
  {
    title: "The Amalfi Coast — UNESCO and maritime airspace",
    body: "The Amalfi Coast is a UNESCO World Heritage Site, and drone operations here are among the most complex in Italy. Beyond standard ENAC authorization, operators must coordinate with the Soprintendenza, local municipal offices, and maritime authorities given the coastal airspace. The dramatic terrain — cliffs, narrow valleys, strong coastal winds — adds an operational layer that makes experience on this specific coastline essential. Our aerial footage of Atrani on the Amalfi Coast was featured in Sony Pictures' Equalizer 3 — a production that required navigating every layer of this regulatory complexity.",
  },
  {
    title: "Milan and Venice",
    body: "Milan's historic center — particularly around the Duomo and the Galleria Vittorio Emanuele II — is subject to similar restrictions to Rome. Venice presents unique challenges: the combination of narrow canals, high pedestrian density, historic architecture and maritime traffic creates a complex operational environment. Permits for Venice typically require coordination with multiple authorities and significant advance notice.",
  },
  {
    title: "National Parks and Protected Areas",
    body: "Italy's national parks and protected natural areas have their own drone regulations, which vary by park and region. In many cases, drone operations are prohibited entirely or require specific environmental authority authorization in addition to ENAC clearance.",
  },
];

const TIPS = [
  {
    title: "Book early",
    body: "For any shoot involving restricted zones, historic centers or UNESCO sites, contact us at least 4-6 weeks before your planned shooting date. Earlier is always better — authorization timelines in Italy are not always predictable.",
  },
  {
    title: "One point of contact",
    body: "Working with Italy Aerials means you have a single point of contact who coordinates the aerial unit, the pilot, the permits and the logistics. You brief us once — we handle the rest.",
  },
  {
    title: "Be specific in your brief",
    body: "The more detail you provide about your intended locations, the more accurately we can assess permit feasibility and realistic timelines. A vague location can mean the difference between 2 weeks and 6 weeks of lead time.",
  },
];

const FAQS = [
  {
    question:
      "Can a foreign drone operator come to Italy and film commercially?",
    answer:
      "Yes, but they must comply with ENAC and EASA regulations, which means registering through the D-Flight platform, holding appropriate insurance, and obtaining authorization for any restricted zone operations. In practice, most international productions find it significantly easier and more reliable to work with locally based, pre-authorized Italian operators.",
  },
  {
    question:
      "Do you obtain permits for operators we bring from our home country?",
    answer:
      "No. The permit system in Italy is tied to the individual pilot — the authorization is issued to the licensed operator who will actually fly. We do not obtain permits on behalf of external pilots. If you work with Italy Aerials, the authorized pilot is part of our network and manages their own clearances for each project.",
  },
  {
    question: "What happens if we film without a permit in a restricted zone?",
    answer:
      "Fines for unauthorized drone operations in Italy can reach tens of thousands of euros. In extreme cases, equipment can be confiscated. Beyond the financial risk, unauthorized operations near sensitive sites can create serious legal liability for the production company. It is never worth the risk.",
  },
  {
    question: "Can you film near the Colosseum or Vatican?",
    answer:
      "These are among Rome's most restricted zones. Operations here require a multi-authority authorization process. We assess these requests case by case — contact us with your specific brief and we will tell you honestly whether it is feasible within your timeline.",
  },
  {
    question: "What is D-Flight?",
    answer:
      "D-Flight (d-flight.it) is ENAC's official platform for drone airspace management in Italy. All commercial drone pilots must plan and declare their operations through D-Flight before each flight. It also serves as the real-time map of restricted and geo-fenced zones across Italy.",
  },
];

const TIMELINES = [
  { label: "Standard open locations", value: "5–10 working days" },
  { label: "Urban environments (non-historic)", value: "10–15 working days" },
  { label: "Historic centers and restricted zones", value: "15–35 days" },
  { label: "UNESCO sites with Soprintendenza", value: "4–6 weeks minimum" },
];

export default function DronePermitsItalyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="pb-20 pt-40">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="text-xs text-white/30">
              <Link href="/" className="hover:text-white/60">
                Italy Aerials
              </Link>
              <span className="mx-2">/</span>
              <span>Drone Permits Italy</span>
            </nav>
            <p className="mt-10 text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
              Guide · Updated 2026
            </p>
            <h1
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.05] text-[#e8f4ff] sm:text-[56px]"
              style={cormorant}
            >
              Drone Permits in Italy: What International Productions Need to
              Know
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
              Italy has some of Europe&apos;s most complex drone regulations —
              particularly for historic sites, UNESCO zones and urban
              environments. This guide explains the system from the
              perspective of operators who navigate it every day.
            </p>
            <p className="mt-6 text-sm italic text-white/40">
              Written by Italy Aerials — ENAC licensed drone operators based in
              Rome.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              How Italy&apos;s drone regulation works
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/60">
              <p>
                Italy&apos;s drone regulations operate on two levels. At the
                European level, EASA Regulation EU 2019/947 establishes the
                baseline framework that applies across all EU member states.
                At the national level, ENAC — the Italian Civil Aviation
                Authority (Ente Nazionale per l&apos;Aviazione Civile) —
                implements and extends these rules with Italy-specific
                requirements, restricted zones and authorization procedures.
              </p>
              <p>
                For international productions coming to Italy, the key
                takeaway is this: ENAC&apos;s national rules often go
                significantly beyond the European baseline. A drone operation
                that would be routine in another EU country may require
                specific authorization in Italy — particularly in urban
                environments, near cultural heritage sites, or in coastal and
                mountainous areas.
              </p>
            </div>

            <h3
              className="mt-12 font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              The three operational categories
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h4
                    className="font-[family-name:var(--font-cormorant)] text-xl leading-tight text-white"
                    style={cormorant}
                  >
                    {cat.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              D-Flight: Italy&apos;s official airspace platform
            </h2>
            <p className="mt-8 text-base leading-relaxed text-white/60">
              All drone operations in Italy must be planned and declared
              through D-Flight, ENAC&apos;s official airspace management
              platform (d-flight.it). D-Flight serves as the primary tool for
              checking no-fly zones, restricted areas, and geographic UAS
              zones across Italy. For commercial operations, pilots must file
              their flight plan on D-Flight before each operation. The
              platform maps all restricted zones in real time and is the
              reference point for any permit application. Failure to use
              D-Flight for planning and declaration can result in significant
              fines, even if the flight itself would otherwise be legal.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Insurance: what the law requires
            </h2>
            <p className="mt-8 text-base leading-relaxed text-white/60">
              All drone operations in Italy — commercial or recreational —
              require third-party liability insurance. The legal minimum
              coverage is 750,000 Special Drawing Rights, equivalent to
              approximately €920,000. For commercial productions, this minimum
              is often insufficient. Italy Aerials requires all pilots in our
              network to carry a minimum of €1,300,000 RC (Responsabilità
              Civile) coverage — above the legal minimum — to ensure full
              protection for clients, crew and bystanders on any production.
              When hiring a drone operator in Italy, always request proof of
              insurance before the shoot. Check that the coverage amount is
              adequate for your production&apos;s liability requirements.
            </p>
            <div className="mt-8 rounded-xl border border-[rgba(74,158,255,0.2)] bg-[rgba(74,158,255,0.08)] p-6 text-sm leading-relaxed text-white/70">
              <p>
                <span className="font-medium text-[#4a9eff]">
                  Italy Aerials minimum:
                </span>{" "}
                €1,300,000 RC per pilot ·{" "}
                <span className="font-medium text-[#4a9eff]">
                  ENAC legal minimum:
                </span>{" "}
                ~€920,000 · Always request proof of insurance before the
                shoot.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Italy&apos;s most restricted zones for drone filming
            </h2>
            <p className="mt-8 text-base leading-relaxed text-white/60">
              Italy has an unusually high concentration of protected, historic
              and sensitive locations. Understanding where restrictions apply
              — and how to navigate them — is essential for any production
              planning aerial work in the country.
            </p>

            <div className="mt-10 flex flex-col gap-10">
              {ZONES.map((zone) => (
                <div key={zone.title}>
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-[#e8f4ff]"
                    style={cormorant}
                  >
                    {zone.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    {zone.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              How drone permits actually work in Italy
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-white/60">
              <p>
                Understanding how the Italian permit process works in practice
                — not just on paper — is critical for production planning.
              </p>
              <p>
                In Italy, the responsibility for obtaining flight authorization
                rests entirely with the licensed pilot, not with the
                production company or the client. When you commission an
                aerial shoot with Italy Aerials, the pilot assigned to your
                project activates the permit process directly with the
                relevant authorities: ENAC for airspace authorization, ENAV
                for air traffic coordination where applicable, the local
                Prefecture or Questura for restricted zones near government or
                diplomatic buildings, and the Soprintendenza dei Beni
                Culturali for UNESCO or heritage sites.
              </p>
              <p>
                This is not a service we offer separately or on behalf of
                third-party operators. The pilot who will be on your set is
                the one who obtains and holds the authorization for that
                specific operation. This ensures clear legal accountability
                and a direct relationship between the operator and the
                authorities.
              </p>
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
              <h4
                className="font-[family-name:var(--font-cormorant)] text-xl leading-tight text-white"
                style={cormorant}
              >
                Realistic timelines
              </h4>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-white/70">
                {TIMELINES.map((row) => (
                  <li
                    key={row.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-white/5 pb-2 last:border-0"
                  >
                    <span>{row.label}</span>
                    <span className="text-[#4a9eff]">{row.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic text-white/40">
                These are practical estimates based on our operational
                experience. Regulatory timelines can vary based on location,
                season and authority workload. We always recommend building in
                buffer time for productions in sensitive locations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Planning your production: practical advice
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {TIPS.map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <h3
                    className="font-[family-name:var(--font-cormorant)] text-2xl leading-tight text-white"
                    style={cormorant}
                  >
                    {tip.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Common questions from international productions
            </h2>
            <div className="mt-10 flex flex-col gap-8">
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
              Planning an aerial shoot in Italy?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">
              Send us your brief — locations, dates and what you need.
              We&apos;ll assess permit feasibility for your specific locations
              and respond within 24 hours.
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
