import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Italy Aerials collects, uses and protects your personal data — GDPR-compliant privacy policy.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pt-40 pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4a9eff]">
            Legal
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.1] text-[#e8f4ff]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/40">Last updated: April 2026</p>

          <section className="mt-12 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              1. Data Controller
            </h2>
            <p>
              The data controller for personal data collected through this
              website is:
            </p>
            <p>
              <strong className="text-[#e8f4ff]">Italy Aerials</strong>
              <br />
              VAT IT14296561005
              <br />
              Rome, Italy
              <br />
              Email:{" "}
              <a
                href="mailto:fly@italyaerials.com"
                className="text-[#4a9eff] hover:text-[#7ab8ff]"
              >
                fly@italyaerials.com
              </a>
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              2. Data We Collect
            </h2>
            <p>
              We collect the following categories of personal data:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[#e8f4ff]">Contact form data</strong> —
                name, email address, company name and project brief that you
                voluntarily submit.
              </li>
              <li>
                <strong className="text-[#e8f4ff]">Technical data</strong> — IP
                address, browser type, device information and pages visited,
                collected through analytics cookies (only with your consent).
              </li>
            </ul>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              3. Purpose of Processing
            </h2>
            <p>Your personal data is processed for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Responding to inquiries and project briefs submitted via the contact form.</li>
              <li>Providing aerial production services and quotes.</li>
              <li>Analyzing website traffic and improving the user experience (only with your consent).</li>
              <li>Complying with legal obligations.</li>
            </ul>
            <p>
              The legal basis for processing is your consent (Art. 6(1)(a)
              GDPR), the performance of a contract (Art. 6(1)(b) GDPR) and
              compliance with legal obligations (Art. 6(1)(c) GDPR).
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              4. Google Analytics
            </h2>
            <p>
              This website uses Google Analytics 4 (GA4) to collect anonymous
              statistical information about visitors. GA4 is loaded only after
              you give explicit consent through the cookie banner. IP addresses
              are anonymized before being transmitted to Google.
            </p>
            <p>
              Google Analytics is operated by Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Ireland. For more information on
              how Google processes your data, see Google&apos;s{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a9eff] hover:text-[#7ab8ff]"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              5. Cookies
            </h2>
            <p>
              For details on the cookies we use and how to manage your
              preferences, please see our{" "}
              <Link
                href="/cookie-policy"
                className="text-[#4a9eff] hover:text-[#7ab8ff]"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              6. Data Retention
            </h2>
            <p>
              Contact form submissions are retained for as long as necessary to
              respond to your inquiry and for a reasonable period afterwards
              for record-keeping, typically 24 months. Analytics data is
              retained according to Google Analytics default retention settings
              (14 months).
            </p>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              7. Your Rights
            </h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data (right to be forgotten).</li>
              <li>Restrict or object to processing of your data.</li>
              <li>Receive your data in a portable format.</li>
              <li>Withdraw consent at any time.</li>
              <li>
                Lodge a complaint with the Italian Data Protection Authority
                (Garante per la Protezione dei Dati Personali).
              </li>
            </ul>
          </section>

          <section className="mt-10 space-y-4 text-[15px] leading-[1.8] text-white/70">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#e8f4ff]">
              8. Contact
            </h2>
            <p>
              To exercise any of your rights or for any privacy-related
              questions, contact us at{" "}
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
