"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">

      {/* Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.25] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.65))]" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6">
        <div className="max-w-3xl space-y-6 text-center sm:text-left">
          <div className="space-y-3 animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Mohamed Tamer
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl">
              AI & Backend Systems Engineer
            </p>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I design and build multi-tenant AI platforms, distributed systems,
            and backend infrastructure engineered for reliability, scale, and
            real-world production constraints.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:justify-start justify-center" style={{ animationDelay: "0.4s" }}>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
            >About Me
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium shadow-sm backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}