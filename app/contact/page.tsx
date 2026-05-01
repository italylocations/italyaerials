import type { Metadata } from "next";
import { Mail, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project | Italy Aerials",
  description:
    "Tell us about your project. We respond within 24 hours with a permit feasibility check and a quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="pb-32 pt-40">
          <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[40fr_60fr] lg:gap-20 lg:px-10">
            <div className="flex flex-col">
              <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
                Get in Touch
              </p>
              <h1
                className="mt-6 font-[family-name:var(--font-cormorant)] text-[48px] leading-[1.05] text-[#e8f4ff]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Let&apos;s plan your shoot
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/60">
                Tell us about your project — location, dates, deliverables. We
                reply within 24 hours with a permit feasibility check and a
                quote.
              </p>

              <ul className="mt-10 flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#4a9eff]"
                  />
                  <a
                    href="mailto:fly@italyaerials.com"
                    className="text-sm text-[#e8f4ff] transition-colors hover:text-[#4a9eff]"
                  >
                    fly@italyaerials.com
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#4a9eff]"
                  />
                  <span className="text-sm text-[#e8f4ff]">
                    Rome — Operating across Italy
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Shield
                    size={20}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#4a9eff]"
                  />
                  <span className="text-sm text-[#e8f4ff]">
                    ENAC Licensed · Fully Insured
                  </span>
                </li>
              </ul>

              <div className="mt-10 h-px w-full bg-white/10" />

              <p className="mt-6 text-xs uppercase tracking-widest text-white/50">
                Average response time: under 4 hours
              </p>

              <p className="mt-auto pt-12 text-xs text-white/30">
                Part of italylocations.com · italycreatives.com · nreal.it
              </p>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
