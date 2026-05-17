"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type VideoCard = {
  title: string;
  location: string;
  category: string;
  videoSrc: string;
  vimeoId: string;
};

const VIDEO_CARDS: VideoCard[] = [
  {
    title: "Villa Medici",
    location: "Rome, Italy",
    category: "Institutional",
    videoSrc:
      "https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/previews/villamedici.mp4",
    vimeoId: "1186679891",
  },
  {
    title: "Fattoria Le Pupille",
    location: "Maremma, Tuscany",
    category: "Wine & Food",
    videoSrc:
      "https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/previews/pupille.mp4",
    vimeoId: "1180314494",
  },
  {
    title: "Ponza Island",
    location: "Lazio, Italy",
    category: "Landscape",
    videoSrc:
      "https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/previews/ponza.mp4",
    vimeoId: "1186728844",
  },
  {
    title: "Cortina Production",
    location: "Dolomites, Italy",
    category: "Landscape",
    videoSrc:
      "https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/previews/cortina.mp4",
    vimeoId: "694392712",
  },
];

function VideoPreviewCard({
  card,
  onPlay,
}: {
  card: VideoCard;
  onPlay: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`Play ${card.title}`}
      className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black text-left"
    >
      <video
        src={card.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <span className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#e8f4ff] backdrop-blur-sm">
        {card.category}
      </span>
      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
        <span
          className="font-[family-name:var(--font-cormorant)] text-[20px] leading-tight text-white"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {card.title}
        </span>
        <span className="text-[11px] uppercase tracking-widest text-white/55">
          {card.location}
        </span>
      </div>
    </button>
  );
}

function Equalizer3Card() {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-[rgba(74,158,255,0.3)] bg-black">
      <video
        src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/portfolio/previews/equalizer3.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="rounded-full border border-[rgba(74,158,255,0.6)] bg-[rgba(74,158,255,0.08)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#4a9eff]">
          Sony Pictures · 2023
        </span>
        <span
          aria-hidden
          className="block h-px w-16 bg-gradient-to-r from-transparent via-[rgba(74,158,255,0.6)] to-transparent"
        />
        <h3
          className="font-[family-name:var(--font-cormorant)] text-[24px] leading-tight text-white"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Equalizer 3
        </h3>
        <span
          aria-hidden
          className="block h-px w-16 bg-gradient-to-r from-transparent via-[rgba(74,158,255,0.6)] to-transparent"
        />
        <p className="text-[12px] text-white/50">
          Aerial footage · Atrani, Amalfi Coast
        </p>
        <a
          href="https://www.youtube.com/watch?v=tFzhXyG9Mp0&t=1453s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#4a9eff] transition-colors hover:text-[#7ab8ff]"
        >
          Watch making of →
        </a>
      </div>
    </div>
  );
}

function VideoLightbox({
  vimeoId,
  onClose,
}: {
  vimeoId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
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
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&color=4a9eff&title=0&byline=0&portrait=0&quality=720p&dnt=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded-xl border-0"
          title="Vimeo video player"
        />
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-[#0d1f35] py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[#4a9eff]">
            Selected Work
          </p>
          <h2
            className="mt-4 max-w-3xl font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff] sm:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Cinematic work across Italy
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
            From institutional landmarks to international productions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-6">
          <div className="md:col-span-2">
            <VideoPreviewCard
              card={VIDEO_CARDS[0]}
              onPlay={() => setActiveVideo(VIDEO_CARDS[0].vimeoId)}
            />
          </div>
          <div className="md:col-span-2">
            <VideoPreviewCard
              card={VIDEO_CARDS[1]}
              onPlay={() => setActiveVideo(VIDEO_CARDS[1].vimeoId)}
            />
          </div>
          <div className="md:col-span-2">
            <VideoPreviewCard
              card={VIDEO_CARDS[2]}
              onPlay={() => setActiveVideo(VIDEO_CARDS[2].vimeoId)}
            />
          </div>
          <div className="md:col-span-2 md:col-start-2">
            <VideoPreviewCard
              card={VIDEO_CARDS[3]}
              onPlay={() => setActiveVideo(VIDEO_CARDS[3].vimeoId)}
            />
          </div>
          <div className="md:col-span-2">
            <Equalizer3Card />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(74,158,255,0.45)] px-7 py-3 text-sm font-medium text-[#4a9eff] transition-all hover:border-[#4a9eff] hover:bg-[rgba(74,158,255,0.08)]"
          >
            View All Work →
          </Link>
        </div>
      </div>

      {activeVideo && (
        <VideoLightbox
          vimeoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
