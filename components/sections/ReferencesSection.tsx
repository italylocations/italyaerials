const REFERENCES = [
  {
    name: "Villa Medici",
    location: "Rome — Académie de France",
    note: "Aerial coverage of the historic gardens and façade for institutional communication.",
  },
  {
    name: "Le Pupille",
    location: "Maremma, Tuscany",
    note: "Cinematic vineyard portrait for an internationally distributed wine label.",
  },
  {
    name: "Italy Locations",
    location: "Pan-Italy",
    note: "Ongoing aerial library for the location-scouting platform serving international productions.",
  },
];

export default function ReferencesSection() {
  return (
    <section className="border-y border-white/5 bg-[#0a1828] py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
          Trusted by
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[var(--color-text-primary)] sm:text-5xl">
          Trusted by institutions and premium brands
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {REFERENCES.map((reference) => (
            <div
              key={reference.name}
              className="flex flex-col gap-3 border-l border-[var(--color-accent)]/30 pl-6"
            >
              <p className="font-serif text-2xl text-[var(--color-text-primary)]">
                {reference.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
                {reference.location}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {reference.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
