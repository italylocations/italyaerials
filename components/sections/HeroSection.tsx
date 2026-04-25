"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
};

type TrailPoint = { x: number; y: number };

const PARTICLE_COUNT = 120;
const PARTICLE_SPEED = 0.3;
const CONNECTION_DISTANCE = 90;
const CONNECTION_OPACITY = 0.12;
const TRAIL_MAX = 40;
const MOBILE_BREAKPOINT = 768;

const STATS = [
  { label: "ENAC Certified", value: "Licensed", accent: false },
  { label: "Coverage", value: "All Italy", accent: false },
  { label: "Restricted Sites", value: "Authorized", accent: true },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let isMobile = false;

    const particles: Particle[] = [];
    const trail: TrailPoint[] = [];

    const drone = {
      x: 0,
      y: 0,
      vx: 0.45,
      vy: 0.28,
      bounds: { minX: 0, maxX: 0, minY: 0, maxY: 0 },
      initialized: false,
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const useAccent = Math.random() > 0.4;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
          vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
          size: 0.4 + Math.random() * 1.8,
          opacity: 0.2 + Math.random() * 0.55,
          color: useAccent ? "74, 158, 255" : "200, 220, 255",
        });
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      isMobile = width < MOBILE_BREAKPOINT;

      drone.bounds = {
        minX: width * 0.52,
        maxX: width * 0.9,
        minY: height * 0.15,
        maxY: height * 0.7,
      };
      if (!drone.initialized) {
        drone.x = (drone.bounds.minX + drone.bounds.maxX) / 2;
        drone.y = (drone.bounds.minY + drone.bounds.maxY) / 2;
        drone.initialized = true;
      } else {
        drone.x = Math.min(Math.max(drone.x, drone.bounds.minX), drone.bounds.maxX);
        drone.y = Math.min(Math.max(drone.y, drone.bounds.minY), drone.bounds.maxY);
      }
    };

    const drawParticlesAndConnections = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity =
              CONNECTION_OPACITY * (1 - dist / CONNECTION_DISTANCE);
            ctx.strokeStyle = `rgba(74, 158, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawDrone = (time: number) => {
      drone.x += drone.vx;
      drone.y += drone.vy;
      if (drone.x <= drone.bounds.minX || drone.x >= drone.bounds.maxX) {
        drone.vx *= -1;
        drone.x = Math.min(
          Math.max(drone.x, drone.bounds.minX),
          drone.bounds.maxX
        );
      }
      if (drone.y <= drone.bounds.minY || drone.y >= drone.bounds.maxY) {
        drone.vy *= -1;
        drone.y = Math.min(
          Math.max(drone.y, drone.bounds.minY),
          drone.bounds.maxY
        );
      }

      trail.push({ x: drone.x, y: drone.y });
      if (trail.length > TRAIL_MAX) trail.shift();
      for (let i = 0; i < trail.length; i++) {
        const t = trail[i];
        const ratio = i / trail.length;
        ctx.fillStyle = `rgba(74, 158, 255, ${ratio * 0.32})`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, 1.1 * (ratio + 0.25), 0, Math.PI * 2);
        ctx.fill();
      }

      const armLen = 12;
      const rotorR = 3;

      ctx.save();
      ctx.translate(drone.x, drone.y);

      const arms: Array<[number, number]> = [
        [-armLen, -armLen],
        [armLen, -armLen],
        [armLen, armLen],
        [-armLen, armLen],
      ];

      ctx.strokeStyle = "rgba(232, 244, 255, 0.85)";
      ctx.lineWidth = 1.1;
      ctx.lineCap = "round";
      for (const [ax, ay] of arms) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(ax, ay);
        ctx.stroke();
      }

      for (const [ax, ay] of arms) {
        const grad = ctx.createRadialGradient(ax, ay, 0, ax, ay, rotorR * 2.4);
        grad.addColorStop(0, "rgba(74, 158, 255, 0.55)");
        grad.addColorStop(1, "rgba(74, 158, 255, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ax, ay, rotorR * 2.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(232, 244, 255, 0.92)";
        ctx.beginPath();
        ctx.arc(ax, ay, rotorR, 0, Math.PI * 2);
        ctx.fill();
      }

      const pulse = 0.5 + 0.5 * Math.sin(time * 0.004);
      const centerR = 2.8 + pulse * 1.6;

      const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, centerR * 4);
      halo.addColorStop(0, `rgba(74, 158, 255, ${0.55 + pulse * 0.3})`);
      halo.addColorStop(1, "rgba(74, 158, 255, 0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(0, 0, centerR * 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#4a9eff";
      ctx.beginPath();
      ctx.arc(0, 0, centerR, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    let raf = 0;
    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      drawParticlesAndConnections();
      if (!isMobile) drawDrone(time);
      raf = requestAnimationFrame(render);
    };

    resize();
    initParticles();
    raf = requestAnimationFrame(render);

    const handleResize = () => {
      resize();
      initParticles();
      trail.length = 0;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#0a1628]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://pub-043427812e354c88bd7de61078b56cf3.r2.dev/hero.jpg"
        alt="Aerial view of Rome at night — Italy Aerials"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at 50% 68%, rgba(160,100,30,0.25) 0%, transparent 50%)",
            "radial-gradient(ellipse at 30% 80%, rgba(140,85,20,0.18) 0%, transparent 38%)",
            "radial-gradient(ellipse at 70% 75%, rgba(130,80,15,0.15) 0%, transparent 32%)",
          ].join(", "),
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at 50% 25%, rgba(20,40,80,0.30) 0%, transparent 45%)",
            "radial-gradient(ellipse at 20% 40%, rgba(15,30,70,0.20) 0%, transparent 35%)",
            "radial-gradient(ellipse at 80% 40%, rgba(15,30,70,0.20) 0%, transparent 35%)",
          ].join(", "),
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,14,28,0.80) 0%, rgba(8,14,28,0.45) 50%, rgba(8,14,28,0.08) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 70%, #0d1f35 100%)",
        }}
      />

      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 pt-32 pb-10 lg:px-10">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:max-w-[50%]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4a9eff] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4a9eff]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
            </span>
            Licensed · ENAC Certified · Italy
          </span>

          <h1
            className="mt-8 font-[family-name:var(--font-cormorant)] text-[42px] font-light leading-[1.05] lg:text-[72px]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span
              className="block font-[family-name:var(--font-cormorant)] text-[#e8f4ff]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Aerial Cinematography
            </span>
            <span
              className="block font-[family-name:var(--font-cormorant)] text-[#4a9eff]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Across Italy.
            </span>
          </h1>

          <p className="mt-6 max-w-[420px] text-[16px] leading-[1.8] text-white/50">
            Professional drone photography and video for premium commercial
            productions, advertising campaigns and institutional clients.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#4a9eff] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#7ab8ff]"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(74,158,255,0.45)] px-7 py-3 text-sm font-medium text-[#4a9eff] transition-all hover:border-[#4a9eff] hover:bg-[rgba(74,158,255,0.08)]"
            >
              View Showreel
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-6 sm:flex">
          {STATS.map((stat, idx) => (
            <div key={stat.label} className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-white/30">
                  {stat.label}
                </span>
                <span
                  className={`font-[family-name:var(--font-cormorant)] text-[13px] ${
                    stat.accent ? "text-[#4a9eff]" : "text-[#e8f4ff]"
                  }`}
                >
                  {stat.value}
                </span>
              </div>
              {idx < STATS.length - 1 && (
                <span aria-hidden className="h-8 w-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce opacity-40"
      >
        <ChevronDown className="h-5 w-5 text-[#e8f4ff]" strokeWidth={1.5} />
      </div>
    </section>
  );
}
