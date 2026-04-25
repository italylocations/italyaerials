import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Send a Brief to Italy Aerials",
  description:
    "Send a project brief — locations, dates, deliverables. We reply within 24 hours with a feasibility check and a quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#0d1f35] pt-40 pb-32">
          <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--color-accent)]">
                Contact
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-[var(--color-text-primary)] sm:text-6xl">
                Send us your brief
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-muted)]">
                Locations, dates, deliverables, target audience. The more
                detail you share, the faster we can confirm feasibility,
                permits and a quote — usually within 24 hours.
              </p>
              <div className="mt-10 space-y-3 text-sm text-[var(--color-text-muted)]">
                <p>
                  <span className="text-[var(--color-text-primary)]">Email </span>
                  <a
                    href="mailto:fly@italyaerials.com"
                    className="text-[var(--color-accent)] hover:text-[#7ab8ff]"
                  >
                    fly@italyaerials.com
                  </a>
                </p>
                <p>
                  <span className="text-[var(--color-text-primary)]">Base </span>
                  Rome — operating across Italy
                </p>
                <p>
                  <span className="text-[var(--color-text-primary)]">Hours </span>
                  Mon–Sat, 09:00–19:00 CET
                </p>
              </div>
            </div>
            <form
              action="/api/contact"
              method="post"
              className="space-y-5 rounded-2xl border border-white/5 bg-[#0a1828] p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-[var(--color-text-muted)]">Name</span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-[#0d1f35] px-4 py-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent)]"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-[var(--color-text-muted)]">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-[#0d1f35] px-4 py-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent)]"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="text-[var(--color-text-muted)]">
                  Company / Production
                </span>
                <input
                  name="company"
                  className="mt-2 w-full rounded-md border border-white/10 bg-[#0d1f35] px-4 py-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent)]"
                />
              </label>
              <label className="block text-sm">
                <span className="text-[var(--color-text-muted)]">
                  Project brief
                </span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Locations, dates, deliverables, audience..."
                  className="mt-2 w-full rounded-md border border-white/10 bg-[#0d1f35] px-4 py-3 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent)]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-7 py-3 text-sm font-medium text-[#0d1f35] transition-all hover:bg-[#7ab8ff]"
              >
                Send brief
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
