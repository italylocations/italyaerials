import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookies used by Italy Aerials, the purposes they serve and how to manage your preferences.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pt-40 pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4a9eff]">
            Legal
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.1] text-[#e8f4ff]">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-white/40">Last updated: April 2026</p>

          <section className="mt-12 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They allow the site to remember your preferences and
              actions, and they help the site owner understand how visitors
              interact with the site.
            </p>
            <p>
              This website uses cookies in compliance with the GDPR and the
              Italian Personal Data Protection Code. No analytics or
              non-essential cookies are set until you give explicit consent
              through the cookie banner.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              2. Cookies We Use
            </h2>

            <div className="mt-4 space-y-6">
              <div className="rounded-2xl border border-white/5 bg-[#0a1828] p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
                  Strictly necessary
                </p>
                <p className="mt-2 font-[family-name:var(--font-cormorant)] text-xl text-[#e8f4ff]">
                  cookie-consent
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Stores your cookie preference (accepted / declined) so the
                  banner is not shown again. Set in your browser&apos;s local
                  storage. No personal data, no third-party transmission.
                </p>
                <p className="mt-2 text-xs text-white/40">
                  Provider: Italy Aerials · Duration: persistent until cleared
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#0a1828] p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
                  Analytics — only with consent
                </p>
                <p className="mt-2 font-[family-name:var(--font-cormorant)] text-xl text-[#e8f4ff]">
                  Google Analytics 4 (G-H1C6H49J0M)
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Collects anonymous statistical information about visitors —
                  pages visited, session duration, country and device type. IP
                  addresses are anonymized. Loaded only after you accept the
                  cookie banner.
                </p>
                <p className="mt-2 text-xs text-white/40">
                  Provider: Google Ireland Limited · Duration: up to 14 months
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              3. How to Manage Cookies
            </h2>
            <p>You can manage your cookie preferences in two ways:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[#e8f4ff]">On this site</strong> —
                clear your browser&apos;s local storage for italyaerials.com
                and the cookie banner will reappear on your next visit, letting
                you change your choice.
              </li>
              <li>
                <strong className="text-[#e8f4ff]">In your browser</strong> —
                most browsers let you block or delete cookies through their
                settings. Refer to your browser&apos;s help pages for
                instructions.
              </li>
            </ul>
            <p>
              Declining analytics cookies will not affect the functionality of
              this website.
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              4. More Information
            </h2>
            <p>
              For details on how we process personal data more generally,
              please see our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#4a9eff] hover:text-[#7ab8ff]"
              >
                Privacy Policy
              </Link>
              . For any questions, write to{" "}
              <a
                href="mailto:fly@italyaerials.com"
                className="text-[#4a9eff] hover:text-[#7ab8ff]"
              >
                fly@italyaerials.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
