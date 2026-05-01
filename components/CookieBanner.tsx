"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";
const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

type Consent = "accepted" | "declined" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setHydrated(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const decline = () => {
    window.localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  };

  const showBanner = hydrated && consent === null;
  const loadGa = hydrated && consent === "accepted" && Boolean(GA_ID);

  return (
    <>
      {loadGa && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      <div
        role="dialog"
        aria-label="Cookie consent"
        aria-hidden={!showBanner}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(74,158,255,0.2)] bg-[#0d1f35]/95 backdrop-blur-md transition-all duration-300 ${
          showBanner
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-sm leading-relaxed text-white/70">
            We use cookies to analyze traffic and improve your experience. By
            accepting, you consent to our use of Google Analytics. See our{" "}
            <Link
              href="/cookie-policy"
              className="text-[#4a9eff] underline underline-offset-2 hover:text-[#7ab8ff]"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={decline}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/60 transition-colors hover:border-white/40 hover:text-white/80"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-full bg-[#4a9eff] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#7ab8ff]"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
