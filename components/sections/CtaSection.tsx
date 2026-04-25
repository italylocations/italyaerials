import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d1f35] py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,158,255,0.14),transparent_65%)]"
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
          Ready when you are
        </p>
        <h2 className="mt-6 font-serif text-4xl leading-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
          Let&apos;s plan your shoot
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
          Send us a brief — locations, dates, deliverables. We reply within
          24 hours with a permit feasibility check and a quote.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-medium text-[#0d1f35] transition-all hover:bg-[#7ab8ff]"
          >
            Send a brief
          </Link>
          <a
            href="mailto:fly@italyaerials.com"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            fly@italyaerials.com
          </a>
        </div>
      </div>
    </section>
  );
}
