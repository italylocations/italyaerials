import Link from "next/link";
import { Camera, Film, Building2, Calendar, Plane, Shield } from "lucide-react";

const SERVICES = [
  {
    icon: Camera,
    title: "Aerial Photography",
    description:
      "High-resolution stills for editorial, hospitality and advertising — colour-graded and delivered as RAW or print-ready files.",
  },
  {
    icon: Film,
    title: "Aerial Video",
    description:
      "Cinematic 6K and 8K footage with smooth, controlled camera moves designed for broadcast, brand films and commercials.",
  },
  {
    icon: Plane,
    title: "Cinematic Production",
    description:
      "End-to-end aerial direction: storyboards, location scouting, permitting, on-set execution and post-production grading.",
  },
  {
    icon: Building2,
    title: "Real Estate & Hospitality",
    description:
      "Architectural reveals for villas, vineyards, resorts and historic estates positioned for international audiences.",
  },
  {
    icon: Calendar,
    title: "Events & Live Coverage",
    description:
      "Discreet aerial coverage for weddings, festivals, fashion shows and institutional events across Italy.",
  },
  {
    icon: Shield,
    title: "Permit & Airspace Management",
    description:
      "Full handling of ENAC authorizations, ENAV coordination and Prefecture permits for restricted zones, historic sites and controlled airspace across Italy.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#0d1f35] py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
              What we do
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[var(--color-text-primary)] sm:text-5xl">
              A complete aerial production service
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm text-[var(--color-accent)] hover:text-[#7ab8ff]"
          >
            All services →
          </Link>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 bg-[#0d1f35] p-8 transition-colors hover:bg-[#10243d]"
            >
              <Icon
                className="h-7 w-7 text-[var(--color-accent)]"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-2xl text-[var(--color-text-primary)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
