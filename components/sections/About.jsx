"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="w-full bg-white py-16" id="about" ref={ref}>
      <Container>
        <SectionTitle className={isVisible ? "animate-fade-in-up" : "opacity-0"}>About Me</SectionTitle>

        <div className={`mt-12 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="text-left">
            <p className="text-black/80 text-base sm:text-lg leading-relaxed">
              I’m a backend and AI systems engineer focused on designing and building reliable, production-grade software.
              My work centers around multi-tenant architectures, AI ingestion pipelines, distributed systems, and
              observability-driven tooling.
            </p>

            <p className="mt-4 text-black/70 text-base sm:text-lg leading-relaxed">
              I’m particularly interested in the engineering challenges that emerge once software moves beyond demos —
              concurrency, isolation, failure modes, cost constraints, and long-term maintainability.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Multi-tenant", "AI pipelines", "Distributed systems", "Observability", "Reliability"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-sm text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-40 w-40 sm:h-56 sm:w-56">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.35),transparent_60%)] blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-black/10 bg-black/[0.03]">
                <Image
                  src="/me.jpg"
                  alt="Mohamed Tamer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}