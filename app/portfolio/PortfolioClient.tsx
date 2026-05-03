"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Villa Medici — Festival Cabanes",
    location: "Rome, Italy",
    category: "Institutional",
    vimeoId: "1187576313",
    vimeoUrl: "https://vimeo.com/1187576313",
  },
  {
    id: 2,
    title: "Villa Medici 2026",
    location: "Rome, Italy",
    category: "Institutional",
    vimeoId: "1186679891",
    vimeoUrl: "https://vimeo.com/1186679891",
  },
  {
    id: 3,
    title: "Fattoria Le Pupille",
    location: "Maremma, Tuscany",
    category: "Wine & Food",
    vimeoId: "1180314494",
    vimeoUrl: "https://vimeo.com/1180314494",
  },
  {
    id: 4,
    title: "Ponza Island",
    location: "Lazio, Italy",
    category: "Landscape",
    vimeoId: "1186728844",
    vimeoUrl: "https://vimeo.com/1186728844",
  },
  {
    id: 5,
    title: "Cortina Production",
    location: "Dolomites, Italy",
    category: "Landscape",
    vimeoId: "694392712",
    vimeoUrl: "https://vimeo.com/694392712",
  },
  {
    id: 6,
    title: "BTS Porsche",
    location: "Faroe Islands",
    category: "Automotive",
    vimeoId: "755217732",
    vimeoUrl: "https://vimeo.com/755217732",
  },
  {
    id: 7,
    title: "Garage Nove — Porsche d'Epoca",
    location: "Rome, Italy",
    category: "Automotive",
    vimeoId: "1106559756",
    vimeoUrl: "https://vimeo.com/1106559756",
  },
  {
    id: 8,
    title: "Evento Nissan",
    location: "Viterbo, Italy",
    category: "Commercial",
    vimeoId: "1186741969",
    vimeoUrl: "https://vimeo.com/1186741969",
  },
  {
    id: 9,
    title: "Nissan x Loccioni",
    location: "Italy",
    category: "Commercial",
    vimeoId: "872850138",
    vimeoUrl: "https://vimeo.com/872850138",
  },
  {
    id: 10,
    title: "Roche Pharma",
    location: "Monza, Italy",
    category: "Corporate",
    vimeoId: "1186739317",
    vimeoUrl: "https://vimeo.com/1186739317",
  },
  {
    id: 11,
    title: "Locanda Sospesa",
    location: "Pereta, Tuscany",
    category: "Hospitality",
    vimeoId: "1129466712",
    vimeoUrl: "https://vimeo.com/1129466712",
  },
  {
    id: 12,
    title: "Nals Margreid",
    location: "Alto Adige, Italy",
    category: "Wine & Food",
    vimeoId: "603772674",
    vimeoUrl: "https://vimeo.com/603772674",
  },
  {
    id: 13,
    title: "Andrea Casta Live Show",
    location: "Italy",
    category: "Events",
    vimeoId: "987174283",
    vimeoUrl: "https://vimeo.com/987174283",
  },
  {
    id: 14,
    title: "Ma'aM Collection",
    location: "Italy",
    category: "Fashion",
    vimeoId: "574917894",
    vimeoUrl: "https://vimeo.com/574917894",
  },
];

const equalizer3 = {
  title: "Equalizer 3",
  client: "Sony Pictures",
  location: "Atrani, Amalfi Coast",
  year: "2023",
  youtubeUrl: "https://www.youtube.com/watch?v=tFzhXyG9Mp0&t=1453s",
};

const cormorant = { fontFamily: "var(--font-cormorant)" };

function VideoLightbox({
  vimeoId,
  onClose,
}: {
  vimeoId: string;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      cancelAnimationFrame(raf);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-200 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
      >
        <X size={32} strokeWidth={1.5} />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto w-full max-w-5xl px-4"
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=4a9eff&title=0&byline=0&portrait=0`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded-xl border-0"
          title="Vimeo video player"
        />
      </div>
    </div>
  );
}

export default function PortfolioClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const projectCount = projects.length + 1;

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#0d1f35]">
        <section className="pb-20 pt-40">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#4a9eff]">
              Portfolio
            </p>
            <h1
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl leading-[1.02] text-[#e8f4ff] sm:text-[64px]"
              style={cormorant}
            >
              Every frame tells a story.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
              Selected aerial work across Italy and Europe.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-white/40">
              {projectCount} projects
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveVideo(project.vimeoId)}
                  aria-label={`Play ${project.title}`}
                  className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-black text-left"
                >
                  <img
                    src={`https://vumbnail.com/${project.vimeoId}.jpg`}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#e8f4ff] backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1 transition-transform duration-300 group-hover:-translate-y-1">
                    <span
                      className="leading-tight text-white"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "18px",
                      }}
                    >
                      {project.title}
                    </span>
                    <span
                      className="text-white/50"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.location}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-8 mt-16 flex flex-col items-center text-center">
              <span className="mb-6 text-xs uppercase tracking-[0.2em] text-[#4a9eff]">
                Featured Production
              </span>
              <div className="relative mb-8 w-64 overflow-hidden rounded-xl border border-[rgba(74,158,255,0.3)] shadow-[0_0_40px_rgba(74,158,255,0.15)]">
                <img
                  src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/thumbnails/equalizer3-dvd.jpg"
                  alt="Equalizer 3 — Sony Pictures"
                  className="block h-auto w-full"
                />
              </div>
              <span className="mb-3 text-xs uppercase tracking-[0.2em] text-[#4a9eff]">
                {equalizer3.client} · {equalizer3.year}
              </span>
              <h3
                className="mb-3 font-[family-name:var(--font-cormorant)] text-5xl font-light text-white"
                style={cormorant}
              >
                {equalizer3.title}
              </h3>
              <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
                Aerial footage · {equalizer3.location}
              </p>
              <a
                href={equalizer3.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,158,255,0.3)] px-6 py-2 text-sm text-[#4a9eff] transition-all hover:bg-[rgba(74,158,255,0.1)]"
              >
                Watch the making of →
              </a>
            </div>
          </div>
        </section>

        <section className="pb-32 pt-8">
          <div className="mx-auto w-full max-w-3xl px-6 text-center lg:px-10">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-[48px] leading-tight text-[#e8f4ff]"
              style={cormorant}
            >
              Ready to start your project?
            </h2>
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

      {activeVideo && (
        <VideoLightbox
          vimeoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
