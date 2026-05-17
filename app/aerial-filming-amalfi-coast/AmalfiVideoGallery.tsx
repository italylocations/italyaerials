"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

type ActiveVideo =
  | { type: "vimeo"; id: string }
  | { type: "youtube"; id: string };

type GalleryVideo = {
  type: "vimeo" | "youtube";
  id: string;
  thumbnail: string;
  title: string;
  location: string;
};

const VIDEOS: GalleryVideo[] = [
  {
    type: "vimeo",
    id: "1193018391",
    thumbnail: "https://vumbnail.com/1193018391.jpg",
    title: "Positano Aerial",
    location: "Positano, Amalfi Coast",
  },
  {
    type: "youtube",
    id: "spxgdYrtqUI",
    thumbnail: "https://img.youtube.com/vi/spxgdYrtqUI/maxresdefault.jpg",
    title: "Postcards from Amalfi — Equalizer 3",
    location: "Atrani, Amalfi Coast",
  },
];

const cormorant = { fontFamily: "var(--font-cormorant)" };

function VideoLightbox({
  active,
  onClose,
}: {
  active: ActiveVideo;
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

  const src =
    active.type === "vimeo"
      ? `https://player.vimeo.com/video/${active.id}?autoplay=1&color=4a9eff&title=0&byline=0&portrait=0&quality=720p&dnt=1`
      : `https://www.youtube.com/embed/${active.id}?autoplay=1`;

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
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded-xl border-0"
          title="Video player"
        />
      </div>
    </div>
  );
}

export default function AmalfiVideoGallery() {
  const [active, setActive] = useState<ActiveVideo | null>(null);

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
        <h2
          className="font-[family-name:var(--font-cormorant)] text-4xl leading-tight text-[#e8f4ff]"
          style={cormorant}
        >
          The Amalfi Coast from above
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
          Selected aerial footage from the Amalfi Coast and surroundings.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {VIDEOS.map((video) => (
            <button
              key={`${video.type}-${video.id}`}
              type="button"
              onClick={() => setActive({ type: video.type, id: video.id })}
              aria-label={`Play ${video.title}`}
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-black text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumbnail}
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

      {active && (
        <VideoLightbox active={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
