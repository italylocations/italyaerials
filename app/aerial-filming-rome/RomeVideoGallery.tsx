"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type GalleryVideo = {
  vimeoId: string;
  title: string;
  location: string;
};

const VIDEOS: GalleryVideo[] = [
  {
    vimeoId: "1187576313",
    title: "Villa Medici — Festival Cabanes",
    location: "Rome, Italy",
  },
  {
    vimeoId: "1186679891",
    title: "Villa Medici 2026",
    location: "Rome, Italy",
  },
  {
    vimeoId: "1117589933",
    title: "Rome Aerial",
    location: "Rome, Italy",
  },
];

const cormorant = { fontFamily: "var(--font-cormorant)" };

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

export default function RomeVideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
        <h2
          className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
          style={cormorant}
        >
          Rome from above — selected work
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          Aerial footage captured in Rome and Lazio for institutional and
          commercial clients.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <button
              key={video.vimeoId}
              type="button"
              onClick={() => setActiveVideo(video.vimeoId)}
              aria-label={`Play ${video.title}`}
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-black text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://vumbnail.com/${video.vimeoId}.jpg`}
                alt={`${video.title} — aerial drone footage in ${video.location}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#0d1f35] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play
                    size={24}
                    strokeWidth={1.5}
                    className="ml-1 fill-current"
                  />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                <span
                  className="font-[family-name:var(--font-cormorant)] text-[20px] leading-tight text-white"
                  style={cormorant}
                >
                  {video.title}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-white/55">
                  {video.location}
                </span>
              </div>
            </button>
          ))}
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
