"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  "Aerial Photography",
  "Aerial Video / Cinematography",
  "Commercial Production",
  "Institutional / Documentary",
  "Real Estate & Architecture",
  "Events & Live Coverage",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-[#4a9eff] focus:outline-none";

const labelClass =
  "mb-1.5 block text-xs uppercase tracking-widest text-white/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Request failed.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Unexpected error."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-[rgba(74,158,255,0.25)] bg-[rgba(74,158,255,0.04)] p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(74,158,255,0.15)]">
          <Check className="h-6 w-6 text-[#4a9eff]" strokeWidth={2} />
        </span>
        <h2
          className="font-[family-name:var(--font-cormorant)] text-[32px] leading-tight text-[#e8f4ff]"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Brief received.
        </h2>
        <p className="text-sm leading-relaxed text-white/50">
          We&apos;ll be in touch within 24 hours with a permit check and quote.
        </p>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[rgba(255,255,255,0.02)] p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company / Production
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company or production name (optional)"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className={`${inputClass} appearance-none bg-[#0d1f35]`}
        >
          <option value="" disabled>
            Select project type...
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-[#0d1f35]">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className={labelClass}>
            Location in Italy
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Rome, Tuscany, Amalfi Coast..."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="shootingDate" className={labelClass}>
            Shooting Date
          </label>
          <input
            id="shootingDate"
            name="shootingDate"
            type="text"
            placeholder="Approximate date or period"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Describe your project, specific requirements, restricted locations, equipment needs..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.08)] px-4 py-3 text-sm text-[#fca5a5]"
        >
          Something went wrong{errorMessage ? ` (${errorMessage})` : ""}. Please
          email us directly at{" "}
          <a
            href="mailto:fly@italyaerials.com"
            className="underline hover:text-[#fecaca]"
          >
            fly@italyaerials.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4a9eff] py-4 text-sm font-medium text-[#0d1f35] transition-all hover:bg-[#7ab8ff] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending…
          </>
        ) : (
          "Send Project Brief"
        )}
      </button>
    </form>
  );
}
